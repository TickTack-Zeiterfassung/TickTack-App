import 'rxjs/add/operator/map';

/**
 * @author Matthias
 * IDataProvider
 * Interface für die standartisierte Kommunikation zwischen der App und dem Backend-Server.
 */
export class IDataProvider {

    /**
     * Liefert Daten vom Backend.
     * @params itemName Name des Objektes
     * @params id ID fuer die Selektion eines bestimmten Objektes
     * @returns {any}
     */
    public get(itemName: string, id: string): any { return null; }

    /**
     * Erstellt Daten im Backend.
     * @params itemName Name des Objektes
     * @params item Objekt das abgespeichert werden soll
     * @returns {boolean}
     */
    public insert(itemName: string, item: any): boolean { return null; }

    /**
     * Aktualisiert Daten im Backend.
     * @param itemName Name des Objektes
     * @param item Objekt mit neuen Daten
     * @param id ID des zu aendernden Objektes
     * @returns {boolean}
     */
    public update(itemName: string, item: any, id: string): boolean { return null; }

    /**
     * Löscht Daten aus dem Backend.
     * @param itemName Name des Objektes
     * @param id ID des zu loeschenden Objektes
     * @returns {boolean}
     */
    public delete(itemName: string, id: string): boolean { return null }

}
