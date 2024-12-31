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

    if(!(gender[0].checked || gender[1].checked)||ipt1.value === ""||ipt2.value === ""||ipt3.value === ""||age.value===""||isNaN(num1)||isNaN(num2)||isNaN(num3)||num1<=0||num2<=0||num3<=0){
        return;
    } 

    let result; 

    if(ipt1.placeholder==="cm"){
        result =  num3/((num1*num1)/(100*100));
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

const calculate2 = document.getElementById("US_Units")
calculate2.addEventListener("click",()=>{
    const ipt1 = document.getElementById("input1")
    const ipt2 = document.getElementById("input2")
    const ipt3 = document.getElementById("weight")
    const resultDisplay = document.getElementById("result")
    const age1 = document.getElementById("age")
    const gender = document.querySelectorAll("input[name='gender']")
    gender.forEach(button=>button.checked=false)
    age1.value = ""
    ipt1.value = ""
    ipt2.value = ""
    ipt3.value = ""
    resultDisplay.textContent = ""
    ipt2.style.display = "inline-block";  // Show inches input when switching to US Units
    ipt1.setAttribute("placeholder", "feet");  // Set placeholder for feet
    ipt3.setAttribute("placeholder", "lbs"); // set placeholder for lbs
});

/***** 3. Metric Units *****/

const calculate3 = document.getElementById("Metric_Units")
calculate3.addEventListener("click",()=>{
    let ipt2 = document.getElementById("input2")
    ipt2.style.display = "none";

    let ipt1 = document.getElementById("input1")
    ipt1.setAttribute("placeholder","cm")

    let ipt3 = document.getElementById("weight")
    ipt3.setAttribute("placeholder","kg")

    const gender = document.querySelectorAll("input[name='gender']")
    gender.forEach(button=>button.checked=false)
    const age1 = document.getElementById("age")
    
    age1.value = ""

    const resultDisplay = document.getElementById("result")

    ipt1.value = ""
    ipt2.value = ""
    ipt3.value = ""
    resultDisplay.textContent = ""
    
});
