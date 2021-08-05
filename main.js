canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_height=100;
car2_height=100;
car1_width=100;
car2_width=100;
car1_x=10;
car1_y=10;
car2_x=10;
car2_y=110;
background_image="bg.jpg";
car1_image="car1.png";
car2_image="car2.jpg";
function add() {
  background_imagetag=new Image();
  background_imagetag.onload=uploadbackground;
  background_imagetag.src=background_image;  
  car1_imagetag=new Image();
  car1_imagetag.onload=uploadcar1;
  car1_imagetag.src=car1_image;
  car2_imagetag=new Image();
  car2_imagetag.onload=uploadcar2;
  car2_imagetag.src=car2_image;
}
function uploadbackground() {
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imagetag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_imagetag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPress=e.keyCode;
    if (keyPress=="38") {
        up();
        console.log("up");
    }
    if (keyPress=="40") {
        down();
        console.log("down");
    }
    if (keyPress=="37") {
        left();
        console.log("left");
    }
    if (keyPress=="39") {
       right();
        console.log("right");
    }
    if (keyPress=="65") {
        up1();
        console.log("up1");
    }
    if (keyPress=="68") {
        down1();
        console.log("down1");
    }
    if (keyPress=="83") {
        left1();
        console.log("left1");
    }
    if (keyPress=="87") {
       right1();
        console.log("right1");
    }
}
function up(){
    if (car1_y>=0) {
car1_y=car1_y-10;
console.log(car1_y);
uploadbackground();
uploadcar1();   
    }
}
function down(){
    if (car1_y<=500) {
    car1_y=car1_y+10;
console.log(car1_y);
uploadbackground();
uploadcar1();   
    }
}
function left(){
    if (car1_x>=0) {
    car1_x=car1_x-10;
console.log(car1_x);
uploadbackground();
uploadcar1();   
    }
}
function right(){
    if (car1_x<=700) {
    car1_x=car1_x+10;
console.log(car1_x);
uploadbackground();
uploadcar1();   
    }
};

    
    function up1(){
        if (car2_y>=0) {
        car2_y=car2_y-10;
    console.log(car2_y);
    uploadbackground();
    uploadcar2();   
        }
    }
    function down1(){
        if (car2_y<=500) {
        car2_y=car2_y+10;
    console.log(car2_y);
    uploadbackground();
    uploadcar2();   
        }
    }
    function left1(){
        if (car2_x>=0) {
        car2_x=car1_x-10;
    console.log(car2_x);
    uploadbackground();
    uploadcar2();   
        }
    }
    function right1(){
        if (car2_x<=700) {
        car2_x=car2_x+10;
    console.log(car2_x);
    uploadbackground();
    uploadcar2();}}