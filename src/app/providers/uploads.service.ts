import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import * as uni from '../globals/universal';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
 
@Injectable({
  providedIn: 'root'
})
export class UploadsService {
  sk=uni.k;
  rootURL = uni.rootURL;
  scheme=uni.scheme;


  constructor(private http:HttpClient, private transfer: FileTransfer) { }
  getDocuments(model) {
    let apiURL = `${this.rootURL}documents/getDocuments/`;  
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
  return this.http.post(apiURL,model,{headers}).toPromise();
  }
 
  deleteDocument(model) {
    let apiURL = `${this.rootURL}documents/deleteDocument/`;  
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
  return this.http.post(apiURL,model,{headers}).toPromise();
  }
 
  uploadImageOG(img, desc) {
    // Destination URL
    let url = this.rootURL + 'images';
    // File for Upload
    var targetPath = img;
    var options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      params: { 'desc': desc }
    };
 
    const fileTransfer: FileTransferObject = this.transfer.create();
    // Use the FileTransfer to upload the image
    return fileTransfer.upload(targetPath, url, options);
  }
uploadPassport(model): Promise<any>{
  // console.log(JSON.stringify(model))
  let apiURL = `${this.rootURL}uploads/uploadPassport/`;  
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  return this.http.post(apiURL,model,{headers}).toPromise();
  }
  uploadProfileImage(model): Promise<any>{
    // console.log(JSON.stringify(model))
    let apiURL = `${this.rootURL}uploads/uploadProfileImage/`;  
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    return this.http.post(apiURL,model,{headers}).toPromise();
    }
uploadDocuments(model): Promise<any>{
  // console.log(JSON.stringify(model))
  let apiURL = `${this.rootURL}uploads/uploadPassport/`;  
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  return this.http.post(apiURL,model,{headers}).toPromise();
  }
}
