

const wall_thickness = 1/24;
const EDGE_THICKNESS = wall_thickness/2;
const mainFrac = EDGE_THICKNESS*3;
const goalFrac = EDGE_THICKNESS*2;

class Sqr {
	constructor(x, y, color, cell_pad, radius) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.cell_pad = cell_pad;
		this.radius = radius;
	}

	draw() {
		ctx.fillStyle = this.color;
		var x_left = (this.x+this.cell_pad)*cellWidth;
		var y_top = (this.y+this.cell_pad)*cellHeight;
		var width = (1-2*this.cell_pad)*cellWidth;
		var height = (1-2*this.cell_pad)*cellHeight;
		roundRect(ctx,x_left,y_top,width,height,this.radius);
	}
	
	drawMove(x_old, y_old) {
		ctx.fillStyle = this.color;
		var x_left = (Math.min(this.x, x_old)+this.cell_pad)*cellWidth;
		var width = (Math.abs(this.x - x_old)+1-2*this.cell_pad)*cellWidth;
		var y_top = (Math.min(this.y, y_old)+this.cell_pad)*cellHeight;
		var height = (Math.abs(this.y - y_old)+1-2*this.cell_pad)*cellHeight;
		roundRect(ctx,x_left,y_top,width,height,this.radius);
	}
	
	moveLeft() {
		if (this.x === 0) {
			return;
		}
		var x_old = this.x;
		var y_old = this.y;
		var cellToLeft = block[this.x-1][this.y];
		var tempToLeft = tempMap[currentLevel][this.x-1][this.y];
		
		while (isCellBlockedOnRight(cellToLeft, tempToLeft) == false) {
			this.x--;
			if (this.x === 0) {
				break;
			}
			cellToLeft = block[this.x-1][this.y];
			tempToLeft = tempMap[currentLevel][this.x-1][this.y];
		}
		
		tempMap[currentLevel][x_old][y_old] = ' ';
		tempMap[currentLevel][this.x][this.y] = '@';
		this.drawMove(x_old, y_old);
	}
	
	moveRight() {
		if (this.x === level.N-1) {
			return;
		}
		var x_old = this.x;
		var y_old = this.y;
		var cellToRight = block[this.x+1][this.y];
		var tempToRight = tempMap[currentLevel][this.x+1][this.y];
		
		while (isCellBlockedOnLeft(cellToRight, tempToRight) == false) {
			this.x++;
			if (this.x === level.N-1) {
				break;
			}
			cellToRight = block[this.x+1][this.y];
			tempToRight = tempMap[currentLevel][this.x+1][this.y];
		}
		
		tempMap[currentLevel][x_old][y_old] = ' ';
		tempMap[currentLevel][this.x][this.y] = '@';
		this.drawMove(x_old, y_old);
	}
	
	moveUp() {
		if (this.y === 0) {
			return;
		}
		var x_old = this.x;
		var y_old = this.y;
		var cellAbove = block[this.x][this.y-1];
		var tempAbove = tempMap[currentLevel][this.x][this.y-1];
		var tempHere = tempMap[currentLevel][this.x][this.y];
		
		while (isCellBlockedOnBottom(cellAbove, tempAbove, tempHere) == false) {
			this.y--;
			if (this.y === 0) {
				break;
			}
			cellAbove = block[this.x][this.y-1];
			tempAbove = tempMap[currentLevel][this.x][this.y-1];
		}
		
		tempMap[currentLevel][x_old][y_old] = ' ';
		tempMap[currentLevel][this.x][this.y] = '@';
		this.drawMove(x_old, y_old);
	}
	
	moveDown() {
		if (this.y === level.M-1) {
			return;
		}
		var x_old = this.x;
		var y_old = this.y;
		var cellBelow = block[this.x][this.y+1];
		var tempBelow = tempMap[currentLevel][this.x][this.y+1];
		
		while (isCellBlockedOnTop(cellBelow, tempBelow) == false) {
			this.y++;
			if (this.y === level.M-1) {
				break;
			}
			cellBelow = block[this.x][this.y+1];
			tempBelow = tempMap[currentLevel][this.x][this.y+1];
		}
		
		tempMap[currentLevel][x_old][y_old] = ' ';
		tempMap[currentLevel][this.x][this.y] = '@';
		this.drawMove(x_old, y_old);
	}
}


class GoalSqr extends Sqr {
	constructor(x, y) {
		super(x, y, 'white', goalFrac, cellHeight/5);
	}
}


class PlayerSqr extends Sqr {
	constructor(x, y) {
		super(x, y, 'green', mainFrac, cellHeight/5);
	}
}


class HorizontalSliderSqr extends Sqr {
	constructor(x, y, start_direction) {
		super(x, y, 'orange', mainFrac, cellHeight/5);
		this.nextDirection = start_direction;
	}
	draw() {
		super.draw();
		
		this.drawArrow(this.x, this.x);
	}
	
	move() {
		var xx = this.x;
		var yy = this.y;
		// TODO: add code to prevent trying to move slider in direction it can't move
		if (this.nextDirection == 1) {
			this.moveRight();
			this.nextDirection = 0;
		}
		else {
			this.moveLeft();
			this.nextDirection = 1;
		}
		
		this.drawArrow(Math.min(this.x, xx), Math.max(this.x, xx))
	}
	
	drawArrow(x_left, x_right) {
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo((x_left+1/4)*cellWidth,(this.y+1/2)*cellHeight);
		ctx.lineTo((x_right+3/4)*cellWidth,(this.y+1/2)*cellHeight);
		ctx.moveTo((x_right+5/8)*cellWidth,(this.y+3/8)*cellHeight);
		ctx.lineTo((x_right+3/4)*cellWidth,(this.y+1/2)*cellHeight);
		ctx.lineTo((x_right+5/8)*cellWidth,(this.y+5/8)*cellHeight);
		ctx.moveTo((x_left+3/8)*cellWidth,(this.y+3/8)*cellHeight);
		ctx.lineTo((x_left+1/4)*cellWidth,(this.y+1/2)*cellHeight);
		ctx.lineTo((x_left+3/8)*cellWidth,(this.y+5/8)*cellHeight);
		ctx.stroke();	
	}
}


class HorizontalSliderWall extends HorizontalSliderSqr {
	constructor(x, y, start_direction, shape) {
		super(x, y, start_direction);
		this.bodyColor = 'powderblue';
		this.borderColor = 'blue';
		this.shape = shape;
	}
	draw() {
		ctx.fillStyle = this.borderColor;
		var b = this.shape;
		//Bottom
		if (b == '_' || b == 'L' || b === 'J' || b == '=' || b == 'U' || b == '<' || b == '>') {
			ctx.fillRect((this.x-EDGE_THICKNESS)*cellWidth,(this.y+1-EDGE_THICKNESS)*cellHeight,(1+2*EDGE_THICKNESS)*cellWidth,EDGE_THICKNESS*cellHeight);
		}
		//Top
		if (b == '-' || b == 'F' || b === 'T' || b == '=' || b == '^' || b == '<' || b == '>') {
			ctx.fillRect((this.x-EDGE_THICKNESS)*cellWidth,this.y*cellHeight,(1+2*EDGE_THICKNESS)*cellWidth,EDGE_THICKNESS*cellHeight);
		}
		//Left
		if (b == '[' || b == 'F' || b === 'L' || b == '|' || b == '^' || b == '<' || b == 'U') {
			ctx.fillRect((this.x+EDGE_THICKNESS)*cellWidth,(this.y+EDGE_THICKNESS)*cellHeight,(this.cell_pad-EDGE_THICKNESS)*cellWidth,(1-2*EDGE_THICKNESS)*cellHeight);
		}
		//Right
		if (b == ']' || b == 'T' || b === 'J' || b == '|' || b == '^' || b == '>' || b == 'U') {
			ctx.fillRect((this.x+1-EDGE_THICKNESS)*cellWidth,this.y*cellHeight,cellWidth*EDGE_THICKNESS,cellHeight);
		}
		this.drawArrow(this.x, this.x);
	}
	
	move() {
		super.move();
		tempMap[currentLevel][this.x][this.y] = this.shape;
	}

}

function roundRect(ctx, x, y, width, height, radius) {

	if (typeof radius === 'undefined') {
		radius = 5;
	}
	if (typeof radius === 'number') {
		radius = {tl: radius, tr: radius, br: radius, bl: radius};
	} else {
		var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
		for (var side in defaultRadius) {
			radius[side] = radius[side] || defaultRadius[side];
		}
	}
	ctx.beginPath();
	ctx.moveTo(x + radius.tl, y);
	ctx.lineTo(x + width - radius.tr, y);
	ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
	ctx.lineTo(x + width, y + height - radius.br);
	ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
	ctx.lineTo(x + radius.bl, y + height);
	ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
	ctx.lineTo(x, y + radius.tl);
	ctx.quadraticCurveTo(x, y, x + radius.tl, y);
	ctx.closePath();
	ctx.fill();
}


function isCellBlockedOnRight(b, bT) {
	if (b != 'O' && b != ']' && b != 'T' && b != 'J' && b != '|' && b != '^' && b != '>' && b != 'U' && bT != '@') {
		return false;
	}
	else {
		return true;
	}
}

function isCellBlockedOnLeft(b, bT) {
	if (b != 'O' && b != '[' && b != 'F' && b != 'L' && b != '|' && b != '^' && b != '<' && b != 'U' && bT != '@') {
		return false;
	}
	else {
		return true;
	}
}

function isCellBlockedOnBottom(b, bT, t) {
	if (b != 'O' && b != '_' && b != 'L' && b != 'J' && b != '=' && b != 'U' && b != '<' && b != '>' && bT != '@' && t != '-' && t != 'F' && t != 'T' && t != '=' && t != '^' && t != '<' && t != '>') {
		return false;
	}
	else {
		return true;
	}
}

function isCellBlockedOnTop(b, bT) {
	if (b != 'O' && b != '-' && b != 'F' && b != 'T' && b != '=' && b != '^' && b != '<' && b != '>' && bT != '@') {
		return false;
	}
	else {
		return true;
	}
}

