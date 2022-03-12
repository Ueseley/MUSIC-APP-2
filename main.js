function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
  
    
    poseNet = ml5.poseMet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    
    function modelLoaded(){
        console.log('PoseNet Is Initialized');
    }
    function draw(){
        image(video, 0, 0, 600, 500);
    }
    
    song = "";
    leftWristX = 0;
    lefttWristY = 0;
    rightWristX = 0;
    rightWristY = 0;
    
    function preload()
    {
    song = loadSound("music.mp3");
    }
    
    
    
    function play()
    {
        song.play();
        song.setVolume(1);
        song.rate(1);
    
    }
    
    function gotPoses(results)
    {
        if(result.length > 0)
        {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist =" + leftWristX +" leftWristY = "+leftWristY);
    
        rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWrist =" + rightWristX +" rightWristY = "+rightWristY);
        }
    }
    