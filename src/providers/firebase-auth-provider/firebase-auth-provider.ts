import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {IAuthProvider} from "../i-auth-provider/i-auth-provider";
import {AngularFireAuth} from "angularfire2/auth";

/**
 * @author Matthias
 *
 * FirebaseAuthProvider
 * Dieser Provider behandelt die gesamte Authorisierung des Nutzers fuer eine Firebase-Datenbank.
 */
@Injectable()
export class FirebaseAuthProvider implements IAuthProvider {

    private authState: any = null;

    constructor(private aFAuth: AngularFireAuth) {
        this.aFAuth.authState.subscribe((auth) => {
            this.authState = auth;
        });
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
     * Logout eines Nutzers
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
     * @returns {boolean}
     */
    public isLoggedIn(): boolean {
        return this.authState;
    }
}
