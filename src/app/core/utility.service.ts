import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserDataModel, SliderModel } from '../shared/models/user.model';
// import {
//   getStorageName,
//   storageNamesEnum
// // } from "../shared/models/storage.model";
// import { AuthenticationService } from "./authentication/authentication.service";
// import { OrderService } from "./http-services/order.service";
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  apiUrl: string = environment.apiUrl;
  baseUrl: string = environment.baseUrl;
  constructor(
    private router: Router,
    private http: HttpClient,
    handler: HttpBackend
  ) {
    this.http = new HttpClient(handler);
  }

  getStringAfterCharacter(str: string, char: string) {
    return str.split(char)[1];
  }
  headerSt() {
    return new HttpHeaders({
      channel: 'mobile',
      'Content-Type': 'application/json',
    });
  }

  getDynamicProds(type) {
    var url = `${this.apiUrl}resources/${type}`;
    return this.http.get<SliderModel>(url, {
      headers: this.headerSt(),
    });
  }

  getSlides() {
    return this.http.get<SliderModel>(`${this.apiUrl}resources/slide`, {
      headers: this.headerSt(),
    });
  }
  getHomeAds() {
    return this.http.get<SliderModel>(`${this.apiUrl}resources/home-ads`, {
      headers: this.headerSt(),
    });
  }

  getNavAds() {
    return this.http.get<SliderModel>(`${this.apiUrl}resources/nav-ads`, {
      headers: this.headerSt(),
    });
  }

  getBrands() {
    return this.http.get<SliderModel>(`${this.apiUrl}resources/banners`, {
      headers: this.headerSt(),
    });
  }

  getLevel1Adds() {
    return this.http.get<SliderModel>(`${this.apiUrl}resources/level1-ads`, {
      headers: this.headerSt(),
    });
  }
  getLevel2Adds() {
    return this.http.get<SliderModel>(`${this.apiUrl}resources/level2-ads`, {
      headers: this.headerSt(),
    });
  }

  getHeaderAds() {
    return this.http.get<SliderModel>(`${this.apiUrl}resources/header-ads`, {
      headers: this.headerSt(),
    });
  }

  getBaseUrl() {
    return this.baseUrl;
  }
}
