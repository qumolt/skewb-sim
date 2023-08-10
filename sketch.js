let canvas;
let skewbI;
let pHist;
let aHist = [];
let cbInfo;
let showInfo = false;

function setup() {
	canvas = createCanvas(600, 400);

	frameRate(10);
	colorMode(HSB, 256);

	skewbI = new skewb(200, 200, 100);

	cbInfo = createCheckbox('keys', false);
  	cbInfo.changed(cbInfoEvent);
  	cbInfo.position(450, 100);

  	pHist = createElement('p', '');
}
function draw() {
	//background(125);//debug
	clear();

	skewbI.drawSkewb();

	if(showInfo){
		strokeWeight(2);
		ellipseMode(CENTER);
		stroke(32, 200, 200);
		ellipse(115, 100, 30, 30);
		line(115, 100, 420, 220); 	//b7

		stroke(64, 200, 200);
		ellipse(200, 150, 30, 30);
		line(200, 150, 420, 180);	//a5

		stroke(96, 200, 200);
		ellipse(285, 100, 30, 30);
		line(285, 100, 420, 240);	//d8
		
		stroke(128, 200, 200);
		ellipse(200, 50, 30, 30);	
		line(200, 50, 420, 100);	//c1
		
		stroke(160, 200, 200);
		ellipse(115, 300, 30, 30);
		line(115, 300, 420, 140);	//h3
		
		stroke(192, 200, 200);
		ellipse(200, 250, 30, 30);
		line(200, 250, 420, 200);	//e6
		
		stroke(224, 200, 200);
		ellipse(285, 300, 30, 30);
		line(285, 300, 420, 160);	//f4
		
		stroke(255, 200, 200);
		ellipse(200, 350, 30, 30);
		line(200, 350, 420, 120);	//g2		

		//textFont('Helvetica');
		textFont('monospace');
		textAlign(LEFT, CENTER);
		noStroke();
		fill(220);
		strokeWeight(2);
		textSize(20);
		text("↻/↺", 420, 70);
		text("1/q: U/U'", 420, 100);
		text("2/w: B/B'", 420, 120);
		text("3/e: L/L'", 420, 140);
		text("4/r: R/R'", 420, 160);
		text("5/t: f/f'", 420, 180);
		text("6/u: F/F'", 420, 200);
		text("7/i: l/l'", 420, 220);
		text("8/o: r/r'", 420, 240);
		text("a/z: X/X'", 420, 260);
		text("s/x: Y/Y'", 420, 280);
		text("d/c: Z/Z'", 420, 300);
		text("enter: reset", 420, 330);
		text("space: clear", 420, 350);
		text("0: scramble", 420, 380);
	}
}
function cbInfoEvent(){
	if(cbInfo.checked()){showInfo = true;}
	else{showInfo = false;}
}
function addHist(move){
	//if(fixed corner notation){move = f(move);}
	//else if(fixed center notation){move = f(move);}
	aHist.push(move);
}
function drawHist(){
	pHist.html(aHist);
}
function keyPressed(){
	//console.log(keyCode);//debug
	switch(keyCode){
	case 49:				//1 -> Up 
		skewbI.moveC();
		addHist("U");
		break;
	case 81: 				//q -> Up' 
		skewbI.moveCp(); 
		addHist("U'");
		break;    
	case 50: 				//2 -> Back
		skewbI.moveG(); 
		addHist("B");
		break;     
	case 87: 				//w -> Back' 
		skewbI.moveGp(); 
		addHist("B'");
		break;    
	case 51: 				//3 -> Left
		skewbI.moveH(); 
		addHist("L");
		break;     
	case 69: 				//e -> Left' 
		skewbI.moveHp(); 
		addHist("L'");
		break;    
	case 52: 				//4 -> Right
		skewbI.moveF(); 
		addHist("R");
		break;
	case 82: 				//r -> Right' 
		skewbI.moveFp(); 
		addHist("R'");
		break;
	case 53: 				//5 -> f
		skewbI.moveA(); 
		addHist("f");
		break;
	case 84: 				//t -> f' 
		skewbI.moveAp(); 
		addHist("f'");
		break;
	case 54: 				//6 -> Front
		skewbI.moveE(); 
		addHist("F");
		break;
	case 89: 				//y -> Front' 
		skewbI.moveEp(); 
		addHist("F'");
		break;
	case 55: 				//7 -> LeftUp
		skewbI.moveB(); 
		addHist("l");
		break;
	case 85: 				//u -> LeftUp'
		skewbI.moveBp(); 
		addHist("l'");
		break;
	case 56: 				//8 -> RightUp
		skewbI.moveD(); 
		addHist("r");
		break;     
	case 73: 				//i -> RightUp' 
		skewbI.moveDp(); 
		addHist("r'");
		break;
	case 65: 				//a -> X 
		skewbI.rotateX(); 
		addHist("x");
		break;
	case 90: 				//z -> X' 
		skewbI.rotateXp(); 
		addHist("x'");
		break;
	case 83: 				//s -> Y 
		skewbI.rotateY(); 
		addHist("y");
		break;   
	case 88: 				//x -> Y'
		skewbI.rotateYp(); 
		addHist("y'");
		break;  
	case 68: 				//d -> Z 
		skewbI.rotateZ(); 
		addHist("z");
		break;   
	case 67: 				//c -> Z'
		skewbI.rotateZp(); 
		addHist("z'");
		break;       
	case 13: 				//enter -> restart
		skewbI.startColors(); 
		aHist.splice(0, aHist.length);
		break;
	case 32: 				//space -> clear
		aHist.splice(0, aHist.length);
		break; 
	case 48: 				//0 -> scramble
		skewbI.scramble(1);
		break;
	default: break;
	} 
	drawHist();
	return false;
}