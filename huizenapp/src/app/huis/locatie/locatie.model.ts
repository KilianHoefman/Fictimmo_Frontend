export interface LocatieJson{
    gemeente: string;
    huisnummer: string;
    locatieId: number;
    postcode: number;
    straatnaam: string;
}

export class Locatie{
    constructor(
        private _gemeente: string,
        private _huisnummer: string,
        private _locatieId: number,
        private _postcode: number,
        private _straatnaam: string       
    ){}

    static fromJSON(json: LocatieJson): Locatie{
        const locatie = new Locatie(
            json.gemeente, 
            json.huisnummer, 
            json.locatieId,
            json.postcode,
            json.straatnaam);
        return locatie;
    }

    toJSON(): LocatieJson{
        return {
            gemeente: this.gemeente, 
            huisnummer: this.huisnummer, 
            locatieId: this.locatieId,
            postcode: this.postcode,
            straatnaam: this.straatnaam
        };
    }

    
    public get locatieId() : number {
        return this._locatieId;
    }
    
    
    get gemeente() : string {
        return this._gemeente;
    }

    
    get straatnaam() : string {
        return this._straatnaam;
    }

    
    get huisnummer() : string {
        return this._huisnummer;
    }

    
    get postcode() : number {
        return this._postcode;
    }
    
}