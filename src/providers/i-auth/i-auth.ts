import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/**
 * @author Matthias
 *
 * IAuthProvider
 * Interface für die standardisierte Authentifizierung zwischen der App und dem Backend-Server.
 */
@Injectable()
export class IAuthProvider {

    /**
     * Login eines Nutzers mit E-Mail und Passwort.
     * @param {string} email
     * @param {string} password
     * @returns {Promise<boolean>}
     */
    public async login(email: string, password: string): Promise<boolean> {
        return null
    }

    /**
     * Logout eines Nutzers
     * @returns {Promise<boolean>}
     */
    public async logout(): Promise<boolean> {
        return null
    }

    /**
     * Registrierung eines neuen Nutzers mit E-Mail und Passwort.
     * @param {string} email
     * @param {string} password
     * @returns {Promise<boolean>}
     */
    public async register(email: string, password: string): Promise<boolean> {
        return null
    }

    /**
     * Gibt zurueck ob aktuell ein Nutzer angemeldet ist.
     * @returns {boolean}
     */
    public isLoggedIn(): boolean {
        return null
    }

}
