function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(15, 300);

    canvas = createCanvas(500, 500);
    canvas.position(1000, 350);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() 
{
    console.log('poseNet is Initialized');
}
noseX=0;
noseY=0;
leftWrist=0;
rightWrist=0;
difference=0;

function gotPoses(results)
{
  if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        console.log('nose X: ' + noseX + 'noseY: ' + noseY);  
        console.log("Left wrist location: " + leftWrist + "/n Right Wrist Location: " + rightWrist);
        difference = floor(leftWrist - rightWrist);
        console.log(difference)
    }
}
function draw()
{
    background('#969A97');
    fill('Green');
    stroke('black');  
    textSize(difference);
    text('Sanjay', noseX, noseY );  
}
