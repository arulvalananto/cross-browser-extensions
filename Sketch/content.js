console.log("Sketch Extension running....");

function setup() {
    console.log("sketch started");
    document.body.style["userSelect"] = "none";
    let c = createCanvas(windowWidth, windowHeight);
    c.style("pointer-events", "none");
    c.position(0, 0);
    clear();
}

function draw() {
    stroke(225, 0, 225);
    strokeWeight(1);
    if (mouseIsPressed) {
        // line(mouseX, mouseY, pmouseX, pmouseY);
        // ellipse(mouseX, mouseY, 80, 80);
    }
}
