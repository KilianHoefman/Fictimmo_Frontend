import { Huis } from '../huis/huis/huis.model';

export interface ImmoBureauJson{
    naam: string;
    huizen: Huis[];
}

export class ImmoBureau{
    constructor(
        private _naam: string,
        private _huizen: Huis[]
    ){}

    static fromJSON(json: ImmoBureauJson): ImmoBureau{
        const immoBureau = new ImmoBureau(
            json.naam,
            json.huizen);
        return immoBureau;
    }

    toJSON(): ImmoBureauJson{
        return {
            naam: this.naam,
            huizen: this.huizen
        };
    }

    get naam() : string {
        return this._naam;
    }

    
    get huizen() : Huis[] {
        return this._huizen;
    }
    
    addHuis(huis: Huis){
        this._huizen.push(huis);
    }
    
}