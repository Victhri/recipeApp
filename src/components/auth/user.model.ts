export class User {
    constructor(
        public email: string, 
        public id: string, 
        private _token: string, 
        private _tockenExpirationDate: Date
        ) {}
        get token() {
            if(!this._tockenExpirationDate || new Date() > this._tockenExpirationDate){
                return null;
            }
            return this._token;   
        }
}