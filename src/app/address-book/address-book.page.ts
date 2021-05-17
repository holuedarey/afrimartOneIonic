import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AddressModel, StateLgaModel } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/core/http-services/user.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ProductService } from 'src/app/core/http-services/product.service';
import { UserDataModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.page.html',
  styleUrls: ['./address-book.page.scss'],
})
export class AddressBookPage implements OnInit {
  addressForm: FormGroup;
  address: AddressModel = new AddressModel();
  addressId: string;
  states: StateLgaModel[];
  lgas: any[];
  selState: string = '';
  currentUser: UserDataModel = this.authService.currentUserValue();
  getAdd: any;
  selectCity: string = '';
  add: boolean = false;
  edit: boolean = false;
  addresses: AddressModel[]=[];
  selectedId: string;
  isDefaultAddress = true;
  hasAddress: boolean = false;
  title: string = 'My Addresses';
  cartTotal: number = 0;
  isLoading: boolean = false;

  constructor(
    private toastController: ToastController,
    public loadingCtrl: LoadingController,
    private nativeStorage: NativeStorage,
    private authService: AuthenticationService,
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private _cdr: ChangeDetectorRef
  ) {
    // console.log('Current User: ' + JSON.stringify(this.currentUser));
    this.productService.cartQty.subscribe(
      (value) => (this.cartTotal = Number(value))
    );
    this.addressForm = new FormGroup({
      no: new FormControl(this.address.no, [Validators.required]),
      street: new FormControl(this.address.street, [Validators.required,Validators.minLength(10)]),
      landmark: new FormControl(this.address.landmark),
      city: new FormControl(this.address.city, [Validators.required,Validators.minLength(3)]),
      state: new FormControl(this.address.state, [Validators.required,Validators.minLength(3)]),
      country: new FormControl('Nigeria', [Validators.required]),
      ext: new FormControl('+234', [Validators.required]),
      isDefault: new FormControl(this.address.isDefault),
      name: new FormControl(this.address.name, [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
      ]),
    });
  }
  myBackButton() {
    // console.log("this.location: " + this.location)
    this.location.back();
  }
  ngOnInit() {
    this.nativeStorage.getItem('currentUser').then((x) => {
      this.currentUser = x;
      this.getAddresses();
      this.getStates();
     
      }
      );
   
  }
  async presentToast(
    header: string,
    msg: string,
    duration: number,
    color: string
  ) {
    const toast = await this.toastController.create({
      header: header,
      position: 'bottom',
      message: msg,
      duration: duration,
      // cssClass: 'custom-toast-class',
      color: color,
    });
    toast.present();
  }
  getStates() {
    this.userService.getStatesLgas().subscribe((dt) => {
      this.states = dt;
      this.selState = this.states[0].state.name;
      if (this.states.length > 0) {
        this.getLgas(this.states[0].state.name);
      }
    });
  }
  getLgas(state: string) {
    this.states.forEach((st) => {
      if (st.state.name === state) {
        this.lgas = st.state.locals;
        this.selectCity = this.lgas[0].name;
        this.addressForm.value.state = this.selState;
        this.addressForm.value.city = this.selectCity;
        // console.log('getStates() this.addressForm.value: ' + JSON.stringify(this.addressForm.value))
        return;
      }
    });
    // console.log('LGAs: ' + JSON.stringify(this.lgas))
    // console.log('selectCity: ' + this.selectCity)
  }
  changeState(e: any) {
    console.log('Change State: ' + JSON.stringify(e.target.value))
    console.log('Change Address: ' +JSON.stringify(this.addressForm.value))
    this.getLgas(e.target.value);
  }
  changeCity(e: any) {
    console.log('Change City: ' + JSON.stringify(e.target.value))
    console.log('Change Address: ' +JSON.stringify(this.addressForm.value))
    this.getLgas(e.target.value);
  }
  onCountryChange($event) {
    // console.log('onCountryChange: ' + $event.value)
  }
  changeMobileCountry($event) {
    // console.log('changeMobileCountry: ' + $event.value)
  }
  getAddresses() {
    this.isLoading=true;
    this.userService.getAddresses(this.currentUser.token).subscribe(
      (data) => {
        if (!data.error) {
          this.addresses = data.data;
          // console.log('Addresses: ' + JSON.stringify(this.addresses));
          const def = this.addresses.find((x) => x.isDefault);
          this.selectedId = def ? def._id : null;
          this.isLoading=false;
        }
      },
      (err) => {
        this.isLoading=false;
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: err.message,
          text: err.errors.join(','),
          showConfirmButton: true,
        });
      }
    );
  }
  onSubmit() {
    if (this.addressId) {
      this.updateAddress();
    } else {
      this.addAddress();
    }
  }
  setAddress(address: AddressModel) {
    if (address) {
      this.addressForm.setValue({
        street: address.street,
        city: address.city,
        state: address.state,
        country: address.country,
        isDefault: address.isDefault,
        phone: address.phone.replace(this.addressForm.value.ext,''),
        ext:'+234',
        no: address.no,
        name: address.name,
        landmark: address.landmark,
      });
      this.selState = address.state;
      this.getLgas(this.selState);
      // this.selectCity = address.city;
      // console.log('setAddress: ' + JSON.stringify(address))
      this._cdr.detectChanges();
    }
  }
  editAddress(address) {
    this.title = 'Edit Address';
    console.log('editAddress: ' + JSON.stringify(address));
    this.addressId = address._id;
    this.edit = true;
    this.add = false;
    this.setAddress(address);
  }
  newAddress() {
    this._cdr.detectChanges();
    this.title = 'Add new address';
    this.addressForm.patchValue({
      name: this.currentUser.user.fName + ' ' + this.currentUser.user.sName,
    });
    // this.addressForm.patchValue({ 'phone': this.currentUser.user.phone})  ;
    console.log('newAddress: '+ JSON.stringify(this.addressForm.value));
    this.addressId = null;
    this.edit = false;
    this.add = true;
   
  }
  deleteAddress(address: AddressModel) {
    this.title = 'Delete Address';
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to delete this?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.loadingCtrl
          .create({
            spinner: 'dots',
            message: 'Deleting address! Please wait...',
            duration: 15000,
            cssClass: 'custom-loader-class',
          })
          .then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => {});
          });
        this.userService
          .deleteAddress(this.currentUser.token, address._id)
          .subscribe(
            (data) => {
              this.loadingCtrl.dismiss();
              if (!data.error) {
                this.title = 'My Addresses';
                this.addresses = data.data;
              }
              Swal.fire({
                position: 'center',
                icon: data.error ? 'error' : 'success',
                title: data.error ? 'Oops' : 'Congratulations',
                text: data.error
                  ? 'Could not delete your address at this time. Please try again!'
                  : 'The address was deleted successfully!',
                showConfirmButton: true,
              });
            },
            (err) => {
              this.loadingCtrl.dismiss();
              console.error(err);
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Delete Error',
                text: err.errors.join(','),
                showConfirmButton: true,
              });
            }
          );
      }
    });
  }
  addAddress() {
    // console.log('addAddress() this.addressForm.value: ' + JSON.stringify(this.addressForm.value));
    this.addressForm.patchValue({phone:this.addressForm.value.ext+''+this.addressForm.value.phone});
    // console.log('Edited addAddress() this.addressForm.value: ' + JSON.stringify(this.addressForm.value));

    this.loadingCtrl
      .create({
        spinner: 'dots',
        message: 'Adding address! Please wait...',
        duration: 15000,
        cssClass: 'custom-loader-class',
      })
      .then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {});
      });
    this.userService
      .addAddress(this.currentUser.token, this.addressForm.value)
      .subscribe(
        (data) => {
          console.log('addAddress() Returned data: ' + JSON.stringify(data.data));
          if (!data.error) {
            this.title = 'My Addresses';
            this.addresses = data.data;
            this.add = false;
            this.loadingCtrl.dismiss();
            this.addressForm.reset();
          }
          Swal.fire({
            position: 'center',
            icon: data.error ? 'error' : 'success',
            title: data.error ? 'Oops' : 'Congratulations',
            text: data.error
              ? 'Could not save your address at this time. Please try again!'
              : 'Your address was saved successfully!',
            showConfirmButton: true,
          }).then((res) => {});
        },
        (err) => {
          this.loadingCtrl.dismiss();
          this.addressForm.patchValue({phone:this.addressForm.value.phone.replace(this.addressForm.value.ext,'')})
          console.error(err);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Save Error',
            text: 'Could not save your address at this time. Please try again!',
            showConfirmButton: true,
          });
        }
      );
  }
  updateAddress() {
    // console.log('updateAddress() this.addressForm.value: ' + JSON.stringify(this.addressForm.value))
    this.addressForm.patchValue({phone:this.addressForm.value.ext+''+this.addressForm.value.phone});
    this.loadingCtrl
      .create({
        spinner: 'dots',
        message: 'Updating address! Please wait...',
        duration: 15000,
        cssClass: 'custom-loader-class',
      })
      .then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {});
      });
    this.userService
      .updateAddress(
        this.currentUser.token,
        this.addressId,
        this.addressForm.value
      )
      .subscribe(
        (data) => {
          Swal.fire({
            position: 'center',
            icon: data.error ? 'error' : 'success',
            title: data.error ? 'Oops' : 'Congratulations',
            text: data.error
              ? 'Could not update your address at this time. Please try again!'
              : 'Your address was updated successfully!',
            showConfirmButton: true,
          }).then((res) => {
            if (!data.error) {
              this.title = 'My Addresses';
              this.addressId = null;
              this.addresses = data.data;
              this.edit = false;
              this.addressForm.reset();
              this.loadingCtrl.dismiss();
            }

            // this.router.navigate(["/app/profile"]);
          });
        },
        (err) => {
          this.addressForm.patchValue({phone:this.addressForm.value.phone.replace(this.addressForm.value.ext,'')})
          console.error(err);
          this.loadingCtrl.dismiss();
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Update Error',
            text: 'An error occurred during the update. Please try again!',
            showConfirmButton: true,
          });
        }
      );
  }
  closeDialog() {
    // console.log('Close Dialog')
    this.title = 'My Addresses';
    this.edit = false;
    this.add = false;
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }  
}
