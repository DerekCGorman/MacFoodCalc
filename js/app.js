function calculate(){
    servingSizeVal = document.getElementById('sSize').value;
    servingSizeVal2 = document.getElementById('sSize2').value;
    caloriesVal = document.getElementById('cals').value;
    fatVal = document.getElementById('fat').value;
    carbVal = document.getElementById('carb').value;
    proteinVal = document.getElementById('protein').value;

    calHead = document.getElementById('calDat')
    fatHead = document.getElementById('fatDat')
    carbHead = document.getElementById('carbDat')
    proHead = document.getElementById('proDat')

    if(caloriesVal && fatVal && carbVal && proteinVal){
        calories = (servingSizeVal2*caloriesVal) / servingSizeVal
        fat = (servingSizeVal2*fatVal) / servingSizeVal
        carb = (servingSizeVal2*carbVal) / servingSizeVal
        protein = (servingSizeVal2*proteinVal) / servingSizeVal

        calHead.innerHTML = `Calories: ${calories.toFixed(1)}`;
        fatHead.innerHTML = `Fat: ${fat.toFixed(1)}`;
        carbHead.innerHTML = `Carbs ${carb.toFixed(1)}`;
        proHead.innerHTML = `Protein ${protein.toFixed(1)}`;
    }
    else{
        console.log("PLEASE ENTER ALL VALUES")
    }

}
