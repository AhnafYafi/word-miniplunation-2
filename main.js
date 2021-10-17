function setup()
    {
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,450);
canvas.position(600,100);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
    }

    function gotPoses(results)
    {
if(results.length > 0)
{
    console.log(results);
}
    }

    function modelLoaded()
    {
        console.log('poseNet is initialized!');
    }

    function draw()
    {
        background('#98989c');

    }
