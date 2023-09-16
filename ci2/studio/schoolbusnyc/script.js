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

// p5.js sketch :) drawing the spinning circles to visualize the data (all circles are spinning the same speed)

let data, url;
let itemNum = 100;
let w, h;
let numPerRow = 3;
let numPerCol = 50;


// let speed = [];
let angle = 0;

function preload() {
  // load data from NYC Open Data API
  url = "./jsondata/schoolbusdata-may2-may3.json";
  data = loadJSON(url);
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight * 9);

  w = width;
  h = height;

  cnv.id('mycanvas');

}

function draw() {
  background("#ffc021");
  //background('#ff4d05');

  let k = 0;

  let xInterval = w / (numPerRow + 1);
  let yInterval = h / (numPerCol + 1);

  // loop through the data and draw circles for each reason
  let index = 0;
  for (let j = 0; j < numPerRow; j++) {
    for (let i = 0; i < numPerCol; i++) {
      let reason = data[index].Reason;

      // assign a nuber for each reason
      // default reasonNum to 0 if reason is undefined
      let reasonNum = 1;
      if (reason === "Accident") {
        reasonNum = 8;
      } else if (reason === "Delayed by School") {
        reasonNum = 7;
      } else if (reason === "Flat Tire") {
        reasonNum = 24;
      } else if (reason === "Heavy Traffic") {
        reasonNum = 100;
      } else if (reason === "Late return from Field Trip") {
        reasonNum = 14;
      } else if (reason === "Mechanical Problem") {
        reasonNum = 46;
      } else if (reason === "Other") {
        reasonNum = 65;
      } else if (reason === "Problem Run") {
        reasonNum = 13;
      } else if (reason === "Weather Conditions") {
        reasonNum = 19;
      } else if (reason === "Won’t Start") {
        reasonNum = 31;
      }

      // map the reason number to a range of circle sizes
      let s = map(reasonNum, 0, 100, 0, yInterval - 40);

      // calculate the position of the circle based on its index
      let x = ((j % numPerRow) + 1) * xInterval;
      let y = ((i % numPerCol) + 1) * yInterval;

      // draw circle
      strokeWeight(1.25);
      stroke(000);
      noFill();
      // let speed = 0.002;
      // let delay = data[index].How_Long_Delayed;
  
      // if(delay === "0-15 Min"){
      //    speed = 0.0001;
      // } else if (delay === "16-30 Min"){
      //     speed = 0.00005;
      // } else if (delay === "31-45 Min"){
      //     speed = 0.00001;
      // } else if (delay === "46-60 Min"){
      //     speed = 0.0001;
      // } else if (delay === "61-90 Min"){
      //     speed = 0.00005;
      // } 
      
      circle(x, y, s);

      let speedArray = [.0001, .00005, .0001, .00005];
      let spinSpeed = .0001;
      
      if (mouseIsPressed == true) {
        angle -= spinSpeed;
      } else {
        angle += spinSpeed;
      }

       //circle orbiting around
       let dist = s / 2;
    
      //rules for orbiting circle
       let orbitX = x + dist * cos(angle);
       let orbitY = y + dist * sin(angle);


      fill("white");
      ellipse(orbitX, orbitY, s / 5, s / 5);

      k++;
      index++;
    }
  }
}

// making it responsive when resizing the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 9);
  if (windowWidth < 768) {
    numPerRow = 2;
    numPerCol = 75;
    // let s = map(reasonNum, 0, 100, 0, yInterval - 20);
  } else if (windowWidth > 1024) {
    numPerRow = 5;
    numPerCol = 30;
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