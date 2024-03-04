// stampTool constructor function

function stampTool() {
    this.name = "stampTool";
    this.icon = "assets/star.png";

    // Will use unicdoe instead
    // var stamp = loadImage('assets/star.png');

    // To draw the emoji , the value should NOT have the &# part
    // Default unicode for the star is 127775	
    // Default unicode for the checkmark is 10004

    var starSelected = false;

    var emojiStamp;
    var stampSize;

    this.draw = function () {

        var stampSizeSlider = document.getElementById("stampSize");
        stampSize = stampSizeSlider.value;
        if (starSelected) {
            emojiStamp = 127775;
        }
        else {
            emojiStamp = 10004;
        }

        if (mouseIsPressed && (mouseY < canvas.height - 50)) {
            textSize(stampSize);

            // This solves the bug that when the slider is dragged, it creates new image and changes its size. 
            if (mouseIsPressed && (mouseY < canvas.height - 50)) {
                text(String.fromCodePoint(emojiStamp), mouseX, mouseY);
            }
        }
    }

    this.populateOptions = function () {

        //Notes:-
        // To show the emoji, need &# before the unicode number
        // This adds a slider for the stamp size

        select(".options").html(
            "<input type='range' min='20' max = '200' value='5' class='slider' id='stampSize'> <button id='checkmark'>&#10004</button> <button id='star'>&#127775</button> ");


        select("#checkmark").mouseClicked(function () {
            var emoji = select("#" + this.elt.id);
            if (starSelected) {
                starSelected = false;

            }
        });

        select("#star").mouseClicked(function () {
            var emoji = select("#" + this.elt.id);

            if (!starSelected) {
                starSelected = true;

            }
        });
    }

}