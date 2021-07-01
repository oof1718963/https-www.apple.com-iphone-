noseX=0;
noseY=0;
  function setup() {
  video = createCapture(VIDEO);
  video.size(500, 500);

  canvas = createCanvas(410, 405);
  canvas.position(600 ,1000);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}













function AppleWeb() {
  window.open(
    "https://www.apple.com/", "_blank");
}







function IPhone() {
  window.open(
    "https://www.apple.com/iphone/", "_blank");
}
function IPad() {
  window.open(
    "https://www.apple.com/IPad", "_blank");
}
function AppleWeb() {
  window.open(
    "https://www.apple.com/", "_blank");
}
function AppleWeb() {
  window.open(
    "https://www.apple.com/", "_blank");
}
function AppleWeb() {
  window.open(
    "https://www.apple.com/", "_blank");
}
function AppleWeb() {
  window.open(
    "https://www.apple.com/", "_blank");
}
function AppleWeb() {
  window.open(
    "https://www.apple.com/", "_blank");
}
function AppleWeb() {
  window.open(
    "https://www.apple.com/", "_blank");
}
function AppleWeb() {
  window.open(
    "https://www.apple.com/", "_blank");
}
function AppleWeb() {
  window.open(
    "https://www.apple.com/", "_blank");
}