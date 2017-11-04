/**
 * @author Matthias
 * Project
 * Modell eines Projekt-Objektes
 */
export class Project {
    private _id;
    private _desc;

    public constructor() {
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value;
    }
}