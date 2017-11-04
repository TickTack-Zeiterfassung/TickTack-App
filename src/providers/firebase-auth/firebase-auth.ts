import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {IAuthProvider} from "../i-auth/i-auth";
import {AngularFireAuth} from "angularfire2/auth";

/**
 * FirebaseAuthProvider
 * @author Matthias
 *
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

    public async logout(): Promise<boolean> {
        return null;
    }

    public async register(email: string, username: string, password: string): Promise<boolean> {

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

    public isLoggedIn(): boolean {
        return this.authState;
    }
}
