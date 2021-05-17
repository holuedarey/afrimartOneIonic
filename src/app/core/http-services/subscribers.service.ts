import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AccountSetupResponseModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  apiUrl:string = `${environment.apiUrl}subscribers/`;

  constructor(private http: HttpClient) { }

  subscribeForEmailNotifications(data:any){
    return this.http.post<AccountSetupResponseModel>(`${this.apiUrl}subscribe`, data);
  }
}
