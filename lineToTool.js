// The LineToTool is represented by the straight line icon in the toolbox
// After selecting this tool, when a mouse is clicked, and dragge, a line is drawn form the start point where the mouse is clicked, and ends at the release pont 
// This tool draws a straight line

function LineToTool() {
	// Public
	// storing the icon image in a variable
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	// Private
	// setting startMouseX with -1 to begin with and setting the drawing variable to false
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function () {

		// do the drawing if mouse if pressed
		if (mouseIsPressed) {

			// if the previous values are -1 set them to the correct mouse location and set drawing to true
			if (startMouseX == -1) {
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				// loadPixles documentation is available here https://p5js.org/reference/#/p5/loadPixels
				loadPixels(); // Save the current pixel Array
			}

			// draw a line between them and the current position
			else {
				// updatePixels documentation is available here https://p5js.org/reference/#/p5/updatePixels
				// Updaet the screen with the saved image from loadPixels();
				updatePixels();
				//draw the line
				line(startMouseX, startMouseY, mouseX, mouseY);
			}
		}

		// if the mouse isn't pressed reset the previous values to -1 and drawing to false
		else if (drawing) {
			// reset all values
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
