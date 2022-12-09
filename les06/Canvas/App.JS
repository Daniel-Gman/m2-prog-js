class App {
    runApplication() {

        let myCanvas = document.getElementById("CanvasID")
        let g = myCanvas.getContext("2d");

        let myButton = document.getElementById("MyButton");
        MyButton.addEventListener('click', () => {
            console.log("Hallo clicker")
        })

        myCanvas.addEventListener('mousemove', (evt) => {
            let getMousePos = this.getMousePos(myCanvas, evt);

            g.clearRect(0, 0, myCanvas.width, myCanvas.height);
            g.beginPath();
            g.fillStyle = "green";
            g.rect(getMousePos.x, getMousePos.y, 30, 30);
            g.stroke();
            g.fill();

        })


    }

    getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}

let app = new App();
app.runApplication();