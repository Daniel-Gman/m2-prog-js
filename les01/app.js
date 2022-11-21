class App
{
    runApplication()
    {
        console.log("hello world!")
        let appnaam = "Daniel";
        let versienummer = "0.9";
        let versiedatum = "21-11-2022";
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

let app = new App ();
app.runApplication();