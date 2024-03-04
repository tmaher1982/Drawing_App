// To use the text tool after selecting from the tool box
// click anywhere on the canvas to create an input text Field
// Click inside the text field and then type the text 


// Variable for selecting font size
var fontSize;
var selectedFontSize;
var defaultSize = 30;

function textTool() {
    this.name = "textTool";
    this.icon = "assets/text.jpg";

    // Detecting the deafult canvas
    var canvas = document.getElementById("defaultCanvas0");
    var textEditor = canvas.getContext("2d");

    this.draw = function () {
        // My old code for midterm
        // if (mouseIsPressed) {
        //     textSize(30);
        //     text("this is text", mouseX, mouseY);
        // }

        if (mouseIsPressed && defaultSize == '30') {

            textInput = false;

            canvas.onclick = function (e) {
                if (textInput) return;
                writeText(e.clientX, e.clientY);
                textEditor.fontSize = defaultSize;
                textEditor.font = 'italic  Arial';
            }

        }
    }
}

function writeText(x, y) {
    var input = document.createElement('input');

    input.type = 'text';

    // text position
    input.style.position = 'fixed';
    input.style.left = (x - 5) + 'px';
    input.style.top = (y - 5) + 'px';

    document.body.appendChild(input);

    input.focus;
    input.font = 'italix 30px Arial';

    textInput = true;
}

//Handle leaving the text tool
this.unselectTool = function () {
    updatePixels();

    select(".options").html("");
}
