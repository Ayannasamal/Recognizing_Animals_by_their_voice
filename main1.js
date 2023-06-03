function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ndgAVuTUU/model.json',modelready)
}

function modelready(){
    classifier.classify(gotResults) 
}

function gotResults(error,results){
    if (error){
        console.error(error)
    } else{
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        console.log(results)

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    }
    image = document.getElementById("image");
    if(results[0].label == "Barking"){
        image.src="dog.png";
    }
    else if(results[0].label == "Meowing"){
        image.src="cat.png"
    }
    else if(results[0].label == "Mooing"){
        image.src="cow.png";
    }
    else if(results[0].label == "Roar"){
        image.src="lion.png";
    }
    else{
        image.src="ear.png";
    }
}

    

