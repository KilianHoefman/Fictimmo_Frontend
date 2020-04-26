import { Huis } from './huis.model';

const JsonHuizen = [
    {
        locatie: {
            gemeente: 'Merelbeke',
            straatnaam: 'Sint-elooistraat',
            huisnummer: '1A',
            postcode: 9820
        },
        korteBeschrijving: 'Mooie alleenstaande villa met 5 slaapkamers',
        price: 750000,
        detail: {
            langeBeschrijving: 'Een heel mooie alleenstaande villa met 5 slaapkamers en 3 badkamers, Zonnepannelen en zwembad',
            bewoonbareOppervlakte: 800,
            totaleOppervlakte: 3500,
            epcWaarde: 430,
            kadastraalInkomen: 1700
        },
        type: 'koop',
        soort: 'huis',
        immoBureau: {
            naam: 'Immo Nobels',
            huizen: []
        }
    },
    {
        locatie: {
            gemeente: 'Gent',
            straatnaam: 'Vlaanderenstraat',
            huisnummer: '46',
            postcode: 9000
        },
        korteBeschrijving: 'Prominent herenhuis in hartje Gent met 4 slaapkamers',
        price: 1025000,
        detail: {
            langeBeschrijving: 'Herenhuis gelegen in hartje Gent met 4 slaapkamers en 2 badkamers, ruime leefruimte en mogelijkheid tot praktijk',
            bewoonbareOppervlakte: 600,
            totaleOppervlakte: 3500,
            epcWaarde: 430,
            kadastraalInkomen: 1700
        },
        type: 'koop',
        soort: 'huis',
        immoBureau: {
            naam: 'Immo Nobels',
            huizen: []
        }
    },
    {
        locatie: {
            gemeente: 'Gent',
            straatnaam: 'Overpoortstraat',
            huisnummer: '6',
            postcode: 9000
        },
        korteBeschrijving: 'Nachtclub / Café',
        price: 1025000,
        detail: {
            langeBeschrijving: 'Herenhuis gelegen in hartje Gent met 4 slaapkamers en 2 badkamers, ruime leefruimte en mogelijkheid tot praktijk',
            bewoonbareOppervlakte: 600,
            totaleOppervlakte: 3500,
            epcWaarde: 430,
            kadastraalInkomen: 1700
        },
        type: 'koop',
        soort: 'huis',
        immoBureau: {
            naam: 'Immo Nobels',
            huizen: []
        }
    }
];

export const HUIZEN: Huis[] = JsonHuizen.map(Huis.fromJSON);