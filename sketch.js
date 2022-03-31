let table;
let maxCitric,
  minCitric,
  maxDensity,
  minDensity,
  maxPh,
  minPh,
  maxQuality,
  minQuality,
  minAlcohol,
  maxAlcohol;
let index = 0;
let res;
let nosieVal;
let r = 48; let g = 40; let b = 45; let bgAlpha = 10;
let xStep, yStep;
let quality, density, alcohol, ph;
let num;
let iteration = 0;
let maxIteration = 40;
let maxNum = 70;
let minNum = 10;
let minRes = 5;
let maxRes = 50;
let resConst = 5;
let hu;
let minHu = 0;
let maxHu = 250;
let can;

let walkers = [];

function preload() {
  table = loadTable("WineQT.csv", "csv", "header");
}

function setup() {
  frameRate(10);
  can = createCanvas(1000, 1000);
  colorMode(RGB);
  background(r,g,b);
  maxCitric = max(table.getColumn("citric acid"));
  minCitric = min(table.getColumn("citric acid"));
  maxDensity = max(table.getColumn("density"));
  minDensity = min(table.getColumn("density"));
  maxPh = max(table.getColumn("pH"));
  minPh = min(table.getColumn("pH"));
  maxQuality = max(table.getColumn("quality"));
  minQuality = min(table.getColumn("quality"));
  maxAlcohol = max(table.getColumn("alcohol"));
  minAlcohol = min(table.getColumn("alcohol"));
//   // console.log(table);

  quality = table.getNum(index, "quality");
//   res = map(quality,minQuality,maxQuality,maxRes,minRes);
//   let tempRes = 210/quality;
//   res = map(tempRes,21,210,5,50);  
  ph = table.getNum(index, "pH");
  hu = map(ph,minPh,maxPh,minHu, maxHu);
  res = (10-(quality-1))*resConst;
  alcohol = table.getNum(index, "alcohol");
  for (let i = 0; i < maxNum; i++) {
    walkers[i] = new Walker(random(width), random(height),hu, alcohol, maxAlcohol, minAlcohol, res);
	// console.log(quality);
	// console.log(res);
  }
}

function draw() {
	colorMode(RGB);
	background(r,g,b,bgAlpha);
  //fill(255);
  quality = table.getNum(index, "quality");
  density = table.getNum(index, "density");
  alcohol = table.getNum(index, "alcohol");
//   console.log(alcohol);
//   res = map(quality,minQuality,maxQuality,maxRes,minRes);
//   res = 210/quality*5;
//   let tempRes = 210/quality;
//   res = map(tempRes,21,210,5,50);
  hu = map(ph,minPh,maxPh,minHu, maxHu);
  res = (10-(quality-1))*resConst;
  res = (10-(quality-1))*resConst;
  xStep = width / res;
  yStep = height / res;
  num = map(density, minDensity, maxDensity, minNum, maxNum);
  console.log(num);

  
  for (let i = 0; i < num; i++) {
	walkers[i].update();
	walkers[i].display();
	
    
  }

  
//   fill(255);
//   circle(500,500,50);
  iteration++;
  if (iteration > maxIteration) {
    noLoop();
  }
//   noLoop();
}

function keyPressed() {
  if(keyCode === ENTER) {
	saveCanvas(can, 'painting', 'jpg');
  }
  if (keyCode === LEFT_ARROW) {
    index++;
    if (index > 1143) {
      index = 0;
    }
  } else if (keyCode === RIGHT_ARROW) {
    index--;
    if (index < 0) {
      index = 1143;
    }
  } 
	quality = table.getNum(index, "quality");
	density = table.getNum(index, "density");
	alcohol = table.getNum(index, "alcohol");
	hu = map(ph,minPh,maxPh,minHu, maxHu);
    res = (10-(quality-1))*resConst;
	res = (10-(quality-1))*resConst;
	num = map(density, minDensity, maxDensity, minNum, maxNum);
	for (let i = 0; i < num; i++) {
		walkers[i].updateVal(
		random(width),
		random(height),
		hu,
		alcohol,
		maxAlcohol,
		minAlcohol,
		res
		);
	  }
	  colorMode(RGB);
  background(r,g,b);
  iteration = 0;
  loop();
}
