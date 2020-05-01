export interface LocatieJson{
    gemeente: string;
    huisnummer: string;    
    postcode: number;
    straatnaam: string;
}

export class Locatie{  
    constructor(
        private _gemeente: string,
        private _straatnaam: string,
        private _huisnummer: string,        
        private _postcode: number               
    ){}

    toJSON(): LocatieJson{
        return {
            gemeente: this.gemeente, 
            straatnaam: this.straatnaam,
            huisnummer: this.huisnummer,             
            postcode: this.postcode            
        };

    }

    static fromJSON(json: LocatieJson): Locatie{
        const locatie = new Locatie(
            json.gemeente, 
            json.straatnaam,
            json.huisnummer,             
            json.postcode);
        return locatie;
    }
    
    // public get locatieId() : number {
    //     return this._locatieId;
    // }
    
    
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