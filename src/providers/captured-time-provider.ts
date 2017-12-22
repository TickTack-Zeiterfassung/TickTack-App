import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CapturedTime } from "../models/captured-time.interface";
import { Observable } from "rxjs/Observable";
import { IDataProvider } from './i-data-provider';

/**
 * @Author Matthias
 *
 * CapturedTimeProvider
 * Mithilfe dieser Klasse koennen Instanzen vom Typ CapturedTime aus dem Backend:
 *  - erzeugt/geladen
 *  - gespeichert
 *  - oder geloescht werden.
 */
@Injectable()
export class CapturedTimeProvider {

    constructor(private dataProvider: IDataProvider) {
    }

    /**
     * Liefert alle gespeicherten Zeiten als Observable.
     * @returns {Observable<CapturedTime[]>}
     */
    getAll(): Observable<CapturedTime[]> {
        return this.dataProvider.get('times', null).map(values => {
            return values as Array<CapturedTime>
        });
    }

    /**
     * Erstellt eine neue Zeiterfassung.
     * @param {CapturedTime} capturedTime
     * @returns {Promise<boolean>}
     */
    insert(capturedTime: CapturedTime): Promise<boolean> {
        return this.dataProvider.insert('times', capturedTime);
    }

    /**
     * Updatet eine erfasste Zeit.
     * @param {CapturedTime} capturedTime
     * @returns {Promise<boolean>}
     */
    update(capturedTime: CapturedTime): Promise<boolean> {
        return this.dataProvider.update('times', capturedTime, capturedTime.id);
    }

}
