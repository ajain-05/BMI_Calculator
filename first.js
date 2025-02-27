/***** 1. Calculate direct *****/
const calculate = document.getElementById("calculate")
calculate.addEventListener("click",()=>{

    const age = document.getElementById("age")
    const gender = document.querySelectorAll("input[name='gender']")
    
    const ipt1 = document.getElementById("input1")
    const num1 = Number(ipt1.value); // feet

    const ipt2 = document.getElementById("input2")
    const num2 = Number(ipt2.value); // inches

    const ipt3 = document.getElementById("weight")
    const num3 = Number(ipt3.value); // lbs

    if (!(gender[0].checked || gender[1].checked) || ipt1.value === "" || ipt3.value === "" || age.value === "" || isNaN(num1) || isNaN(num3) || num1 <= 0 || num3 <= 0 || (ipt1.placeholder === "feet" && (isNaN(num2) || num2 <= 0))) {
        return;
    }
    

    let result; 

    if(ipt1.placeholder==="cm"){
        result = num3 / ((num1 * num1) / (100 * 100));
    }
    else{
        result = (num3*703)/(((num1*12)+num2)*((num1*12)+num2));
    }

    result = result.toFixed(2);

    let classification;
    if(result<16){
        classification = "Severe Thinness"
    }
    else if(result>=16&&result<17){
        classification = "Moderate Thinness"
    }
    else if(result>=17&&result<18.5){
        classification = "Mild Thinness"
    }
    else if(result>=18.5&&result<25){
        classification = "Normal"
    }
    else if(result>=25&&result<30){
        classification = "Overweight"
    }
    else if(result>=30&&result<35){
        classification = "Obese Class I"
    }
    else if(result>=35&&result<40){
        classification = "Obese Class II"
    }
    else{
        classification = "Obese Class III"
    }

    const re = document.getElementById("result")
    re.textContent = `Result: ${result} &  Classification: ${classification}`;
})


/***** 2. US Units *****/
const calculate2 = document.getElementById("US_Units")
calculate2.addEventListener("click",()=>{

    
    const ipt1 = document.getElementById("input1")
    // const num1 = Number(ipt1.value); // feet

    const ipt2 = document.getElementById("input2")
    // const num2 = Number(ipt2.value); // inches

    const ipt3 = document.getElementById("weight")
    // const num3 = Number(ipt3.value); // lbs

    ipt1.value = "";
    ipt3.value = "";
    ipt2.value="";

    ipt2.style.display = "inline-block";  // Show inches input when switching to US Units
    ipt1.setAttribute("placeholder", "feet");  // Set placeholder for feet
    ipt3.setAttribute("placeholder", "lbs"); 
});


/***** 3. Metric Units *****/

const calculate3 = document.getElementById("Metric_Units")
calculate3.addEventListener("click",()=>{
    const ipt2 = document.getElementById("input2")
    ipt2.style.display = "none";

   const ipt1 = document.getElementById("input1")
    ipt1.setAttribute("placeholder","cm")

    const ipt3 = document.getElementById("weight")
    ipt3.setAttribute("placeholder","kg")

    ipt1.value=""
    ipt3.value=""

});
