class skewb{
	constructor(centerX, centerY, a){
		this.a = a;
		this.h = this.a*0.8660254037844386; //a*sqrt(3)/2
		this.cX = centerX;
		this.cY = centerY;

		this.alpha = '';
		this.beta = '';
		this.gamma = '';
		this.delta = '';
		this.epsilon = '';
		this.zeta = '';
		this.aC = {x: '', y: '', z: ''}
		this.bC = {x: '', y: '', z: ''}
		this.cC = {x: '', y: '', z: ''}
		this.dC = {x: '', y: '', z: ''}
		this.eC = {x: '', y: '', z: ''}
		this.fC = {x: '', y: '', z: ''}
		this.gC = {x: '', y: '', z: ''}
		this.hC = {x: '', y: '', z: ''}

		this.startColors();
	}

	startColors(){
		this.alpha = {c: 'w'};
		this.beta = {c: 'o'};
		this.gamma = {c: 'g'};
		this.delta = {c: 'r'};
		this.epsilon = {c: 'b'};
		this.zeta = {c: 'y'};
		this.aC = {x: 'g', y: 'w', z: 'r'}
		this.bC = {x: 'o', y: 'w', z: 'g'}
		this.cC = {x: 'b', y: 'w', z: 'o'}
		this.dC = {x: 'r', y: 'w', z: 'b'}
		this.eC = {x: 'r', y: 'y', z: 'g'}
		this.fC = {x: 'b', y: 'y', z: 'r'}
		this.gC = {x: 'o', y: 'y', z: 'b'}
		this.hC = {x: 'g', y: 'y', z: 'o'}
	}
	text2Color(text){
		switch(text){
		case 'w': return color(220);			//rgb(250, 250, 250);
		case 'r': return color(240, 200, 220); 	//rgb(250, 0, 127);
		case 'g': return color(70, 200, 220);	//rgb(127, 250, 0);
		case 'b': return color(150, 200, 220);	//rgb(50, 127, 250);
		case 'y': return color(40, 200, 220);	//rgb(220, 250, 55);
		case 'o': return color(20, 200, 220);	//rgb(250, 127, 0);
		default: break;
		}
	}
	drawSkewb(){	
		stroke(20);
		strokeWeight(1);
		let pieceColor = color(0);
		//----------------------------------------
		//beta
		pieceColor = this.text2Color(this.beta.c);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - 2*this.h, this.cY);
		vertex(this.cX - 1.5*this.h, this.cY - 0.75*this.a);
		vertex(this.cX - this.h, this.cY);
		vertex(this.cX - 1.5*this.h, this.cY + 0.75*this.a);
		vertex(this.cX - 2*this.h, this.cY);
		endShape();
		//cz
		pieceColor = this.text2Color(this.cC.z);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - 2*this.h, 	this.cY - 0.5*this.a);
		vertex(this.cX - 1.5*this.h, this.cY - 0.75*this.a);
		vertex(this.cX - 2*this.h, this.cY);
		vertex(this.cX - 2*this.h, 	this.cY - 0.5*this.a);
		endShape();
		//bx
		pieceColor = this.text2Color(this.bC.x);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - 1.5*this.h, this.cY - 0.75*this.a);
		vertex(this.cX - this.h, this.cY - this.a);
		vertex(this.cX - this.h, this.cY);
		vertex(this.cX - 1.5*this.h, this.cY - 0.75*this.a);
		endShape();
		//gx
		pieceColor = this.text2Color(this.gC.x);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - 2*this.h, 	this.cY + 0.5*this.a);
		vertex(this.cX - 1.5*this.h, this.cY + 0.75*this.a);
		vertex(this.cX - 2*this.h, this.cY);
		vertex(this.cX - 2*this.h, 	this.cY + 0.5*this.a);
		endShape();
		//hz
		pieceColor = this.text2Color(this.hC.z);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - 1.5*this.h, this.cY + 0.75*this.a);
		vertex(this.cX - this.h, this.cY + this.a);
		vertex(this.cX - this.h, this.cY);
		vertex(this.cX - 1.5*this.h, this.cY + 0.75*this.a);
		endShape();
		
		//----------------------------------------
		//gamma
		pieceColor = this.text2Color(this.gamma.c);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - this.h, this.cY);
		vertex(this.cX - 0.5*this.h, this.cY - this.a*0.75);
		vertex(this.cX, this.cY);
		vertex(this.cX - 0.5*this.h, this.cY + this.a*0.75);
		vertex(this.cX - this.h, this.cY);
		endShape();
		//bz
		pieceColor = this.text2Color(this.bC.z);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - this.h, this.cY - this.a);
		vertex(this.cX - 0.5*this.h, this.cY - this.a*0.75);
		vertex(this.cX - this.h, this.cY);		
		vertex(this.cX - this.h, this.cY - this.a);
		endShape();
		//ax
		pieceColor = this.text2Color(this.aC.x);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - 0.5*this.h, this.cY - this.a*0.75);
		vertex(this.cX, this.cY - this.a*0.5);
		vertex(this.cX, this.cY);
		vertex(this.cX - 0.5*this.h, this.cY - this.a*0.75);
		endShape();
		//hx
		pieceColor = this.text2Color(this.hC.x);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - this.h, this.cY + this.a);
		vertex(this.cX - 0.5*this.h, this.cY + this.a*0.75);
		vertex(this.cX - this.h, this.cY);		
		vertex(this.cX - this.h, this.cY + this.a);
		endShape();
		//ez
		pieceColor = this.text2Color(this.eC.z);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - 0.5*this.h, this.cY + this.a*0.75);
		vertex(this.cX, this.cY + this.a*0.5);
		vertex(this.cX, this.cY);
		vertex(this.cX - 0.5*this.h, this.cY + this.a*0.75);
		endShape();
		
		//----------------------------------------
		//alpha
		pieceColor = this.text2Color(this.alpha.c);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - this.h*0.5, this.cY - this.a*1.25);
		vertex(this.cX + this.h*0.5, this.cY - this.a*1.25);
		vertex(this.cX + this.h*0.5, this.cY - this.a*0.75);
		vertex(this.cX - 0.5*this.h, this.cY - this.a*0.75);
		vertex(this.cX - this.h*0.5, this.cY - this.a*1.25);
		endShape();
		//dy
		pieceColor = this.text2Color(this.dC.y);
		fill(pieceColor);
		beginShape();
		vertex(this.cX + this.h*0.5, this.cY - this.a*0.75);
		vertex(this.cX + this.h*0.5, this.cY - this.a*1.25);
		vertex(this.cX + this.h, this.cY - this.a);
		vertex(this.cX + this.h*0.5, this.cY - this.a*0.75);
		endShape();
		//cy
		pieceColor = this.text2Color(this.cC.y);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - this.h*0.5, this.cY - this.a*1.25);
		vertex(this.cX, this.cY - this.a*1.5);
		vertex(this.cX + this.h*0.5, this.cY - this.a*1.25); 
		vertex(this.cX - this.h*0.5, this.cY - this.a*1.25);
		endShape();
		//by
		pieceColor = this.text2Color(this.bC.y);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - this.h, this.cY - this.a);
		vertex(this.cX - this.h*0.5, this.cY - this.a*1.25);
		vertex(this.cX - this.h*0.5, this.cY - this.a*0.75);
		vertex(this.cX - this.h, this.cY - this.a);
		endShape();
		//ay
		pieceColor = this.text2Color(this.aC.y);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - 0.5*this.h, this.cY - this.a*0.75);
		vertex(this.cX + this.h*0.5, this.cY - this.a*0.75);
		vertex(this.cX, this.cY - this.a*0.5);
		vertex(this.cX - 0.5*this.h, this.cY - this.a*0.75);
		endShape();

		//----------------------------------------
		//delta
		pieceColor = this.text2Color(this.delta.c);
		fill(pieceColor);
		beginShape();
		vertex(this.cX, this.cY);
		vertex(this.cX + this.h*0.5, this.cY - this.a*0.75);
		vertex(this.cX + this.h, this.cY);
		vertex(this.cX + this.h*0.5, this.cY + this.a*0.75);
		vertex(this.cX, this.cY);
		endShape();
		//az
		pieceColor = this.text2Color(this.aC.z);
		fill(pieceColor);
		beginShape();
		vertex(this.cX, this.cY - this.a*0.5);
		vertex(this.cX + this.h*0.5, this.cY - this.a*0.75);
		vertex(this.cX, this.cY);
		vertex(this.cX, this.cY - this.a*0.5);
		endShape();
		//dx
		pieceColor = this.text2Color(this.dC.x);
		fill(pieceColor);
		beginShape();
		vertex(this.cX + this.h*0.5, this.cY - this.a*0.75);
		vertex(this.cX + this.h, this.cY - this.a);
		vertex(this.cX + this.h, this.cY);
		vertex(this.cX + this.h*0.5, this.cY - this.a*0.75);
		endShape();
		//ex
		pieceColor = this.text2Color(this.eC.x);
		fill(pieceColor);
		beginShape();
		vertex(this.cX, this.cY + this.a*0.5);
		vertex(this.cX + this.h*0.5, this.cY + this.a*0.75);
		vertex(this.cX, this.cY);
		vertex(this.cX, this.cY + this.a*0.5);
		endShape();
		//fz
		pieceColor = this.text2Color(this.fC.z);
		fill(pieceColor);
		beginShape();
		vertex(this.cX + this.h*0.5, this.cY + this.a*0.75);
		vertex(this.cX + this.h, this.cY + this.a);
		vertex(this.cX + this.h, this.cY);
		vertex(this.cX + this.h*0.5, this.cY + this.a*0.75);
		endShape();

		//----------------------------------------
		//epsilon
		pieceColor = this.text2Color(this.epsilon.c);
		fill(pieceColor);
		beginShape();
		vertex(this.cX + this.h, this.cY);
		vertex(this.cX + this.h*1.5, this.cY - this.a*0.75);
		vertex(this.cX + 2*this.h, this.cY);
		vertex(this.cX + this.h*1.5, this.cY + this.a*0.75);
		vertex(this.cX + this.h, this.cY);
		endShape();
		//dz
		pieceColor = this.text2Color(this.dC.z);
		fill(pieceColor);
		beginShape();
		vertex(this.cX + this.h, this.cY - this.a);
		vertex(this.cX + this.h*1.5, this.cY - this.a*0.75);
		vertex(this.cX + this.h, this.cY);
		vertex(this.cX + this.h, this.cY - this.a);
		endShape();
		//cx
		pieceColor = this.text2Color(this.cC.x);
		fill(pieceColor);
		beginShape();
		vertex(this.cX + this.h*1.5, this.cY - this.a*0.75);
		vertex(this.cX + 2*this.h, this.cY - this.a*0.5);
		vertex(this.cX + 2*this.h, this.cY);
		vertex(this.cX + this.h*1.5, this.cY - this.a*0.75);
		endShape();
		//fx
		pieceColor = this.text2Color(this.fC.x);
		fill(pieceColor);
		beginShape();
		vertex(this.cX + this.h, this.cY + this.a);
		vertex(this.cX + this.h*1.5, this.cY + this.a*0.75);
		vertex(this.cX + this.h, this.cY);
		vertex(this.cX + this.h, this.cY + this.a);
		endShape();
		//gz
		pieceColor = this.text2Color(this.gC.z);
		fill(pieceColor);
		beginShape();
		vertex(this.cX + this.h*1.5, this.cY + this.a*0.75);
		vertex(this.cX + 2*this.h, this.cY + this.a*0.5);
		vertex(this.cX + 2*this.h, this.cY);
		vertex(this.cX + this.h*1.5, this.cY + this.a*0.75);
		endShape();

		//----------------------------------------
		//zeta
		pieceColor = this.text2Color(this.zeta.c);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - 0.5*this.h, this.cY + this.a*0.75);
		vertex(this.cX + this.h*0.5, this.cY + this.a*0.75);
		vertex(this.cX + this.h*0.5, this.cY + this.a*1.25); 
		vertex(this.cX - this.h*0.5, this.cY + this.a*1.25);
		vertex(this.cX - 0.5*this.h, this.cY + this.a*0.75);
		endShape();
		//fy
		pieceColor = this.text2Color(this.fC.y);
		fill(pieceColor);
		beginShape();
		vertex(this.cX + this.h*0.5, this.cY + this.a*0.75);
		vertex(this.cX + this.h*0.5, this.cY + this.a*1.25);
		vertex(this.cX + this.h, this.cY + this.a);
		vertex(this.cX + this.h*0.5, this.cY + this.a*0.75);
		endShape();
		//gy
		pieceColor = this.text2Color(this.gC.y);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - this.h*0.5, this.cY + this.a*1.25);
		vertex(this.cX, this.cY + this.a*1.5);
		vertex(this.cX + this.h*0.5, this.cY + this.a*1.25); 
		vertex(this.cX - this.h*0.5, this.cY + this.a*1.25);
		endShape();
		//hy
		pieceColor = this.text2Color(this.hC.y);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - this.h, this.cY + this.a);
		vertex(this.cX - this.h*0.5, this.cY + this.a*1.25);
		vertex(this.cX - this.h*0.5, this.cY + this.a*0.75);
		vertex(this.cX - this.h, this.cY + this.a);
		endShape();
		//ey
		pieceColor = this.text2Color(this.eC.y);
		fill(pieceColor);
		beginShape();
		vertex(this.cX - 0.5*this.h, this.cY + this.a*0.75);
		vertex(this.cX + this.h*0.5, this.cY + this.a*0.75);
		vertex(this.cX, this.cY + this.a*0.5);
		vertex(this.cX - 0.5*this.h, this.cY + this.a*0.75);
		endShape();

		//----------------------------------------
		
		noFill();
		strokeWeight(3);

		beginShape();
		vertex(this.cX - 2*this.h, 	this.cY - 0.5*this.a);
		vertex(this.cX - this.h, this.cY - this.a);
		vertex(this.cX - this.h, this.cY + this.a);
		vertex(this.cX - 2*this.h, 	this.cY + 0.5*this.a);
		vertex(this.cX - 2*this.h, 	this.cY - 0.5*this.a);
		endShape();

		beginShape();
		vertex(this.cX - this.h, this.cY - this.a);
		vertex(this.cX, this.cY - this.a*0.5);
		vertex(this.cX, this.cY + this.a*0.5);
		vertex(this.cX - this.h, this.cY + this.a);
		vertex(this.cX - this.h, this.cY - this.a);
		endShape();

		beginShape();
		vertex(this.cX, this.cY - this.a*0.5);
		vertex(this.cX + this.h, this.cY - this.a);
		vertex(this.cX + this.h, this.cY + this.a);
		vertex(this.cX, this.cY + this.a*0.5);
		vertex(this.cX, this.cY - this.a*0.5);
		endShape();

		beginShape();
		vertex(this.cX + 2*this.h, 	this.cY - 0.5*this.a);
		vertex(this.cX + this.h, this.cY - this.a);
		vertex(this.cX + this.h, this.cY + this.a);
		vertex(this.cX + 2*this.h, 	this.cY + 0.5*this.a);
		vertex(this.cX + 2*this.h, 	this.cY - 0.5*this.a);
		endShape();

		beginShape();
		vertex(this.cX - this.h, this.cY - this.a);
		vertex(this.cX, this.cY - this.a*1.5);
		vertex(this.cX + this.h, this.cY - this.a);
		vertex(this.cX, this.cY - this.a*0.5);
		vertex(this.cX - this.h, this.cY - this.a);
		endShape();

		beginShape();
		vertex(this.cX, this.cY + this.a*0.5);
		vertex(this.cX + this.h, this.cY + this.a);
		vertex(this.cX, this.cY + this.a*1.5);
		vertex(this.cX - this.h, this.cY + this.a);
		vertex(this.cX, this.cY + this.a*0.5);
		endShape();
	}
	rotateCorner(cc, f1, f2, f3, c1, c2, c3){
		let aux = cc.x;
		cc.x = cc.z;
		cc.z = cc.y;
		cc.y = aux; 

		aux = f1.c;
		f1.c = f3.c;
		f3.c = f2.c;
		f2.c = aux;

		aux = c1.x;
		c1.x = c3.y;
		c3.y = c2.z;
		c2.z = aux;

		aux = c2.x;
		c2.x = c1.y;
		c1.y = c3.z;
		c3.z = aux;

		aux = c3.x;
		c3.x = c2.y;
		c2.y = c1.z;
		c1.z = aux;
	}
	moveA(){this.rotateCorner(this.aC, this.gamma, this.alpha, this.delta, 	this.eC, this.bC, this.dC);}
	moveB(){this.rotateCorner(this.bC, this.alpha, this.gamma, this.beta, 	this.aC, this.hC, this.cC);}
	moveC(){this.rotateCorner(this.cC, this.alpha, this.beta, this.epsilon, this.bC, this.gC, this.dC);}
	moveD(){this.rotateCorner(this.dC, this.epsilon, this.delta, this.alpha,this.aC, this.cC, this.fC);}
	moveE(){this.rotateCorner(this.eC, this.zeta, this.gamma, this.delta, 	this.hC, this.aC, this.fC);}
	moveF(){this.rotateCorner(this.fC, this.delta, this.epsilon, this.zeta, this.eC, this.dC, this.gC);}
	moveG(){this.rotateCorner(this.gC, this.zeta, this.epsilon, this.beta, 	this.fC, this.cC, this.hC);}
	moveH(){this.rotateCorner(this.hC, this.beta, this.gamma, this.zeta, 	this.gC, this.bC, this.eC);}
	
	rotateCornerP(cc, f1, f2, f3, c1, c2, c3){
		let aux = cc.x;
		cc.x = cc.y;
		cc.y = cc.z;
		cc.z = aux; 

		aux = f1.c;
		f1.c = f2.c;
		f2.c = f3.c;
		f3.c = aux;

		aux = c1.x;
		c1.x = c2.z;
		c2.z = c3.y;
		c3.y = aux;

		aux = c2.x;
		c2.x = c3.z;
		c3.z = c1.y;
		c1.y = aux;

		aux = c3.x;
		c3.x = c1.z;
		c1.z = c2.y;
		c2.y = aux;
	}
	moveAp(){this.rotateCornerP(this.aC, this.gamma, this.alpha, this.delta, 	this.eC, this.bC, this.dC);}
	moveBp(){this.rotateCornerP(this.bC, this.alpha, this.gamma, this.beta, 	this.aC, this.hC, this.cC);}
	moveCp(){this.rotateCornerP(this.cC, this.alpha, this.beta, this.epsilon, this.bC, this.gC, this.dC);}
	moveDp(){this.rotateCornerP(this.dC, this.epsilon, this.delta, this.alpha,this.aC, this.cC, this.fC);}
	moveEp(){this.rotateCornerP(this.eC, this.zeta, this.gamma, this.delta, 	this.hC, this.aC, this.fC);}
	moveFp(){this.rotateCornerP(this.fC, this.delta, this.epsilon, this.zeta, this.eC, this.dC, this.gC);}
	moveGp(){this.rotateCornerP(this.gC, this.zeta, this.epsilon, this.beta, 	this.fC, this.cC, this.hC);}
	moveHp(){this.rotateCornerP(this.hC, this.beta, this.gamma, this.zeta, 	this.gC, this.bC, this.eC);}
	
	twist1(c1, c2, c3, c4){
		let aux1 = c1.x;
		let aux2 = c1.y;
		let aux3 = c1.z;
		
		c1.z = c2.x;
		c1.x = c2.y;
		c1.y = c2.z;

		c2.y = c3.x; 
		c2.z = c3.y;
		c2.x = c3.z;

		c3.z = c4.x;
		c3.x = c4.y;
		c3.y = c4.z;

		c4.y = aux1;
		c4.z = aux2;
		c4.x = aux3;
	}
	twist2(c1, c2, c3, c4){
		let aux1 = c1.x;
		let aux2 = c1.y;
		let aux3 = c1.z;

		c1.x = c2.x;
		c1.y = c2.y;
		c1.z = c2.z;

		c2.x = c3.x;
		c2.y = c3.y;
		c2.z = c3.z;

		c3.x = c4.x;
		c3.y = c4.y;
		c3.z = c4.z;

		c4.x = aux1;
		c4.y = aux2;
		c4.z = aux3;
	}
	twist3(c1, c2, c3, c4){
		let aux1 = c1.x;
		let aux2 = c1.y;
		let aux3 = c1.z;
		
		c1.y = c2.x;
		c1.z = c2.y;
		c1.x = c2.z;

		c2.z = c3.x; 
		c2.x = c3.y;
		c2.y = c3.z;

		c3.y = c4.x;
		c3.z = c4.y;
		c3.x = c4.z;

		c4.z = aux1;
		c4.x = aux2;
		c4.y = aux3;
	}
	twist4(c1, c2, c3, c4){
		let aux1 = c1.x;
		let aux2 = c1.y;
		let aux3 = c1.z;

		c1.x = c2.x;
		c1.y = c2.y;
		c1.z = c2.z;

		c2.x = c3.x;
		c2.y = c3.y;
		c2.z = c3.z;

		c3.x = c4.x;
		c3.y = c4.y;
		c3.z = c4.z;

		c4.x = aux1;
		c4.y = aux2;
		c4.z = aux3;
	}
	rotateX(){
		this.twist1(this.aC, this.eC, this.fC, this.dC);
		this.twist1(this.cC, this.bC, this.hC, this.gC);

		let aux = this.zeta.c;
		this.zeta.c = this.epsilon.c;
		this.epsilon.c = this.alpha.c;
		this.alpha.c = this.gamma.c;
		this.gamma.c = aux;
	}
	rotateXp(){
		this.twist3(this.dC, this.fC, this.eC, this.aC);
		this.twist3(this.gC, this.hC, this.bC, this.cC);

		let aux = this.zeta.c;
		this.zeta.c = this.gamma.c;
		this.gamma.c = this.alpha.c;
		this.alpha.c = this.epsilon.c;
		this.epsilon.c = aux;
	}
	rotateY(){
		this.twist4(this.dC, this.cC, this.bC, this.aC);
		this.twist4(this.fC, this.gC, this.hC, this.eC);

		let aux = this.gamma.c;
		this.gamma.c = this.delta.c;
		this.delta.c = this.epsilon.c;
		this.epsilon.c = this.beta.c;
		this.beta.c = aux; 
	}
	rotateYp(){
		this.twist2(this.aC, this.bC, this.cC, this.dC);
		this.twist2(this.eC, this.hC, this.gC, this.fC);

		let aux = this.gamma.c;
		this.gamma.c = this.beta.c;
		this.beta.c = this.epsilon.c;
		this.epsilon.c = this.delta.c;
		this.delta.c = aux; 
	}
	rotateZ(){
		this.twist3(this.hC, this.eC, this.aC, this.bC);
		this.twist3(this.fC, this.dC, this.cC, this.gC);

		let aux = this.delta.c;
		this.delta.c = this.alpha.c;
		this.alpha.c = this.beta.c;
		this.beta.c = this.zeta.c;
		this.zeta.c = aux;
	}
	rotateZp(){
		this.twist1(this.bC, this.aC, this.eC, this.hC);
		this.twist1(this.gC, this.cC, this.dC, this.fC);

		let aux = this.delta.c;
		this.delta.c = this.zeta.c;
		this.zeta.c = this.beta.c;
		this.beta.c = this.alpha.c;
		this.alpha.c = aux;
	}
}