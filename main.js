canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 120;
rover_height = 100;

rover_x = 10;
rover_y = 10;



roverimg = "rover.png";

images = ["mars.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpeg"];


random = Math.floor(Math.random() * 5);
console.log(random);
backgroundimg = images[random];

function add(){
    bgimg = new Image();
    bgimg.onload=uploadBackground;
    bgimg.src=backgroundimg;

    rover_img = new Image()
    rover_img.onload=uploadRover;
    rover_img.src= roverimg;

    }

    function uploadBackground(){
        ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
    }

    function uploadRover(){
        ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
    }  

    window.addEventListener("keydown" , mykeydown);

    function mykeydown(e)  {
        keypressed = e.keyCode;
        console.log(keypressed);

        if (keypressed == '37'){
            Left();
            console.log("Left Arrow is clicked");            
            }

            if (keypressed == '40'){
                Down();
                console.log("Down Arrow is clicked");            
                }

                if (keypressed == '38'){
                    Up();
                    console.log("Up Arrow is clicked");            
                    }

                    if (keypressed == '39'){
                        Right();
                        console.log("Right Arrow is clicked");            
                        }

    }

    function Up(){
        if (rover_y > 0){
            rover_y = rover_y - 10;
            console.log("Rover_x = " + rover_x + "Rover_y = " + rover_y);
            uploadBackground();
            uploadRover();
        }
    }

    function Down(){
        if (rover_y <= 500){
            rover_y = rover_y + 10;
            console.log("Rover_x = " + rover_x + "Rover_y = " + rover_y);
            uploadBackground();
            uploadRover();
        }
    }

    function Right(){
        if (rover_x <= 680){
            rover_x = rover_x +10;
            console.log("Rover_x = " + rover_x + "Rover_y = " + rover_y);
            uploadBackground();
            uploadRover();
        }
    }

    function Left(){
        if (rover_x > 0){
            rover_x = rover_x - 10;
            console.log("Rover_x = " + rover_x + "Rover_y = " + rover_y);
            uploadBackground();
            uploadRover();
        }
    }