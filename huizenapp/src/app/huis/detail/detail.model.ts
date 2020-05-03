export interface DetailJson{
    langeBeschrijving: string;
    bewoonbareOppervlakte: number;
    totaleOppervlakte: number;
    epcWaarde: number;
    kadastraalInkomen: number;
}

export class Detail{
    constructor(
        private _langeBeschrijving: string,
        private _bewoonbareOppervlakte: number,
        private _totaleOppervlakte: number,
        private _epcWaarde: number,
        private _kadastraalInkomen: number
    ){}
    
    toJSON(): DetailJson{
        return  {
            langeBeschrijving: this.langeBeschrijving, 
            bewoonbareOppervlakte: this.bewoonbareOppervlakte, 
            totaleOppervlakte: this.totaleOppervlakte, 
            epcWaarde: this.epcWaarde, 
            kadastraalInkomen: this.kadastraalInkomen};
    }

    static fromJSON(json: DetailJson): Detail{
        const detail = new Detail(
            json.langeBeschrijving, 
            json.bewoonbareOppervlakte, 
            json.totaleOppervlakte, 
            json.epcWaarde, 
            json.kadastraalInkomen);
        return detail;
    }

    

    get langeBeschrijving() : string {
        return this._langeBeschrijving;
    }
    
    get bewoonbareOppervlakte() : number {
        return this._bewoonbareOppervlakte;
    }
    
    get totaleOppervlakte() : number {
        return this._totaleOppervlakte;
    }
    
    get epcWaarde() : number {
        return this._epcWaarde;
    }    

    public get kadastraalInkomen() : number {
        return this._kadastraalInkomen;
    }
    
    
}