export class UserDataModel {
	token: string;
	exp: 172800;
	user: User;
}

export class User {
	fName: string;
	sName: string;
	email: string;
	mobile: string;
	userReferralCode: string;
	roles: [
		{
			_id: string;
			name: string;
			displayName: string;
			__v: 0;
		}
	];
	claims: [
		{
			_id: string;
			name: string;
			value: string;
			__v: 0;
		}
	];
}

export class SliderModel {
	position: string;
	body?: Array<any>;
	_id: string;
	type: string;
	imgLink: string;
	value: string;
	imgUrl: string;
}

export class RegisterModel {
	organisation:string;
	firstname:string;
	lastname:string;
	username:string;
	email:string;
	// phone:string;	
	role:string;
	country:string;
	preferredLanguage:string;
	password:string;
}

export class ProfileModel {
	fName: string;
	sName: string;
	phone: string;
	email: string;
	dob?: Date;
	gender?: string;
}

export interface AccountSetupResponseModel {
	error: boolean;
	message: string;
	data: UserDataModel;
	status:boolean;
}

export class SocialLoginDataModel {
	email: string;
	first_name: string;
	last_name: string;
	gender: string;
	phone_number: any;
	full_name: string;
	picture_url: string;
	providerId: string;
	access_token: string;
	locale: string;
}

export class ChangePasswordModel {
	oldPassword: string;
	newPassword: string;
	confirmPassword: string;
}

export class AddressModel {
	isDefault: boolean = false;
	_id: string;
	country: string = 'Nigeria';
	city: string;
	state: string;
	zip: string;
	no: string;
	street: string;
	landmark: string;
	name: string;
	phone: string;
}

export interface StateLgaModel {
	state: {
		name: string;
		id: number;
		locals: {
			name: string;
			id: number;
		}[];
	};
}

export interface AccountSettingResponseModel {
	error: boolean;
	message: string;
	data: any;
	status:boolean;
}

export class SendEmailVerificationCodeModel {
	email: string;
	organisation: string;
}

export class EmailVerificationModel {
	token: string;
}

export class SendResetPasswordLinkModel {
	email: string;
	callback: string;
}

export class ResetPasswordModel {
	token: string;
	newPassword: string;
	confirmPassword: string;
}

export class LoginModel {
	user: string;
	password: string;
	organisation:string;
}

export class ActivateAccModel {
	token: string;
}

export interface SocialLoginModel {
	email: string;
	provider: string;
	id: string;
	authToken: string;
	fName: string;
	sName: string;
}
