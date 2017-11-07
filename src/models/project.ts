/**
 * @author Matthias
 * Modell eines Projekt-Objektes
 */
export class Project {
    public id;
    public desc;

    public constructor(id: string, desc: string) {
        this.id = id;
        this.desc = desc;
    }
}