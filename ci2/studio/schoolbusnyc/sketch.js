function seeData() {
  var metadata = document.getElementById("showcircles");
  if (metadata.style.display === "none") {
    metadata.style.display = "block";
  } else {
    metadata.style.display = "none";
  }
}


let data, url;
// let itemNum = 100;
let w, h;
let numPerRow = 3;
let numPerCol = 50;
let speed = 0.0001;
// let speed = [];
let angle = 0;

function preload() {
  // load data from NYC Open Data API
  url = "./jsondata/schoolbusdata-may2-may3.json";
  data = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth, windowHeight * 9);

  w = width;
  h = height;
  //console.log(data);
  //console.log(data[0].Reason);

  loop();
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
      //console.log(reasonNum)
      // map the reason number to a range of circle sizes
      let s = map(reasonNum, 0, 100, 0, yInterval - 40);

      // calculate the position of the circle based on its index
      let x = ((j % numPerRow) + 1) * xInterval;
      let y = ((i % numPerCol) + 1) * yInterval;

      // draw circle
      strokeWeight(1.25);
      stroke(000);
      noFill();

      circle(x, y, s);

      //circle orbiting around
      let dist = s / 2;
      //rules for orbiting circle
      let orbitX = x + dist * cos(angle);
      let orbitY = y + dist * sin(angle);

      /*
      let speed = data[index].How_Long_Delayed;
      let spinSpeed = 0; 
      if (speed === "0-15 Min"){
        spinSpeed = 0.0001;
      } else if (speed === "16-30 Min"){
        spinSpeed = 0.00005;
      } else if (speed === "31-45 Min"){
        spinSpeed = 0.00001;
      } else if (speed === "46-60 Min"){
        spinSpeed = 0.0001;
      } else if (speed === "61-90 Min"){
        spinSpeed = 0.00005;
      }
      */

      if (mouseIsPressed == true) {
        angle -= speed;
      } else {
        angle += speed;
      }

      //angle += speed;

      //assigning different colors for the different types of school bus run
      /*
      if (data[index].Run_Type === "Special Ed AM Run"){
        fill("#ff4e05")
        ellipse(orbitX, orbitY, s/5, s/5);
      }
      if (data[index].Run_Type === "General Ed AM Run"){
        fill("#ff0539")
        ellipse(orbitX, orbitY, s/5, s/5);
      }
      if (data[index].Run_Type === "Special Ed PM Run"){
        fill("#4e05ff")
        ellipse(orbitX, orbitY, s/5, s/5);
      }
      if (data[index].Run_Type === "General Ed PM Run"){
        fill("#05b6ff")
        ellipse(orbitX, orbitY, s/5, s/5);
      }
      if (data[index].Run_Type === "Special Ed Field Trip"){
        fill("#00b100")
        ellipse(orbitX, orbitY, s/5, s/5);
      }
      if (data[index].Run_Type === "General Ed Field Trip"){
        fill("#006400")
        ellipse(orbitX, orbitY, s/5, s/5);
      }
      if (data[index].Run_Type === "Pre-K/EI"){
        fill("#ff05b6")
        ellipse(orbitX, orbitY, s/5, s/5);
      }
      */

      fill("white");
      ellipse(orbitX, orbitY, s / 5, s / 5);

      k++;
      index++;
    }
  }
}

//pressing shift key to hide these spinning circles
// function keyPressed() {
//   if (keyCode === SHIFT) {
//     noLoop();
//   } else {
//     loop();
//   }
// }

// making it responsive when resizing the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 9);
  if (windowWidth < 768) {
    numPerRow = 1;
    numPerCol = 150;
    // let s = map(reasonNum, 0, 100, 0, yInterval - 20);
  } else if (windowWidth > 1024) {
    numPerRow = 5;
    numPerCol = 30;
  }
}
