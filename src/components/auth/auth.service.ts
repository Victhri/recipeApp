import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";

export interface AuthResponceData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean,
}
@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient){}
    userSubject = new Subject<User>()

    signup(email: string, password: string ) {
        return this.http.post<AuthResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPS9avrO0U6MRheHoIrkmN4CXmKiUjaxs', {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(catchError(this.handleError), 
        tap(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        }))
    }

    login(email: string, password: string ) {
        return this.http.post<AuthResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPS9avrO0U6MRheHoIrkmN4CXmKiUjaxs', {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(catchError(this.handleError),
        tap(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        }))
    }

    private handleError(errorResponse: HttpErrorResponse ){
        let errorMessage = "An unknown message";
        if(!errorResponse.error || !errorResponse.error.error) {
            return throwError(()=> new Error(errorMessage));
        }
        switch(errorResponse.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = "An email has already exists!";
                break;
            case "INVALID_LOGIN_CREDENTIALS":
                errorMessage = "An invalid login credentials!";
                break;
        }
        return throwError(()=> new Error(errorMessage));
    }

    private handleAuthentication(email: string,id: string, token: string,expiresIn: number) {
        const expDate = new Date(new Date().getTime() + expiresIn* 1000)
        const user = new User(email, id, token, expDate)
        this.userSubject.next(user);
    }

}