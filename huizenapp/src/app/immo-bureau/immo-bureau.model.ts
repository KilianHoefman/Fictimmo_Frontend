export interface ImmoBureauJson{
    naam: string
}

export class ImmoBureau{
    constructor(
        private _naam: string
    ){}

    static fromJSON(json: ImmoBureauJson): ImmoBureau{
        const immoBureau = new ImmoBureau(json.naam);
        return immoBureau;
    }

    toJSON(): ImmoBureauJson{
        return {
            naam: this._naam
        };
    }

    get naam() : string {
        return this._naam;
    }
    
}