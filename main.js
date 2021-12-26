Webcam.set({


    width: 360,
    height: 400,
    image_format:'png',
    png_quality:100
});
var camera=document.getElementById("camera");

Webcam.attach( '#camera');


function take_snapshot() {
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML ="<img id='img' src='"+data_uri+"'/>";

    });

}




console.log('ml5 version :', ml5.version);




classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gg3Wz4V81/model.json',modelLoaded);



function modelLoaded() {
    console.log('modelLoaded');
}






function check() {
    img=document.getElementById('img');
    classifier.classify(img, gotResult);
}





function gotResult(error, results) {
if (error) {
    console.error(error);
} else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);
    
}    
}