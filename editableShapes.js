// Editable shapes now working after fixing the integration bug from the midterm


function editableShapes() {
    //set an icon and a name for the object
    this.icon = "assets/editableShapes.png";
    this.name = "editableShapes";


    var editButton = document.getElementById("editButton");
    var finishButton = document.getElementById("finishButton");

    var editMode = false;
    var currentShape = [];

    var c = canvasContainer;

    this.draw = function () {
        updatePixels();
        noFill();
        if (mousePressOnCanvas(c) && mouseIsPressed) {
            if (!editMode) {
                currentShape.push({
                    x: mouseX,
                    y: mouseY
                });
            }
            else {
                for (var i = 0; i < currentShape.length; i++) {
                    if (dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15) {
                        currentShape[i].x = mouseX;
                        currentShape[i].y = mouseY;
                    }
                }
            }
        }

        beginShape();
        for (var i = 0; i < currentShape.length; i++) {
            vertex(currentShape[i].x, currentShape[i].y);
            if (editMode) {
                fill('red');
                ellipse(currentShape[i].x,
                    currentShape[i].y, 10);
                noFill();
            }
        }
        endShape();
    }

    function mousePressOnCanvas(canvas) {
        if (mouseX > canvas.elt.offsetLeft &&
            mouseX < (canvas.elt.offsetLeft + canvas.width) &&
            mouseY > canvas.elt.offsetTop &&
            mouseY < (canvas.elt.offsetTop + canvas.height - 50) // I subtracted 50 to handle the issue of the mouse outside the canvas
        ) {
            return true;
        }
        return false;
    }

    //when the tool is deselected remove the Take editable shapes buttons from the options section
    this.unselectTool = function () {
        //clear options
        select(".options").html("");
    };

    this.populateOptions = function () {
        select(".options").html(
            "<button id='editButton'>Edit Shape</button> <button id='finishButton'>Finish Shape</button>");

        // click handler
        select("#editButton").mouseClicked(function () {
            var button = select("#" + this.elt.id);

            if (editMode) {
                editMode = false;
                button.html("Edit Shape");
            }
            else {
                editMode = true;
                button.html("add vertices");
            }
        });

        select("#finishButton").mouseClicked(function () {
            var button = select("#" + this.elt.id);
            editMode = false;
            draw();
            loadPixels();
            currentShape = [];
        });
    };
}