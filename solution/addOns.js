/* template GTAT2 Game Technology & Interactive Systems - addOns */
/* Autor:  */
/* Übung Nr. */
/* Datum: */
class Point{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}

/**
 * Converts meters to pixels relative to screen width
 * @param meter 1m = 1/12 screen width
 * @returns {number}
 */
function meterToPixel(meter) {
	// Conversion rate
	const pixelsPerMeter = canvasWidth/12;

	// Calculate the equivalent number of pixels
	const pixels = meter * pixelsPerMeter;
	return pixels;
}

/**
 * Draws a rectangle relative to the zero point of the xy axis
 *
 * All parameters except colour are in meters
 * @param x
 * @param y
 * @param width
 * @param height
 * @param colour Hex RGB colour e.g #ff00ff to fill triangle
 */
function drawRectangle(zeroPoint, x, y, width, height, colour)
	{
		fill(colour);
		rectMode(CORNER);
		rect(zeroPoint.x + meterToPixel(x), zeroPoint.y - meterToPixel(y), meterToPixel(width), meterToPixel(height));
	}

/**
 * Draws a triangle relative to the zero point of the xy axis.
 *
 * All parameters except colour are in meters
 * @param x1 X coordinates of point 1
 * @param y1 Y coordinates of point 1
 * @param x2 X coordinates of point 2
 * @param y2 Y coordinates of point 2
 * @param x3 X coordinates of point 3
 * @param y3 Y coordinates of point 3
 * @param colour Hex RGB colour e.g #ff00ff to fill triangle
 */
function drawTriangle(zeroPoint, x1, y1, x2, y2, x3, y3, colour)
{
	fill(colour);
	triangle(zeroPoint.x + meterToPixel(x1),zeroPoint.y - meterToPixel(y1),
		zeroPoint.x + meterToPixel(x2),zeroPoint.y - meterToPixel(y2),
		zeroPoint.x + meterToPixel(x3),zeroPoint.y - meterToPixel(y3));
}

/**
 * Draws a line from the zero point of the axis
 * @param x destination X coordinates
 * @param y destination Y coordinates
 * @param lineThickness must call push() and pop() to constrain the thickness to the line
 */
function drawLine(zeroPoint, x, y, lineThickness){
	push();
	strokeWeight(lineThickness);
	line(zeroPoint.x,zeroPoint.y,zeroPoint.x + meterToPixel(x),zeroPoint.y - meterToPixel(y));
	pop();
}


