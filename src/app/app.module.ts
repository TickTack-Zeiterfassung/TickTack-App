import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from "angularfire2";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { MyApp } from './app.component';

import { IDataProvider } from '../providers/i-data-provider';
import { FirebaseDataProvider } from '../providers/firebase-data-provider';
import { ProjectProvider } from '../providers/project-provider';
import { UserInfoProvider } from '../providers/user-info-provider';
import { IAuthProvider } from '../providers/i-auth-provider';
import { FirebaseAuthProvider } from '../providers/firebase-auth-provider';
import { CapturedTimeProvider } from '../providers/captured-time-provider';
import { UserInterfaceProvider } from '../services/user-interface-service';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp),

        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        AngularFireAuthModule,
        AngularFireDatabaseModule,

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},

        FirebaseDataProvider,
        {provide: IDataProvider, useClass: FirebaseDataProvider},
        ProjectProvider,
        UserInfoProvider,
        CapturedTimeProvider,

        FirebaseAuthProvider,
        {provide: IAuthProvider, useClass: FirebaseAuthProvider},
        UserInterfaceProvider,
    ]
})
export class AppModule {
}
