function calcBMI(){
    var weight = document.getElementById("bmi").weight.value; 
    var height = document.getElementById("bmi").height.value;
    var bmi = weight * 703 / height / height;
    var bmirounded = Math.floor(bmi * 100) / 100;
    document.getElementById("yourweight").innerHTML = weight;
    document.getElementById("yourheight").innerHTML = height;
    document.getElementById("bmiresult").innerHTML = bmirounded;
    if (weight == null || height == "") {
        document.getElementById("bmidescription").classList.remove('show');
    } else {
        document.getElementById("bmidescription").classList.add('show');
    };
    var bmihealth = "Lorem";
    if (bmirounded < 18.5) {
        var bmihealth = "Underweight";
    } else if (bmirounded < 25){
        var bmihealth = "Normal";
    } else if (bmirounded < 30){
        var bmihealth = "Overweight";
    } else if (bmirounded > 30){
        var bmihealth = "Obese";
    };
    document.getElementById("bmihealth").innerHTML = bmihealth;
}