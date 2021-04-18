function setup() {
    canvas = createCanvas(640, 480)
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    Image(video, 20 , 60 , 640 , 480);
    Fill(255, 255, 0);
    stroke(0, 0, 0);
    circle(20, 50, 40);
    circle(620, 50, 40);
    circle(20, 430, 40);
    circle(620, 430, 40);

    fill(255,165,0);
    stroke(0, 0, 0);
    rect(40, 30, 560, 20);
    rect(10, 70, 20, 340);
    rect(40, 430, 560, 20);
    rect(610, 70, 20, 340);
}

function take_snapshot () {
    save('Pic.png');
}
