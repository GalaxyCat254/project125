difference = 0;
right_wrist_X = 0;
left_wrist_X = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        left_wrist_X = results[0].pose.leftWrist.x;
        right_wrist_X = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_X-right_wrist_X);
    }
}

function draw(){
    background("rgb(255, 254, 209)");
    textSize(difference);
    fill("rgb(16, 148, 33)");
    text('seher !! :)', 50,400)
}