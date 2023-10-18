/* template GTAT2 Game Technology & Interactive Systems - addOns */
/* Autor:  */
/* Übung Nr. */
/* Datum: */

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
 * Draws a rectangle relative to a starting point with coordinates (x,y)
 *
 * All parameters except colour are in meters
 * @param x
 * @param y
 * @param width
 * @param height
 * @param colour Hex RGB colour e.g #ff00ff to fill triangle
 */
function drawRectangle(x, y, width, height, colour)
	{
		fill(colour);
		rectMode(CORNER);
		rect(meterToPixel(x), meterToPixel(y), meterToPixel(width), meterToPixel(height));
	}

/**
 * Draws a triangle (improved upon original function by allowing customer colour fill)
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
function drawTriangle(x1, y1, x2, y2, x3, y3, colour)
{
	fill(colour);
	triangle(meterToPixel(x1),meterToPixel(y1),meterToPixel(x2),meterToPixel(y2),meterToPixel(x3),meterToPixel(y3));
}

/**
 * Draws a line (improved upon original function by allowing the adjustment of line thickness).
 * All parameters except colour are in meters
 *
 *
 * NOTE: push() and pop() must be called at the start and end of the method to ensure strokeWeight()
 * only changes the line thickness and not the thickness of EVERY line in the sketch
 * @param x1 X coordinates of point 1
 * @param y1 Y coordinates of point 1
 * @param x2 X coordinates of point 2
 * @param y2 Y coordinates of point 2
 * @param lineThickness Thickness of the line
 */
function drawLine(x1, y1, x2, y2, lineThickness){
	push();
	strokeWeight(lineThickness);
	line(meterToPixel(x1),meterToPixel(y1),meterToPixel(x2),meterToPixel(y2));
	pop();
}


