import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/**
 * @author Matthias
 * @interface IAuthProvider
 * Interface für die standartisierte Authentifizierung zwischen der App und dem Backend-Server.
 */
@Injectable()
export class IAuthProvider {

    public async login(email: string, password: string): Promise<boolean> { return null }

    public async logout(): Promise<boolean> { return null }

    public async register(email: string, username: string, password: string): Promise<boolean> { return null }

    public isLoggedIn(): boolean { return null }

}
