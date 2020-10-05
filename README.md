# Frontend Fictimmo
### GitHub repository voor frontend applicatie van een (fictieve) ImmoWebsite, geschreven in Angular 9

Voor het draaien van deze applicatie dient de backendserver ook actief en bereikbaar te zijn.
Hiervoor gebruikte ik Visual Studio for mac + Docker. De exacte specficaties daarvoor zijn te vinden in de readme van de backend API repository.

De bedoeling van deze applicatie is het raadplegen van huizen, details opvragen van specifieke huizen, huizen toevoegen en huizen verwijderen (bvb. als ze verkocht zouden worden)

##Info nodig voor startup
- De backend dient te draaien en beschikbaar te zijn
- bij de eerste opstart: npm install
- na de install: npm start

**De applicatie kan gebruikt worden met volgende gegevens:**
- Gebruikersnaam: admin@huizen.be
- Paswoord: P@ssword1

## Requirements frontend Web IV
- [x] een werkende web applicatie
- [x] Angular 9 front end
- [x] .NET Core backend met swagger
- [x] Loginsysteem
- [x] minstens 4 API calls(naast de login / register)
- [x] best practices toepassen
- [x] backend routes afschermen
- [x] minstens 4 components
- [x] minstens 1 form (reactive) met validatie
- [x] minstens 2 modules
- [x] routing met minstens 2 pagina’s
- [x] responsive en een minimum aan stijl
- [x] regelmatige commits in git (één of een paar commits helemaal op het einde wordt niet aanvaard)
- [x] minstens één ‘extra’ technologie die niet aan bod kwam in de cursus (zie verder voor voorbeelden)
- [x] een aantal (uniten/of e2e) testen
- [x] goede README.md’s op de github repositories
- [x] een volledig en tijdig ingediend dossier(zie verder voor de vereisten)

## Beknopte opbouw applicatie:
- **Modules:** 
  * RoutingModule
  * HuisModule
  * UserModule
  * MaterialModule
  * AppModule

- **Componenten:** 
  *HuisComponent
  * LocatieComponent
  * HuisListComponent
  * HuisFilterPipe
  * AddHuisComponent
  * HuisDetailComponent
  * DetailComponent
  * ImmoBureauComponent

- **Dataservices:** 
  * HuisDataService
  * ImmoBureauDataService
  
## Extra technologie: Google Maps API
_Voor de extra technologie werd gebruik gemaakt van AngularGoogleMaps. Deze module werd geimporteerd in de HuisModule. Daarnaast GoogleMapsAPIWrapper gebruikt als provider in bovengenoemde module._

## Testen
- HttpTests
  - _Algemene test ofdat de applicatie correct opstart en testen of de HttpGet-Calls naar de backend server slagen_
- FormValidValidationTest
  - _Testen of de form correct werkt wanneer alle required velden aan de eisen voldoen_
- FormInvalidValidationTest
  - _Testen of de form errormessages toont wanneer niet aan alle eisen voldaan is_


