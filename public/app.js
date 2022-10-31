//step 4: socket connection
let socket = io();
let r;
let g;
let b;
let size;



//connect socket client
socket.on('connect', () => {
    console.log('Connected');
});

//step 8:
socket.on('data', (data)=>{
    console.log(data);

    //Draw with data coming in
    fill(0);
    ellipse(data.x ,data.y, 10);

});


//p5 code
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255);

    r = random(255);
    g = random(255);
    b = random(255);
    size = random(50);
}

function mouseMoved(){
    // fill(0);
    // ellipse(mouseX, mouseY, 10);


let mousePos = {
    x: mouseX,
    y: mouseY,
    r: r,
    g: g,
    b: b,
    size: size
}

//step 5 emit data to the server
socket.emit('data', mousePos);
    


}

function drawObj(obj){
    noStroke();
    fill(obj.r,obj.g,obj.b);
    ellipse(obj.x, obj.y, obj.size);

}

