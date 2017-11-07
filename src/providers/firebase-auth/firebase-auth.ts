import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { IAuthProvider } from "../i-auth/i-auth";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

import 'rxjs/add/operator/toPromise';

/**
 * @author Matthias
 *
 * FirebaseAuthProvider
 * Dieser Provider behandelt die gesamte Authorisierung des Nutzers fuer eine Firebase-Datenbank.
 */
@Injectable()
export class FirebaseAuthProvider implements IAuthProvider {

    private isUserLoggedInObservable: Observable<boolean>;
    private isUserLoggedInObserver: Observer<boolean>;

    constructor(private aFAuth: AngularFireAuth) {

        this.prepareIsUserLoggedInObservable();
    }

    /**
     * Login eines Nutzers mit E-Mail und Passwort.
     * @param {string} email
     * @param {string} password
     * @returns {Promise<boolean>}
     */
    public async login(email: string, password: string): Promise<boolean> {

        return new Promise<boolean>(resolve => {
            try {

                this.aFAuth.auth.signInWithEmailAndPassword(email, password).then(result => {
                    resolve(true);
                }).catch(error => {
                    console.error(error);
                    resolve(false);
                });

            } catch (e) {
                console.error(e);
                resolve(false);
            }
        });
    }

    /**
     * Logout eines Nutzers.
     * @returns {Promise<boolean>}
     */
    public async logout(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            try {
                this.aFAuth.auth.signOut().then(result => {
                    resolve(true);
                }).catch(error => {
                    console.error(error);
                    resolve(false);
                })
            } catch (e) {
                console.error(e);
                resolve(false);
            }
        });
    }

    /**
     * Registrierung eines neuen Nutzers mit E-Mail und Passwort.
     * @param {string} email
     * @param {string} password
     * @returns {Promise<boolean>}
     */
    public async register(email: string, password: string): Promise<boolean> {

        return new Promise<boolean>(resolve => {

            try {

                this.aFAuth.auth.createUserWithEmailAndPassword(email, password).then(result => {
                    resolve(true);
                }).catch(error => {
                    console.error(error);
                    resolve(false);
                });

            } catch (e) {
                console.error(e);
                resolve(false);
            }

        });
    }

    /**
     * Gibt zurueck ob aktuell ein Nutzer angemeldet ist.
     * @returns {Promise<boolean>}
     */
    public isLoggedIn(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            try {

                this.aFAuth.authState.subscribe((auth) => {

                    if (auth && auth.uid) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });

            } catch(e) {
                console.error(e);
                resolve(false);
            }
        });
    }

    /**
     * Gibt die UserID eines Benutzers zurueck.
     * @returns {string}
     */
    public getUserId(): string {

        if (!this.aFAuth.auth) {
            console.warn('Tried to get userInfo id altrough there is no userInfo logged in.');
            return '';
        }

        return this.aFAuth.auth.currentUser.uid;
    }

    /**
     * Diese Methode bereitet das Observable fuer den Firebase-Datenprovider vor.
     * Zunaechst wird das Observable erstellt und anschliessend mit den Firebase-AuthState-Observable
     * verbunden.
     */
    private prepareIsUserLoggedInObservable() {
        // init isUserLoggedInObservable
        this.isUserLoggedInObservable = new Observable(observer => {
            this.isUserLoggedInObserver = observer;
        });

        // init authState observable-subscription
        try {
            this.aFAuth.authState.subscribe((auth) => {

                if (this.isUserLoggedInObserver) {

                    if (auth && auth.uid) {
                        this.isUserLoggedInObserver.next(true);
                    } else {
                        this.isUserLoggedInObserver.next(false);
                    }
                }
            });
        } catch (e) {
            console.log(e);
            this.isUserLoggedInObserver.next(false);
        }
    }

    /**
     * Liefert ein isLoggedIn - Observable. Dieses Observable ist fuer den FirebaseDataProvider gedacht,
     * sodass dieser sobald der Nutzer angemeldet ist seine Daten laden kann.
     * @returns {Observable<boolean>}
     */
    public isLoggedInAsObservable(): Observable<boolean> {
        return this.isUserLoggedInObservable;
    }
}
