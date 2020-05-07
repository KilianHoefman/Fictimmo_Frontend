export interface LocatieJson{
    gemeente: string;
    huisnummer: string;    
    postcode: number;
    straatnaam: string;
    latitude: number;
    longitude: number;
}

export class Locatie{  

    constructor(
        private _gemeente: string,
        private _straatnaam: string,
        private _huisnummer: string,        
        private _postcode: number,
        private _latitude: number,
        private _longitude: number   
    ){}

    toJSON(): LocatieJson{
        return {
            gemeente: this.gemeente, 
            straatnaam: this.straatnaam,
            huisnummer: this.huisnummer,             
            postcode: this.postcode,
            latitude: this._latitude,
            longitude: this._longitude
        };
    }

    static fromJSON(json: LocatieJson): Locatie{
        const locatie = new Locatie(
            json.gemeente, 
            json.straatnaam,
            json.huisnummer,             
            json.postcode,
            json.latitude,
            json.longitude
            );
        return locatie;
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

    get latitude(): number{
        return this._latitude;
    }

    get longitude(): number{
        return this._longitude;
    }

}