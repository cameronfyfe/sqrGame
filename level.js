var numberOfLevels = 9;

var blockMap = new Array(numberOfLevels);
var tempMap = new Array(numberOfLevels);
var mapN = new Array(numberOfLevels);
var mapM = new Array(numberOfLevels);
var xStart = new Array(numberOfLevels);
var yStart = new Array(numberOfLevels);
var xGoal = new Array(numberOfLevels);
var yGoal = new Array(numberOfLevels);
var horiSlider = new Array(numberOfLevels);
var horiSliderRight = new Array(numberOfLevels);
var xHoriSlider = new Array(numberOfLevels);
var yHoriSlider = new Array(numberOfLevels);
var max_num_of_sliders = 10;
for (var i=0; i<numberOfLevels; i++) {
	blockMap[i] = new Array(16);
	tempMap[i] = new Array(16);
	xHoriSlider[i] = new Array(max_num_of_sliders);
	yHoriSlider[i] = new Array(max_num_of_sliders);
	horiSliderRight[i] = new Array(max_num_of_sliders);
	for (var j=0; j<16; j++) {
		tempMap[i][j] = new Array(16);
	}
}

var k = 0;
mapN[k] = 6;
mapM[k] = 6;
xStart[k] = 2;
yStart[k] = 3;
xGoal[k] = 1;
yGoal[k] = 1;

horiSlider[k] = 4;
horiSliderRight[k][0] = 1;
horiSliderRight[k][1] = 1;
horiSliderRight[k][2] = 1;
horiSliderRight[k][3] = 1;
xHoriSlider[k][0] = 4;
yHoriSlider[k][0] = 1;
xHoriSlider[k][1] = 4;
yHoriSlider[k][1] = 2;
xHoriSlider[k][2] = 4;
yHoriSlider[k][2] = 3;
xHoriSlider[k][3] = 4;
yHoriSlider[k][3] = 4;

blockMap[k] = [	'OOOOOO',
				'O    O',
				'O    O',
				'O    O',
				'O    O',
				'OOOOOO'];	
var k = 1;
mapN[k] = 6;
mapM[k] = 6;
xStart[k] = 4;
yStart[k] = 4;
xGoal[k] = 4;
yGoal[k] = 2;
horiSlider[k] = 0;
blockMap[k] = [	'OOOOOO',
				'OO   O',
				'O    O',
				'O    O',
				'OOO  O',
				'OOOOOO'];
k = 2;				
mapN[k] = 12;
mapM[k] = 12;
xStart[k] = 5;
yStart[k] = 3;
xGoal[k] = 6;
yGoal[k] = 3;
horiSlider[k] = 0;
blockMap[k] = [	'OOOOOOOOOOOO',
				'OOOOOOOOOOOO',
				'OOO  ][  OOO',
				'OO  _JL_ OOO',
				'OO  -TF-  OO',
				'OO   ][   OO',
				'OO        OO',
				'OOO      OOO',
				'OOOO    OOOO',
				'OOOOOOOOOOOO',
				'OOOOOOOOOOOO',
				'OOOOOOOOOOOO'];
k = 3;			
mapN[k] = 12;
mapM[k] = 12;
xStart[k] = 1;
yStart[k] = 5;
xGoal[k] = 5;
yGoal[k] = 1;
horiSlider[k] = 0;
blockMap[k] = [	'OOOOOOOOOOOO',
				'OOOOO OOOOOO',
				'OOOO   OOOOO',
				'OOO     OOOO',
				'OO       OOO',
				'O         OO',
				'OO        OO',
				'OOO      OOO',
				'OOOO    OOOO',
				'OOOOO  OOOOO',
				'OOOOOOOOOOOO',
				'OOOOOOOOOOOO'];

var k = 4;
mapN[k] = 6;
mapM[k] = 6;
xStart[k] = 1;
yStart[k] = 1;
xGoal[k] = 2;
yGoal[k] = 1;
horiSlider[k] = 1;
horiSliderRight[k][0] = 0;
xHoriSlider[k][0] = 4;
yHoriSlider[k][0] = 4;
blockMap[k] = [	'OOOOOO',
				'O    O',
				'O   OO',
				'OO   O',
				'O    O',
				'OOOOOO'];
k = 5;			
mapN[k] = 12;
mapM[k] = 12;
xStart[k] = 3;
yStart[k] = 2;
xGoal[k] = 4;
yGoal[k] = 5;
horiSlider[k] = 1;
horiSliderRight[k][0] = 1;
xHoriSlider[k][0] = 2;
yHoriSlider[k][0] = 9;
blockMap[k] = [	'OOOOOOOOOOOO',
				'OOOOOOOOOOOO',
				'OO        OO',
				'OO        OO',
				'OO  O     OO',
				'OO O O    OO',
				'OO        OO',
				'OOO       OO',
				'OOO      OOO',
				'OO        OO',
				'OOOOOOOOOOOO',
				'OOOOOOOOOOOO'];
k = 6;			
mapN[k] = 12;
mapM[k] = 12;
xStart[k] = 0;
yStart[k] = 1;
xGoal[k] = 9;
yGoal[k] = 0;
horiSlider[k] = 0;
blockMap[k] = [	'O  OOO  O O ',
				'            ',
				'O     O     ',
				' O         O',
				' O      O   ',
				'      OO O  ',
				'          O ',
				'   O      O ',
				'O      O O  ',
				'  O         ',
				'    O     O ',
				'           O'];

k = 7;
mapN[k] = 10;
mapM[k] = 10;
xStart[k] = 0;
yStart[k] = 0;
xGoal[k] = 1;
yGoal[k] = 1;
horiSlider[k] = 0;
blockMap[k] = [' _  ]|[ _ ',
               ']F  ][  T[',
               '          ',
               '_        _',
               '-   JL ][-',
               '  ][TF  _ ',
               '   _    T[',
               '   T[  _  ',
               ']L     -J[',
               ' -      - '];

k = 8;							
mapN[k] = 16;
mapM[k] = 16;
xStart[k] = 2;
yStart[k] = 12;
xGoal[k] = 4;
yGoal[k] = 12;
horiSlider[k] = 0;
blockMap[k] = [	'OOOOOOOOOOOOOOOO',
				'OO        _    O',
				'O  ][     -_   O',
				'O   ][     -   O',
				'O ][ _    J[_  O',
				'O   ]F __ - T[ O',
				'O     ]FT[     O',
				'O            _ O',
				'O][    ][    - O',
				'O      OO   _  O',
				'O][_     ][ -][O',
				'O  -           O',
				'O _ _     ][ _ O',
				'O -]F _  __  - O',
				'O   ][-  --  OOO',
				'OOOOOOOOOOOOOOOO'];

class Level {
	constructor(index, N, M, xPlayer, yPlayer, xGoal, yGoal, numOfHorizontalSliders) {
		this.index = index;
		this.N = N;
		this.M = M;
		this.xPlayer = xPlayer;
		this.yPlayer = yPlayer;
		this.xGoal = xGoal;
		this.yGoal = yGoal;
		this.numOfHorizontalSliders = numOfHorizontalSliders;
	}
}


function getLevel(i) {

	level = new Level(i, mapN[i], mapM[i], xStart[i], yStart[i], xGoal[i], yGoal[i], horiSlider[i]);
	
	return level;
}