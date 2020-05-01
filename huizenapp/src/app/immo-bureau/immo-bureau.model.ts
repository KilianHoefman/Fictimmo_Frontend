import { Huis } from '../huis/huis/huis.model';

export interface ImmoBureauJson{
    naam: string;
}

export class ImmoBureau{
    constructor(
        private _naam: string,        
    ){}

    toJSON(): ImmoBureauJson{
        return  { naam: this.naam };
    }

    static fromJSON(json: ImmoBureauJson): ImmoBureau{
        const immoBureau = new ImmoBureau(json.naam);
        return immoBureau;
    }

    get naam() : string {
        return this._naam;
    }    
}