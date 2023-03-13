difference= 0;
nose_x= 0;
nose_y= 0;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(1080, 250);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(400, 250)
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet model is Intialised!!");
}

function gotPoses(results) {
    if (results.length > 0) {

        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;

        nose_x= results[0].pose.nose.x
        nose_y= results[0].pose.nose.y
        

        console.log("Left wrist x= " + left_wrist_x);
        console.log("Right wrist x= " + right_wrist_x);

        difference = floor(left_wrist_x - right_wrist_x);
        console.log("difference " + difference);

    }
}

function draw() {
    background("lightblue");
    textSize(difference);
    fill("black");
    text("Manas", nose_x , nose_y);
    document.getElementById("font_size").innerHTML= "Font size of the text will be= " + difference;
}