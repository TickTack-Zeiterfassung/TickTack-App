import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";
import { IDataProvider } from "../i-data/i-data";
import { FirebaseAuthProvider } from "../firebase-auth/firebase-auth";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

/**
 * @author Matthias
 * Implementierung der IDataProvider-Schnittstelle fuer die Firebase-Datenbank.
 * Mit diesem Provider ist es moeglichen Daten aus dem Backend zu
 * - laden,
 * - speichern,
 * - erstellen
 * - und loeschen.
 */
@Injectable()
export class FirebaseDataProvider implements IDataProvider {

    private userData: object;
    private dataSubject: BehaviorSubject<any>;

    constructor(private auth: FirebaseAuthProvider,
                private db: AngularFireDatabase) {

        this.initUserData();
        this.initDataSubject();
        this.waitForLogin();
    }

    private initUserData(): void {
        this.userData = {
            user: {
                email: '',
                name: ''
            },
            projects: [],
            times: []
        };
    }

    private initDataSubject(): void {
        this.dataSubject = new BehaviorSubject(this.userData);
    }

    /**
     * Lauscht auf das Observable der Firebase-Authentifizierung und wartet auf ein
     * erfolgreiches Anmelden in der Datenbank, um anschließend die Benutzerdaten aus der
     * Datenbank zu laden.
     */
    private waitForLogin(): void {

        this.auth.isLoggedInAsObservable().subscribe(result => {
            if (result) {
                console.log('load user data');
                this.loadUserData();
            }
        })

    }

    /**
     * Lädt die Benutzerdaten aus der Datenbank und sendet Veränderungen automatisch
     * an alle Subscriber der Daten.
     */
    private loadUserData(): void {

        this.db.object(this.getUidPath()).valueChanges()
            .subscribe(data => {

                if (data === null) {
                    console.log('Create empty user object.');
                    this.createUserDataObject();
                } else {
                    // Speicher die neuen Benutzerdaten aus der Datenbank
                    this.userData = data;

                    // Sende die neuen Daten an alle Subscriber
                    this.dataSubject.next(data);
                }
            });
    }

    /**
     * Erstellt ein leeres Benutzerdaten-Objekt und speichert es in der Datenbank.
     */
    private createUserDataObject(): void {
        this.saveUserData().catch(
            e => console.error('Failed to save Userdata.')
        );
    }

    private saveUserData(): Promise<void> {
        return this.db.object(this.getUidPath()).update(this.userData);
    }

    /**
     * Liefert ein Observable mit angefordeten Daten aus der Datenbank.
     * @param {string} itemName "Tabellenbezeichnung"
     * @param {string} id Für ein bestimmtes Objekt, kann eine ID mit übergeben werden.
     * @returns {Observable<any>}
     */
    public get(itemName: string, id: string = null): Observable<any> {

        if (!this.userData && !this.userData.hasOwnProperty(itemName)) {
            console.warn('Tried to access ' + itemName + ' of userdata, but nothing like that exisits.');
            return null;
        }

        return this.dataSubject.map(value => this.keyMapping(value, itemName, id));
    }

    /**
     * Für den Fall eines bestimmten Datensatzes, kann diese Methode mithilfe der übergebenden
     * ID ein Objekt rausfiltern.
     * @param userData Vollständiges Datenobjekt
     * @param {string} itemName "Tabellenbezeichnung"
     * @param {string} id ID für die Filterung eines bestimmten Objektes
     * @returns {any}
     */
    private keyMapping(userData: any, itemName: string, id: string): any {

        if (!this.userData && !this.userData[itemName]) {
            console.error('Tried to access' + itemName + ' of userdata, but nothing like that exisits.');
            return null;
        }

        if (id != null) {

            if (!userData[itemName].hasOwnProperty(id)) {
                console.error('Tried to access key ' + id + ' of userdata/'+ itemName +', but nothing like that exisits.');
                return null;
            }

            return userData[itemName][id];

        } else {
            return userData[itemName];
        }
    }

    public insert(itemName: string, item: any): Promise<boolean> {

        return new Promise((resolve) => {

            if(!this.userData.hasOwnProperty(itemName)) {
                this.userData[itemName] = [];
            }

            this.userData[itemName].push(item);
            this.saveUserData()
                .then(r => resolve(true))
                .catch(r => resolve(false));
        });
    }

    public update(itemName: string, item: any, id: string): Promise<boolean> {
        return null;
    }

    public delete(itemName: string, id: string): Promise<boolean> {
        return new Promise((resolve => {
            if(!this.userData.hasOwnProperty(itemName)) {
                console.warn('Tried to access ' + itemName + ' of userdata, but its not available.');
                resolve(false);
            }

            if(!this.userData[itemName].hasOwnProperty(id)) {
                resolve(true);
            }

            this.userData[itemName][id] = null;
            this.saveUserData()
                .then(r => resolve(true))
                .catch(r => resolve(false));
        }));
    }


    private getUidPath() {
        return '/' + this.auth.getUserId() + '/';
    }
}
