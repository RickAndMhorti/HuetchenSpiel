/* template GTAT2 Game Technology & Interactive Systems */
/* Autor: Nam */
/* Übung Nr. 2*/
/* Datum: 18/10/2023 */

/**
 * All methods are packed in addOns.js
 */

/* declarations */ 
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

/* set resolution (16:9) */
canvasHeight = (9*canvasWidth)/16;

/* prepare program */
function setup() {								
  createCanvas(windowWidth, windowHeight);
}

/* run program */
function draw() {									
background(255);

/* administration */
	fill(0);
    strokeWeight(1);
	text("this is an example", 200, 50);

    /* calculation */
    const lightBlue = '#729fcf';

    /* Point(0,0) of the xy axis, calculated relative to the screen size in meters */
    const zeroPoint = new Point(meterToPixel(1), meterToPixel(4.5));

    /* display */

    /* Draw golf course*/
    drawRectangle(zeroPoint, 0,0,7.5,0.5,lightBlue);
    drawRectangle(zeroPoint, 7.5,-0.25,0.25,0.25,lightBlue);
    drawRectangle(zeroPoint, 7.75,0,2.25,0.5,lightBlue);

    /* Draw landing ramp*/
    drawTriangle(zeroPoint, 9, 0, 10, 0, 10, 0.5, lightBlue);

    /* Draw gray collision wall*/
    drawRectangle(zeroPoint, 10,3.5,0.5,4,'#cfcfcf');

    /* Draw flagpole + yellow flag*/
    drawRectangle(zeroPoint, 8.08,2,0.02,2,'#000000');
    drawTriangle(zeroPoint, 8.1, 2, 8.1, 1.6, 8.8, 1.8, '#ffff00');

    /* Draw launchpad*/
    drawLine(zeroPoint, 0.87, 0.5, 7);
}

/* isr */
function windowResized() {						/* responsive design */
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
}
