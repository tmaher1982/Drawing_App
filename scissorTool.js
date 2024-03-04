// The Scissor tool is represented by the Scissor icon in the toolbox
// After selecting this tool, the tool has three modes and a button at the bottom of the screen:-
//First mode: the user can use free draw
//Second Mode: click the button , and drag a square for the area to cut
// Third mode: click the button , and start pasting the cut area somewhere else
// when clicking "End Paste" : user is back to draw mode and can select another tool


// *** THE SCISSOR TOOL IS NOT FULLY INTEGRATED WITH THE DRAW APP For a bug I couldn't fix*** 

// Private
var canvas;
var selectMode;
var selectedArea;


var selectButton;
var selectedPixles;

function scissorTool() {
    // Public
    // storing the icon image in a variable
    this.icon = "assets/scissor.jpg";
    this.name = "Scissor";

    background(200);
    noFill();
    stroke(0);

    //console.log("setup called");
    selectMode = 0;
    selectedArea = { x: 0, y: 0, w: 100, h: 100 }

    selectButton = createButton('Select area');
    selectButton = select("#scissorFunction");

    this.draw = function () {

        if (mouseIsPressed) {

            if (selectMode == 0) {
                //check if they previousX and Y are -1. set them to the current
                //mouse X and Y if they are.
                if (previousMouseX == -1) {
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
                //if we already have values for previousX and Y we can draw a line from 
                //there to the current mouse location
                else {
                    stroke(0);
                    noFill();
                    line(previousMouseX, previousMouseY, mouseX, mouseY);
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
            }

            else if (selectMode == 1) {
                updatePixels();

                noStroke();
                fill(255, 0, 0, 100);
                rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
                console.log("the rect thing");
            }
        }
        else {
            //if the user has released the mouse we want to set the previousMouse values 
            //back to -1.
            previousMouseX = -1;
            previousMouseY = -1;
        }
    };


    //adds a button and click handler to the options area. When clicked
    //toggle select area, cut and end paste
    this.populateOptions = function () {
        select(".options").html(
            "<button id='scissorFunction'>Select Area</button>");

        //event code will go here 
        select("#scissorFunction").mouseClicked(function () { // mouseClicked occurs when the user presses and releases the mouse button
            console.log("button pressed");

            selectButton = select("#" + this.elt.id);

            // selectMode = 1; // Starting with selectMode 1 
            if (selectMode == 0) {
                selectMode += 1;
                selectButton.html("cut");
                loadPixels(); //store current frame

            }
            else if (selectMode == 1) {
                selectMode += 1;
                selectButton.html("end paste");

                //refresh the screen
                updatePixels();

                //store the pixels
                selectedPixles = get(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);

                //draw a rectangle over it
                fill(255);
                noStroke();
                rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
            }
            else if (selectMode == 2) {
                selectMode = 0;
                loadPixels();
                selectedArea = { x: 0, y: 0, w: 100, h: 100 };
                selectButton.html("select area");
            }
        });
    }
}

function mousePressed() {
    if (selectMode == 1) {
        selectedArea.x = mouseX;
        selectedArea.y = mouseY;
    }
    else if (selectMode == 2) {
        image(selectedPixles, mouseX, mouseY);
    }
}

function mouseDragged() {
    if (selectMode == 1) {
        var w = mouseX - selectedArea.x;
        var h = mouseY - selectedArea.y;

        selectedArea.w = w;
        selectedArea.h = h;
        console.log("Dragged");
        // console.log(selectedArea);
    }
}
