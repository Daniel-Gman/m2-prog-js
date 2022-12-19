class Dino {
    constructor(naam, vleeseter, leeftijd) {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
    }
}

class plant {
    constructor(naming, leeftijd, honger, leeft) {
        this.naming = naming;
        this.leeftijd = leeftijd;
        this.honger = honger;
        this.leeft = leeft;


        plant.leeftijd = true
        plant.honger = true;
        plant.leeft = false;
    }
}




class App {
    runApplication() {
        console.log("hello world!")
        let appnaam = "Daniel";
        let versienummer = "1.1";
        let versiedatum = "12-12-2022";
        let autheur = "Daniel";
        let copyright = "DV";
        let distributeur = "Daniel-inc";
        let darkmode = true;

        console.log(appnaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);

    }
}
let eetDino = new plant("Planten-Eter", 12, "veel honger", "nee");
console.log(eetDino);
let trex = new Dino("Trex", true, 10);
console.log(trex);
let app = new App();
app.runApplication();
console.log("Planten-eter eet de plant grass")
console.log("Trex eet de dino Planten-eter")