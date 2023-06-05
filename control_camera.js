const video = document.getElementById("videoElement")
const canvas = document.getElementById("canvasElement")

var images_evidencia = new Array();

const result = document.getElementById("result");
const supported = navigator.mediaDevices.getSupportedConstraints().facingMode;
result.textContent = supported ? "Supported!" : "Not supported!";

let front = false;
function cambiar_lado_camara() {
    document.getElementById("flip-button").
        front = !front;
}

const constraints = {
    audio: false,
    video: 
    {
        width: 500,
        height: 300,
        facingMode: { exact: "environment" }
        /*deviceId: deviceId ? { exact: deviceId } : undefined*/
        /*facingMode: front ? "user" : "environment" */
        /*frameRate: { ideal: 10, max: 15}*/
    }
};

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

function takePicture() {
    //const canvas = document.getElementById("canvasElement")
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, video.videoWidth/2, video.videoHeight/2);
    
    images_evidencia.push(ctx);    

    let i = images_evidencia.length;
    console.log(i);
    console.log(canvas.width);
    console.log(canvas.height);   
}
