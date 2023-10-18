/* template GTAT2 Game Technology & Interactive Systems */
/* Autor: Nam */
/* Übung Nr. 1*/
/* Datum: 11/10/2023 */



/* declarations */ 
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;


/* prepare program */
function setup() {								
  createCanvas(windowWidth, windowHeight);
}

/* run program */
function draw() {									
background(255);

/* administration */
	fill(0);
    strokeWeight(3);
	text("this is an example", 200, 50);
	
/* calculation */

/* display */

    /* Draw golf course*/
    drawRectangle(1,4.5,7.5,0.5,'#729fcf');
    drawRectangle(8.5,4.75,0.25,0.25,'#729fcf');
    drawRectangle(8.75,4.5,2.25,0.5,'#729fcf');

    /* Draw landing ramp*/
    drawTriangle(10, 4.5, 11, 4.5, 11, 4, '#729fcf');

    /* Draw gray collision wall*/
    drawRectangle(11,1,0.5,4,'#cfcfcf');

    /* Draw flagpole + flag*/
    drawRectangle(9,2.5,0.1,2,'#000000');
    drawTriangle(9.1, 2.5, 9.1, 2.9, 9.8, 2.7, '#ffff00');

    /* Draw launchpad*/
    drawLine(1, 4.5, 2.4, 4, 7);
}

/* isr */
function windowResized() {						/* responsive design */
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
}
