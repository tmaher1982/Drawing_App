// The Ellipse tool is represented by the ellipse icon in the toolbox
// After selecting this tool, when a mouse is clicked, and dragged, an ellipse is drawn form the start point where the mouse is clicked, and ends at the release pont 
// This tool draws an ellipse

function ellipseTool() {
	// Public
	// storing the icon image in a variable
	this.icon = "assets/ellipse.jpg";
	this.name = "Ellipse";

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

			// draw an ellipse between the Mouse Pressed and the current position
			else {
				// updatePixels documentation is available here https://p5js.org/reference/#/p5/updatePixels
				// Update the screen with the saved image from loadPixels();

				// This makes the ellipse transparent
				noFill();
				updatePixels();

				// Get width and height for the ellipse
				let w = abs(mouseX - startMouseX);
				let h = abs(mouseY - startMouseY);

				// Draw the ellipse
				ellipse(startMouseX, startMouseY, w * 2, h * 2);
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
