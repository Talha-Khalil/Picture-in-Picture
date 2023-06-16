const videoElement = document.getElementById('video');
const button = document.getElementById('button');
// Pass media stream to video element and play
async function selectMediaStream(){
    try {
        const medaiStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = medaiStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        
    }
}
// On load
button.addEventListener('click' , async () =>{
    // disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});
selectMediaStream();