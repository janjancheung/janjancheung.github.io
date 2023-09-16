//to mute/unmute audio with button > reference https://www.w3schools.com/tags/av_prop_muted.asp

var audio = document.getElementById("audio");

function enableMute() { 
  audio.muted = true;
} 

function disableMute() { 
  audio.muted = false;
}

//to play/pause audio with button > referecne https://www.w3schools.com/tags/av_met_pause.asp

var audio = document.getElementById("audio"); 
var isPlaying = false;

function toggleAudio(){
  if (isPlaying){
    audio.pause();
  } else{
    audio.play();
  }
  isPlaying = !isPlaying;
}

// p5.js sketch :) drawing the spinning circles to visualize the data (circles spinning at different speed) on p5.js: https://editor.p5js.org/cheungayin/sketches/vyxaEjbaP

let data, url;
let itemNum = 150;

let orbitX;
let orbitY;
let orbitRadius = [];
let circleRadius = 7.5;
let angle = 0;
let orbitSpeed = [];
let orbitCircleList = [];

let w, h;

let numPerRow = 3;
let numPerCol = 50;

function preload() {
  // load data from NYC Open Data API
  url = "./jsondata/schoolbusdata-may2-may3.json";
  data = loadJSON(url);
}

let rowPos = 1;
let columnPos = 1;
function setup() {
  let cnv = createCanvas(windowWidth, windowHeight * 9);
  cnv.id("mycanvas");

  formattedData = Object.values(data);
  // console.log(formattedData);

  for (let i = 0; i < formattedData.length; i++) {
    let reason = formattedData[i].Reason;
    // console.log(reason);
    // console.log(formattedData[i].Reason);

    // orbitRadius = 1;
    if (reason === "Accident") {
      orbitRadius = 8;
    } else if (reason === "Delayed by School") {
      orbitRadius = 7;
    } else if (reason === "Flat Tire") {
      orbitRadius = 24;
    } else if (reason === "Heavy Traffic") {
      orbitRadius = 100;
    } else if (reason === "Late return from Field Trip") {
      orbitRadius = 14;
    } else if (reason === "Mechanical Problem") {
      orbitRadius = 46;
    } else if (reason === "Other") {
      orbitRadius = 65;
    } else if (reason === "Problem Run") {
      orbitRadius = 13;
    } else if (reason === "Weather Conditions") {
      orbitRadius = 19;
    } else if (reason === "Won’t Start") {
      orbitRadius = 31;
    } else {
      orbitRadius = 1;
    }

    // console.log(orbitRadius);

    let delayed = formattedData[i].How_Long_Delayed;
    // console.log(delayed);

    if (delayed === "0-15 Min") {
      orbitSpeed = 0.015;
    } else if (delayed === "16-30 Min") {
      orbitSpeed = 0.0095;
    } else if (delayed === "31-45 Min") {
      orbitSpeed = 0.008;
    } else if (delayed === "46-60 Min") {
      orbitSpeed = 0.0065;
    } else if (delayed === "61-90 Min") {
      orbitSpeed = 0.005;
    } else {
      orbitSpeed = 0;
    }

    w = width;
    h = height;

    let xInterval = w / (numPerRow + 1);
    let yInterval = h / (numPerCol + 1);

    if (rowPos === numPerRow + 1) {
      rowPos = 1;
      columnPos++;
    }
    if (columnPos === numPerCol + 1) {
      columnPos = 1;
    }

    orbitX = xInterval * rowPos;
    orbitY = yInterval * columnPos;

    rowPos++;

    let sunColor = random(0, 255); //random color

    let sunRadius = formattedData[i].Reason;
    // console.log(reason);
    // console.log(formattedData[i].Reason);

    // sunRadius = 1;
    if (reason === "Accident") {
      sunRadius = 8;
    } else if (reason === "Delayed by School") {
      sunRadius = 7;
    } else if (reason === "Flat Tire") {
      sunRadius = 24;
    } else if (reason === "Heavy Traffic") {
      sunRadius = 100;
    } else if (reason === "Late return from Field Trip") {
      sunRadius = 14;
    } else if (reason === "Mechanical Problem") {
      sunRadius = 46;
    } else if (reason === "Other") {
      sunRadius = 65;
    } else if (reason === "Problem Run") {
      sunRadius = 13;
    } else if (reason === "Weather Conditions") {
      sunRadius = 19;
    } else if (reason === "Won’t Start") {
      sunRadius = 31;
    } else {
      sunRadius = 1;
    }
    
    // console.log(sunRadius);

    let currentOrbCircle = new OrbitingCircle(
      orbitX,
      orbitY,
      orbitRadius / 2,
      circleRadius,
      angle,
      orbitSpeed,
      sunColor,
      sunRadius
    );

    orbitCircleList.push(currentOrbCircle);
  }

  // circle(0, 0, 100);
}

function draw() {
  background('#ffc021');

  orbitCircleList.forEach((system) => {
    system.display();
  });
}

class OrbitingCircle {
  constructor(x, y, ro, rc, a, s, sc, sr) {
    this.x = x; // x coordinate for the orbit
    this.y = y; // y coordinate for the orbit
    this.ro = ro; // radius of orbit
    this.rc = rc; // radius of circle
    this.a = a; // angle
    this.s = s; // speed
    this.sc = sc; // sun color
    this.sr = sr; // sun radius
  }

  display() {
    strokeWeight(1);
    noFill(this.sc, 0, 0);
    ellipse(this.x, this.y, this.sr);
    fill("white");
    // draw the orbiting circle
    ellipse(
      this.x + this.ro * cos(this.a),
      this.y + this.ro * sin(this.a),
      this.rc * 2,
      this.rc * 2
    );
    // change 40 into sr instead so size changes

    // update angles to create rotating effects

    if (mouseIsPressed == true) {
      this.a -= this.s;
    } else {
      this.a += this.s;
    }
  }
}

// making it responsive when resizing the window

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 9);
  if (windowWidth < 768) {
    numPerRow = 2;
    numPerCol = 75;
  } else if (windowWidth > 1024) {
    numPerRow = 5;
    numPerCol = 30;
  } else {
    numPerRow = 3;
    numPerCol = 50;
  }
}

//busdata grid to show metadata

fetch('./jsondata/schoolbusdata-may2-may3.json')
.then(response => response.json())
.then(data => {
    // access div element
    const busdata = document.getElementById('busdata');
            
    // loop through  data and add each item to div
    data.forEach(item => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const btn = document.createElement('button');

    // setting text content
    h2.textContent = item.Reason;
    p.textContent = '#' + item.Busbreakdown_ID;
    p1.textContent = 'bus no. ' + item.Bus_No + '  route no. ' + item.Route_Number;
    // p2.textContent = 'route no. ' + item.Route_Number;
    p3.textContent = item.Occurred_On;
    p4.textContent = 'bus ran by ' + item.Bus_Company_Name;
    p5.textContent = 'delayed for ' + item.How_Long_Delayed;
    btn.textContent = 'see data';

    // add the HTML tags to webpage
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(p1);
    // div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    busdata.appendChild(div);

    });
})
.catch(error => console.error(error));


let toggleData = document.querySelector(".seedata-btn");
let dataStatus = document.querySelector(".seedata");
// let mycanvas = document.querySelector("#mycanvas");
// mycanvas.style.display = "none";
// when user clicks on "see metadata", open and close the metadata
toggleData.addEventListener( "click", () => {
    if (dataStatus.classList.contains("open")){
      dataStatus.classList.remove("open");
      busdata.style.display = "none";
      mycanvas.style.display = "block";
    }
    else{
      dataStatus.classList.add("open");
      busdata.style.display = "grid";
      mycanvas.style.display = "none";
    }
},
false,
);