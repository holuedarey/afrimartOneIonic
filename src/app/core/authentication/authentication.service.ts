import { Injectable, EventEmitter } from "@angular/core";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import {
  User,
  LoginModel,
  AccountSetupResponseModel,
  UserDataModel,
  SocialLoginDataModel,
  SocialLoginModel,
} from "src/app/shared/models/user.model";
import { map } from "rxjs/operators";
import {
  storageNamesEnum,
  getStorageName,
} from "src/app/shared/models/storage.model";
import { UtilityService } from "../utility.service";
import { Constants } from "../common/constant";
import { StorageService } from "../storage.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  public currentUserSubject: BehaviorSubject<UserDataModel>;
  public currentUser: Observable<UserDataModel>;

  public loginUserSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.loginUserSubject.asObservable();

  private apiUrl: string = `${environment.apiUrl}auth/`;
  loggedIn: EventEmitter<any> = new EventEmitter();


  jwtHelper = new JwtHelperService();
  constructor(
    private nativeStorage: NativeStorage,
    private http: HttpClient,
    private utilityService: UtilityService,
    private storageService: StorageService,
  ) {
    this.currentUserSubject = new BehaviorSubject<UserDataModel>(
      // this.nativeStorage.getItem('currentUser');
      JSON.parse(
        localStorage.getItem(getStorageName(storageNamesEnum.currentUser))
      )
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  
  headerSt() {
    return new HttpHeaders({
      channel: "mobile",
      "Content-Type": "application/json"
    });
  }

  isAuthenticated(): boolean {
    if (!this.jwtHelper.isTokenExpired(this.storageService.get(Constants.STORAGE_VARIABLES.TOKEN))) {
        return true;
    }
    //clear th regiser message
    this.storageService.clear(Constants.STORAGE_VARIABLES.TOKEN);
    this.storageService.clear(Constants.STORAGE_VARIABLES.USER);
    return false;
  }
  
  public currentUserValue(): UserDataModel {
    // return this.currentUserSubject.value;
    try {
      return JSON.parse(
        localStorage.getItem(getStorageName(storageNamesEnum.currentUser))
      );
    } catch (error) {
      return null;
    }
  }

  login(body: LoginModel) {
    return this.http
      .post<AccountSetupResponseModel>(`${this.apiUrl}sign-in`, body, {
        headers: this.headerSt()
      })
      .pipe(
        map((user) => {
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          // user.authdata = window.btoa(body.email + ':' + body.password);
          // if (!user.error) {
          //   this.resolveLogin(user.data);
          // }
          return user;
        })
      );
  }

  logout() {
    return new Promise((resolve) => {
    // remove local storage to log user out
    var storageNames = Object.keys(storageNamesEnum).filter(
      (key) => !isNaN(Number(storageNamesEnum[key]))
    );
    storageNames.forEach((storName) => {
      localStorage.removeItem(storName);
    });
    this.currentUserSubject.next(null);
    this.loginUserSubject.next(false);
    resolve(true);
  })
}

  logoutUser() {
    // remove local storage to log user out
    var storageNames = Object.keys(storageNamesEnum).filter(
      (key) => !isNaN(Number(storageNamesEnum[key]))
    );
    storageNames.forEach((storName) => {
      localStorage.removeItem(storName);
    });
  }

  socialLogin(data: SocialLoginModel) {
    return this.http
      .post<AccountSetupResponseModel>(`${this.apiUrl}social-login`, data, {
        headers: this.headerSt()
      })
      .pipe(
        map((user) => {
          if (!user.error) {
            this.resolveLogin(user.data);
          }
          return user;
        })
      );
  }

  resolveLogin(user: UserDataModel) {
    // async () => {
    // localStorage.setItem(
    //   getStorageName(storageNamesEnum.currentUser),
    //   JSON.stringify(user)
    // );
    this.currentUserSubject.next(user);
    this.loginUserSubject.next(true);
    this.loggedIn.emit();
    // const wishLists = this.orderService.getLocalWishListItems();
    // wishLists.forEach(id => {
    //   return new Promise((rs, rj) => {
    //     this.orderService.addToWishlist({ quantity: 1, productId: id }).subscribe(dt => { rs(dt) }, err => { console.error(err); rj(err) });
    //   });
    // });
    // }
  }
}
