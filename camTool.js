// The camTool function is for the camera extension. 
// I implemented a different approach using the p5 library, than the one i originally planned to use in the midterm. The proof of concept, that I delivered in the midterm is still in the CameraPOC Folder, but integrating it with P5 was a challenge, until I found the createCapture feature in p5, so I preferred to use it instead

// To use the camTool , you will have the live feed from the camera, then click Take Photo button at the options section in the bottom of the screen



function camTool() {
    this.name = "camTool";
    this.icon = "assets/cam.png";

    var video;
    var button;
    var capturesdone = false;

    var live;

    video = createCapture(VIDEO);
    video.size(320, 320);

    button = select("#PhotoFunction");

    this.draw = function () {
        // This will create the live feed only if the capture is not done
        if (capturesdone == false) {
            live = image(video, 100, 100, 320, 320);
        }
    }

    //when the tool is deselected remove the Take Photo button from the options section
    this.unselectTool = function () {
        //clear options
        select(".options").html("");
    };

    this.populateOptions = function () {
        select(".options").html(
            "<button id='PhotoFunction'>Take Photo</button> ")

        // Event code 
        select("#PhotoFunction").mouseClicked(function () {
            button = select("#" + this.elt.id);

            // The capturedone status change will prevent the draw method from creating new video stream 
            capturesdone = true;

            // Final captured image
            image(video, 100, 100, 320, 320);
        })
    }
}