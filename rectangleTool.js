// The ellipse tool is represented by the rectangle icon in the toolbox
// After selecting this tool, when a mouse is clicked, and dragged, a rectangle is drawn form the start point where the mouse is clicked, and ends at the release pont 
// This tool draws a rectangle

function rectangleTool() {
	// Public
	// storing the icon image in a variable
	this.icon = "assets/rectangle.jpg";
	this.name = "Rectangle";

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

			// draw a rectangle between the Mouse Pressed and the current position
			else {
				// updatePixels documentation is available here https://p5js.org/reference/#/p5/updatePixels
				// Update the screen with the saved image from loadPixels();

				// This makes the rectangle transparent
				noFill();
				updatePixels();

				// Get width and height for the rectangle
				let w = mouseX - startMouseX;
				let h = mouseY - startMouseY;

				// Draw the rectangle
				rect(startMouseX, startMouseY, w, h);
			}
		}

		// if the mouse isn't pressed reset the previous values to -1 and drawing to false
		else if (drawing) {
			loadPixels();
			// reset all values
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}
