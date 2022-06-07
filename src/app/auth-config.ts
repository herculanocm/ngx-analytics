/**
 * This file contains authentication parameters. Contents of this file
 * is roughly the same across other MSAL.js libraries. These parameters
 * are used to initialize Angular and MSAL Angular configurations in
 * in app.module.ts file.
 */

 import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

 const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
 /**
  * Configuration object to be passed to MSAL instance on creation. 
  * For a full list of MSAL.js configuration parameters, visit:
  * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
  */
 export const msalConfig: Configuration = {
   auth: {
     clientId: '1e95fcd9-f250-47dc-8082-d2d4c3f8d7cc', // This is the ONLY mandatory field that you need to supply.
     authority: 'https://login.microsoftonline.com/048376f4-1e10-48da-bc1c-3951e968bcee', // Defaults to "https://login.microsoftonline.com/common"
     redirectUri: '/', // Points to window.location.origin. You must register this URI on Azure portal/App Registration.
   },
   cache: {
     cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
     storeAuthStateInCookie: isIE, // Set this to "true" if you are having issues on IE11 or Edge
   },
   system: {
     loggerOptions: {
       loggerCallback(logLevel: LogLevel, message: string) {
         console.log(message);
       },
       logLevel: LogLevel.Error,
       piiLoggingEnabled: false
     }
   }
 }
 
 /**
  * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
  * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
  */
 export const protectedResources = {
   todoListApi: {
     endpoint: "http://localhost:3000",
     scopes: ["api://257d5710-7310-4608-b8b6-985be316589a/Utilizacao"],
   }
 }
 
 /**
  * Scopes you add here will be prompted for user consent during sign-in.
  * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
  * For more information about OIDC scopes, visit: 
  * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
  */
 export const loginRequest = {
   scopes: []
 };