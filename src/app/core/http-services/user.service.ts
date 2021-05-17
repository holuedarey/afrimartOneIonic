import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {
  User,
  RegisterModel,
  ChangePasswordModel,
  AccountSetupResponseModel,
  AccountSettingResponseModel,
  SendEmailVerificationCodeModel,
  EmailVerificationModel,
  SendResetPasswordLinkModel,
  ResetPasswordModel,
  ProfileModel,
  AddressModel,
  StateLgaModel,
} from "src/app/shared/models/user.model";
import { map } from "rxjs/operators";
import {
  storageNamesEnum,
  getStorageName,
} from "src/app/shared/models/storage.model";
import { AuthenticationService } from "../authentication/authentication.service";
import { BecomeSellerModel } from "src/app/shared/models/seller.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  apiUrl: string = `${environment.apiUrl}accounts/`;

  headerSetter(token) {
    return new HttpHeaders({
      channel: "mobile",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
  }
  headerSt() {
    return new HttpHeaders({
      channel: "mobile",
      "Content-Type": "application/json",
    });
  }

  constructor(
    private http: HttpClient,
    private nativeStorage: NativeStorage,
    private authService: AuthenticationService
  ) {}

  getSlides() {
    return this.http.get(`${this.apiUrl}resources/slide`);
  }

  register(body: RegisterModel) {
    return this.http.post<AccountSetupResponseModel>(
      `${this.apiUrl}register`,
      body,
      {
        headers: this.headerSt(),
      }
    );
  }

  changePassword(token,body: ChangePasswordModel) {
    return this.http.post<AccountSettingResponseModel>(
      `${this.apiUrl}change-password`,
      body, {
      headers: this.headerSetter(token),
    }
    );
  }

  sendEmailVerificationCode(body: SendEmailVerificationCodeModel) {
    return this.http.post<AccountSettingResponseModel>(
      `${this.apiUrl}send-email-verification-token`,
      body,
      {
        headers: this.headerSt(),
      }
    );
  }

  verifyEmailCode(body: EmailVerificationModel) {
    return this.http.post<AccountSetupResponseModel>(
      `${this.apiUrl}email-verification`,
      body,
      {
        headers: this.headerSt(),
      }
    );
  }

  requestForPasswordResetLink(body: SendResetPasswordLinkModel) {
    return this.http.post<AccountSettingResponseModel>(
      `${this.apiUrl}send-reset-password`,
      body,
      {
        headers: this.headerSt(),
      }
    );
  }

  resetPassword(body: ResetPasswordModel) {
    return this.http.post<AccountSettingResponseModel>(
      `${this.apiUrl}reset-password`,
      body,
      {
        headers: this.headerSt(),
      }
    );
  }

  updateProfile(token,body: ProfileModel) {
    return this.http
      .put<AccountSettingResponseModel>(`${this.apiUrl}profile`, body, {
        headers: this.headerSetter(token),
      })
      .pipe(
        map((res) => {
          if (!res.error) {
            const user = this.authService.currentUserValue();
            user.user = res.data;
            localStorage.setItem(
              getStorageName(storageNamesEnum.currentUser),
              JSON.stringify(user)
            );
            this.authService.currentUserSubject.next(user);
          }
          return res;
        })
      );
  }

  getProfile(token:any) {
    return this.http.get<AccountSettingResponseModel>(`${this.apiUrl}profile`,
      {
        headers: this.headerSetter(token),
      });
  }

  getUser = () => {
    return this.nativeStorage.getItem('currentUser').then(
      (dt) => {
        if (dt) {
          return dt;
        } else {
          return null;
        }
      },
      (err) => {
        return null;
      }
    );
  };

  getUsername = () => {
    return this.nativeStorage.getItem('currentUser').then(
      (dt) => {
        if (dt) {
          return dt.user.fName + " " + dt.user.sName;
        } else {
          return null;
        }
      },
      (err) => {
        return null;
      }
    );
  };

  getAddresses(token: any) {
    return this.http.get<AccountSettingResponseModel>(
      `${this.apiUrl}addresses`,
      {
        headers: this.headerSetter(token),
      }
    );
  }

  getAddress(id: string) {
    return this.http.get<AccountSettingResponseModel>(
      `${this.apiUrl}addresses/${id}`
    );
  }

  deleteAddress(token:string, id: string) {
    return this.http.delete<AccountSettingResponseModel>(
      `${this.apiUrl}addresses/${id}`,
      {
        headers: this.headerSetter(token),
      }
    );
  }

  updateAddress(token:string,id: string, body: AddressModel) {
    return this.http.put<AccountSettingResponseModel>(
      `${this.apiUrl}addresses/${id}`,
      body,
      {
        headers: this.headerSetter(token),
      }
    );
  }

  addAddress(token:string, body: AddressModel) {
    return this.http.post<AccountSettingResponseModel>(
      `${this.apiUrl}addresses`,
      body,
      {
        headers: this.headerSetter(token),
      }
    );
  }

  becomeSeller(token:string,body: BecomeSellerModel) {
    return this.http.post<AccountSettingResponseModel>(
      `${environment.apiUrl}/merchants/become-merchant`,
      body,
      {
        headers: this.headerSetter(token),
      }
    );
  }

  getStatesLgas() {
    return this.http.get<StateLgaModel[]>(`../../../assets/states.json`);
  }
}
