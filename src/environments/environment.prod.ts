// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: "http://40.121.131.104:4000/api/v1/",
  apiUrl: "http://54.93.155.199:8080/api/v1/",
  baseUrl: "https://easymall.ng/",
  socialLoginConfig: {
    facebook: {
      appId: "2504590776291199",
      appSecret: "c6fa779c60d1f042b2c9264f3cf412fc"
    },
    google: {
      oauthClientId:
        "797349031519-3kes2kr3nh4cpltv1abpas0c218d5gbf.apps.googleusercontent.com",
      clientSecret: "IdQ_gRu6PISxpInaKCl-_0wt"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
