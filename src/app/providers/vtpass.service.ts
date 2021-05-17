import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import * as uni from '../globals/universal';

@Injectable()
export class VtPassService {
  sk=uni.k;
  rootURL = uni.rootURL;
  scheme=uni.scheme;

 
constructor(private http:HttpClient) { }
getVariations(serviceID):Promise<any>{
  console.log(serviceID)
  let apiURL = `${uni.rootURL}vtpass/tv/get-variation-code?serviceID=${serviceID}`;  
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json');
  // let options = new RequestOptions({ headers: headers });   
return this.http.get(apiURL,{headers}).toPromise();
}
verifyElectricMeter(model): Promise<any>{
  let apiURL = `${this.rootURL}vtpass/electricity/verify`;  
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
return this.http.post(apiURL,model,{headers}).toPromise();
}
verifySmartcard(model): Promise<any>{
  let apiURL = `${this.rootURL}vtpass/tv/verify-smartcard`;  
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
return this.http.post(apiURL,model,{headers}).toPromise();
}
payBill(model): Promise<any>{
  let apiURL = `${this.rootURL}vtpass/utility/pay`;  
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
return this.http.post(apiURL,model,{headers}).toPromise();
}

getVariationsTest(serviceID):Promise<any>{
  console.log(serviceID)
  let apiURL = `${uni.rootURL}vtpass/tv/get-variation-code_test?serviceID=${serviceID}`;  
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json');
  // let options = new RequestOptions({ headers: headers });   
return this.http.get(apiURL,{headers}).toPromise();
}
verifyElectricMeterTest(model): Promise<any>{
  let apiURL = `${this.rootURL}vtpass/electricity/verify_test`;  
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
return this.http.post(apiURL,model,{headers}).toPromise();
}
verifySmartcardTest(model): Promise<any>{
  let apiURL = `${this.rootURL}vtpass/tv/verify-smartcard_test`;  
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
return this.http.post(apiURL,model,{headers}).toPromise();
}
payBillTest(model): Promise<any>{
  let apiURL = `${this.rootURL}vtpass/utility/pay_test`;  
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
return this.http.post(apiURL,model,{headers}).toPromise();
}
}