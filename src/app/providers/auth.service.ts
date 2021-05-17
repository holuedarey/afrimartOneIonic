import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private jwtHelper = new JwtHelperService();
  constructor() { }

  public isAuthenticated(): boolean {
    const bu:any =JSON.parse(localStorage.getItem('BaseUser')) ;    
    if(bu)
    {// console.log('BaseUser: '+JSON.stringify(bu))
      if(bu)   {return true; } else {return false; }
    }
    else {return false;}
   
  }
}
