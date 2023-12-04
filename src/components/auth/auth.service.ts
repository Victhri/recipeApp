import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

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
    constructor(private http: HttpClient, private router: Router){}

    userSubject = new BehaviorSubject<User | any>(null);
    private tokenExpirationTime: any;

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
    logout(){
        this.userSubject.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTime) {
            clearTimeout(this.tokenExpirationTime);
        }
        this.tokenExpirationTime = null;
    }
    autoLogout(expirationDuration: number) {
        this.tokenExpirationTime = setTimeout(()=> {
            this.logout();
        }, expirationDuration)
    }

    autoLogin() {
        const userData = localStorage.getItem('userData');
        if(!userData) {
            return
        }
        const parsedUserData:{
            email: string,
            id: string,
            _tockenExpirationDate: string,
            _token: string,
        } = JSON.parse(userData);
     
        const loadedUser = new User(
            parsedUserData.email, 
            parsedUserData.id, 
            parsedUserData._token, 
            new Date(parsedUserData._tockenExpirationDate)
        )
        if(loadedUser.token) {
            const expDuration = new Date(parsedUserData._tockenExpirationDate).getTime() - new Date().getTime()
            this.userSubject.next(loadedUser);
            this.autoLogout(expDuration);
        }
        
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
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user))
    }

}