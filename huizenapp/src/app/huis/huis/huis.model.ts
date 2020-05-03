import { LocatieJson, Locatie } from '../locatie/locatie.model';
import { DetailJson, Detail } from '../detail/detail.model';
import { ImmoBureauJson, ImmoBureau } from '../immo-bureau/immo-bureau.model';


export interface HuisJson{
    id: number;
    locatie: LocatieJson;
    korteBeschrijving: string;
    price: number;
    detail: DetailJson;
    type: string;
    soort: string;
    immoBureau: ImmoBureauJson;
}

export class Huis{
    private _id: number;
    constructor(
        private _locatie: Locatie,
        private _korteBeschrijving: string,
        private _price: number,
        private _detail: Detail,
        private _type: string,
        private _soort: string,
        private _immoBureau: ImmoBureau
    ){}

    static fromJSON(json: HuisJson): Huis{
        const huis = new Huis(
            Locatie.fromJSON(json.locatie), 
            json.korteBeschrijving, 
            json.price, 
            Detail.fromJSON(json.detail), 
            json.type, json.soort, 
            ImmoBureau.fromJSON(json.immoBureau));
            huis._id = json.id;
        return huis;
    }

    toJSON(): HuisJson{
        return <HuisJson>{
            locatie: this.locatie.toJSON(),
            korteBeschrijving: this.korteBeschrijving,
            price: this.price,
            detail: this.detail.toJSON(),
            type: this.type,
            soort:this.soort,
            immoBureau: this.immoBureau.toJSON()
        };
    }

    get id(): number{
        return this._id;
    }

    get locatie(): Locatie{
        return this._locatie;
    }
    
    get korteBeschrijving() : string {
        return this._korteBeschrijving;
    }
    
    get price() : number {
        return this._price;
    }
    
    get detail() : Detail {
        return this._detail;
    }
    
    get type() : string {
        return this._type;
    }
    
    get soort() : string {
        return this._soort;
    }
    
    get immoBureau(): ImmoBureau{
        return this._immoBureau;
    }
}