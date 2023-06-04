const video = document.getElementById("videoElement")
const constraints = {
    audio: false,
    video: 
    {
        width: 400,
        height: 300,
        facingMode: { exact: "environment" }
        /*deviceId: deviceId ? { exact: deviceId } : undefined*/
        /*facingMode: front ? "user" : "environment" */
        /*frameRate: { ideal: 10, max: 15}*/
    }
};

const result = document.getElementById("result");
const supported = navigator.mediaDevices.getSupportedConstraints().facingMode;
result.textContent = supported ? "Supported!" : "Not supported!";

navigator.mediaDevices
    .getUserMedia(constraints)
    .then(
        (stream) => {
            video.srcObject = stream;
            console.log(stream)
        }
    )
    .catch((error) => {
        console.log(error);
    })

document.getElementById("takeSnapshot").addEventListener("click", () => {
    takePicture();
})

const canvas = document.getElementById("canvasElement")

function takePicture() {
    //const canvas = document.getElementById("canvasElement")
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

}
