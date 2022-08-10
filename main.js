var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results [0] [0].transcript;
    console.log(Content);
    speak();
    document.getElementById("textbox").innerHTML = Content;
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    speak_data = document.getElementById("textbox").value;
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    Webcam.attach(camera);

    setTimeout (function()
        {
            take_snapshot();
            save();
        }, 5000);  
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

if(Content =="take my selfie")
{
    console.log("taking selfie ---");
    speak();
}
function take_snapshot(){
    Webcam.snap (function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image"src="'+data_uri+'">';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}


