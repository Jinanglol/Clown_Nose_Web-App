noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/XJkfpwT2/nose-image.png');
}

function setup(){
canvas = createCanvas(400 , 400);
canvas.center();
video = createCapture(VIDEO);
video.size(400 , 400);
video.hide();

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video , 0 , 0 , 400 , 400 );
    image(clown_nose , noseX-10 , noseY-10 , 30 , 30);
}

function take_snapshot(){
    save('stuent_name.png');

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX =  results[0].pose.nose.x;
        noseY =  results[0].pose.nose.y;
        console.log("noseX = " + results[0].pose.nose.x);
        console.log("noseY = " + results[0].pose.nose.y);
    }
}