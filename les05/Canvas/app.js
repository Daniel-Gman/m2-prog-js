class App {
    runApplication() {
        let artiesten = ["Eminem", "Ye Yitler", "juice Wrld", "XXX", "Post Malone"];
        for (let i = 0; i < artiesten.length; i++) {
            let Artiesten = (artiesten[i]);
            console.log(Artiesten);
        }
    }
}

let app = new App();
app.runApplication();