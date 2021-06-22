import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
// import { Facebook } from '@ionic-native/facebook/ngx';
import { Network } from '@ionic-native/network/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchModalPageModule } from '../app/search-modal/search-modal.module';
import { RequestQoutePageModule } from '../app/request-qoute/request-qoute.module';
import { DummyService } from './providers/dummy.service';
import { NetworkService } from './providers/network.service';
import { EventsServiceService } from './providers/events-service.service';
import { SplashComponentsModule } from './splash-components/splash-components.module';
import { FilterModalPageModule } from '../app/filter-modal/filter-modal.module';
import { CardModalPageModule } from '../app/card-modal/card-modal.module';
import { RequestInterceptorService } from './core/request-interceptor.service';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SplashComponentsModule,
    ReactiveFormsModule,
    SearchModalPageModule,
    FilterModalPageModule,
    CardModalPageModule,
    RequestQoutePageModule,
    SuperTabsModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },
    RequestInterceptorService,
    DummyService,
    NetworkService,
    EventsServiceService,
    GooglePlus,
    // Facebook,
    Network,
    NativeStorage,
    AndroidPermissions,
    // SocialSharing,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
