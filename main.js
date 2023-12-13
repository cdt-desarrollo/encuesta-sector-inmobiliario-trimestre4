// let companyName = document.getElementById("companyName").value;
// let staffName = document.getElementById("staffName").value;
// let email = document.getElementById("email").value;
// let phone = document.getElementById("phone").value;
// let q1
// let q2
// let q3
// let q4
// let q5
// let q6
// let q7
// let q8
// let q9
// let q10
// let q11
// let q12
// let q13
// let q15
// let q16
// let q17
var q11 = []
var q15 = [] 
var responses = []
// function getResponses(){
//   getValuesQ1()
//   getValuesQ2()
//   getValuesQ3()
//   getValuesQ4()
//   getValuesQ5()
//   getValuesQ6()
//   getValuesQ7()
//   getValuesQ8()
//   getValuesQ9()
//   getValuesQ10()
//   getValuesQ11()
//   getValuesQ12()
//   getValuesQ13()
//   getValuesQ14()
//   getValuesQ15()
//   getValuesQ16()
//   getValuesQ17()
// }
// function getValuesQ1(){
//   q1o1 = document.getElementById("q1o1")
//   q1o2 = document.getElementById("q1o2")
//   q1o3 = document.getElementById("q1o3")
//   for(i = 0; i<=2; i++){
//     if(i == 0){
//       if(q1o1.checked == true){
//         q1 = q1o1.value
//       }
//     }
//     else if(i == 1){
//       if(q1o2.checked == true){
//         q1 = q1o2.value
//       }
//     }
//     else if(i == 2){
//       if(q1o3.checked == true){
//         q1 = q1o3.value
//       }
//     }
//   }
//   console.log("Q1: ",q1)
// }
function disableInputNumberQuestion2(option){
  if(option.checked == true)
  {
    document.getElementById("q2o1").disabled = true
    document.getElementById("q2o1").value = ""
  }
  else if(option.checked == false){
    document.getElementById("q2o1").disabled = false
    document.getElementById("q2o1").value = ""
  }
}
// function getValuesQ2(){
//   q2o1 = document.getElementById("q2o1")
//   q2o2 = document.getElementById("q2o2")
//   if(q2o2.checked == true){
//     q2 = q2o2.value
//   }
//   else if(q2o2.checked == false){
//     q2 = q2o1.value
//   }
//   console.log("Q2: ",q2)
// }
function disableInputNumberQuestion3(option){
  if(option.checked == true)
  {
    document.getElementById("q3o1").disabled = true
    document.getElementById("q3o1").value = ""
  }
  else if(option.checked == false){
    document.getElementById("q3o1").disabled = false
    document.getElementById("q3o1").value = ""
  }
}
// function getValuesQ3(){
//   q3o1 = document.getElementById("q3o1")
//   q3o2 = document.getElementById("q3o2")
//   if(q3o2.checked == true){
//     q3 = q3o2.value
//   }
//   else if(q3o2.checked == false){
//     q3 = q3o1.value
//   }
//   console.log("Q3: ",q3)
// }
function disableInputNumberQuestion4(option){
  if(option.checked == true)
  {
    document.getElementById("q4o1").disabled = true
    document.getElementById("q4o1").value = ""
  }
  else if(option.checked == false){
    document.getElementById("q4o1").disabled = false
    document.getElementById("q4o1").value = ""
  }
}
// function getValuesQ4(){
//   q4o1 = document.getElementById("q4o1")
//   q4o2 = document.getElementById("q4o2")
//   if(q4o2.checked == true){
//     q4 = q4o2.value
//   }
//   else if(q4o2.checked == false){
//     q4 = q4o1.value
//   }
//   console.log("Q4: ",q4)
// }
// function getValuesQ5(){
//   q5o1 = document.getElementById("q5o1")
//   q5o2 = document.getElementById("q5o2")
//   q5o3 = document.getElementById("q5o3")
//   q5o4 = document.getElementById("q5o4")
//   q5o5 = document.getElementById("q5o5")
//   q5o6 = document.getElementById("q5o6")
//   q5o7 = document.getElementById("q5o7")
//   q5o8 = document.getElementById("q5o8")
//   q5o9 = document.getElementById("q5o9")
//   q5o10 = document.getElementById("q5o10")
//   for(i = 0; i<=9; i++){
//     if(i == 0){
//       if(q5o1.checked == true){
//         q5 = q5o1.value
//       }
//     }
//     else if(i == 1){
//       if(q5o2.checked == true){
//         q5 = q5o2.value
//       }
//     }
//     else if(i == 2){
//       if(q5o3.checked == true){
//         q5 = q5o3.value
//       }
//     }
//     else if(i == 3){
//       if(q5o4.checked == true){
//         q5 = q5o4.value
//       }
//     }
//     else if(i == 4){
//       if(q5o5.checked == true){
//         q5 = q5o5.value
//       }
//     }
//     else if(i == 5){
//       if(q5o6.checked == true){
//         q5 = q5o6.value
//       }
//     }
//     else if(i == 6){
//       if(q5o7.checked == true){
//         q5 = q5o7.value
//       }
//     }
//     else if(i == 7){
//       if(q5o8.checked == true){
//         q5 = q5o8.value
//       }
//     }
//     else if(i == 8){
//       if(q5o9.checked == true){
//         q5 = q5o9.value
//       }
//     }
//     else if(i == 9){
//       if(q5o10.checked == true){
//         q5 = q5o10.value
//       }
//     }
//   }
//   console.log("Q5: ", q5)
// }
// function getValuesQ6(){
//   q6o1 = document.getElementById("q6o1")
//   q6o2 = document.getElementById("q6o2")
//   q6o3 = document.getElementById("q6o3")
//   q6o4 = document.getElementById("q6o4")
//   q6o5 = document.getElementById("q6o5")
//   q6o6 = document.getElementById("q6o6")
//   q6o7 = document.getElementById("q6o7")
//   q6o8 = document.getElementById("q6o8")
//   q6o9 = document.getElementById("q6o9")
//   q6o10 = document.getElementById("q6o10")
//   for(i = 0; i<=9; i++){
//     if(i == 0){
//       if(q6o1.checked == true){
//         q6 = q6o1.value
//       }
//     }
//     else if(i == 1){
//       if(q6o2.checked == true){
//         q6 = q6o2.value
//       }
//     }
//     else if(i == 2){
//       if(q6o3.checked == true){
//         q6 = q6o3.value
//       }
//     }
//     else if(i == 3){
//       if(q6o4.checked == true){
//         q6 = q6o4.value
//       }
//     }
//     else if(i == 4){
//       if(q6o5.checked == true){
//         q6 = q6o5.value
//       }
//     }
//     else if(i == 5){
//       if(q6o6.checked == true){
//         q6 = q6o6.value
//       }
//     }
//     else if(i == 6){
//       if(q6o7.checked == true){
//         q6 = q6o7.value
//       }
//     }
//     else if(i == 7){
//       if(q6o8.checked == true){
//         q6 = q6o8.value
//       }
//     }
//     else if(i == 8){
//       if(q6o9.checked == true){
//         q6 = q6o9.value
//       }
//     }
//     else if(i == 9){
//       if(q6o10.checked == true){
//         q6 = q6o10.value
//       }
//     }
//   }
//   console.log("Q6: ", q6)
// }
// function getValuesQ7(){
//   q7o1 = document.getElementById("q7o1")
//   q7o2 = document.getElementById("q7o2")
//   q7o3 = document.getElementById("q7o3")
//   q7o4 = document.getElementById("q7o4")
//   q7o5 = document.getElementById("q7o5")
//   q7o6 = document.getElementById("q7o6")
//   q7o7 = document.getElementById("q7o7")
//   q7o8 = document.getElementById("q7o8")
//   q7o9 = document.getElementById("q7o9")
//   q7o10 = document.getElementById("q7o10")
//   q7o11 = document.getElementById("q7o11")
//   for(i = 0; i<=10; i++){
//     if(i == 0){
//       if(q7o1.checked == true){
//         q7 = q7o1.value
//       }
//     }
//     else if(i == 1){
//       if(q7o2.checked == true){
//         q7 = q7o2.value
//       }
//     }
//     else if(i == 2){
//       if(q7o3.checked == true){
//         q7 = q7o3.value
//       }
//     }
//     else if(i == 3){
//       if(q7o4.checked == true){
//         q7 = q7o4.value
//       }
//     }
//     else if(i == 4){
//       if(q7o5.checked == true){
//         q7 = q7o5.value
//       }
//     }
//     else if(i == 5){
//       if(q7o6.checked == true){
//         q7 = q7o6.value
//       }
//     }
//     else if(i == 6){
//       if(q7o7.checked == true){
//         q7 = q7o7.value
//       }
//     }
//     else if(i == 7){
//       if(q7o8.checked == true){
//         q7 = q7o8.value
//       }
//     }
//     else if(i == 8){
//       if(q7o9.checked == true){
//         q7 = q7o9.value
//       }
//     }
//     else if(i == 9){
//       if(q7o10.checked == true){
//         q7 = q7o10.value
//       }
//     }
//     else if(i == 10){
//       if(q7o11.checked == true){
//         q7 = q7o11.value
//       }
//     }
//   }
//   console.log("Q7: ", q7)
// }
// function getValuesQ8(){
//   q8o1 = document.getElementById("q8o1")
//   q8o2 = document.getElementById("q8o2")
//   q8o3 = document.getElementById("q8o3")
//   q8o4 = document.getElementById("q8o4")
//   q8o5 = document.getElementById("q8o5")
//   q8o6 = document.getElementById("q8o6")
//   q8o7 = document.getElementById("q8o7")
//   q8o8 = document.getElementById("q8o8")
//   q8o9 = document.getElementById("q8o9")
//   q8o10 = document.getElementById("q8o10")
//   q8o11 = document.getElementById("q8o11")
//   for(i = 0; i<=10; i++){
//     if(i == 0){
//       if(q8o1.checked == true){
//         q8 = q8o1.value
//       }
//     }
//     else if(i == 1){
//       if(q8o2.checked == true){
//         q8 = q8o2.value
//       }
//     }
//     else if(i == 2){
//       if(q8o3.checked == true){
//         q8 = q8o3.value
//       }
//     }
//     else if(i == 3){
//       if(q8o4.checked == true){
//         q8 = q8o4.value
//       }
//     }
//     else if(i == 4){
//       if(q8o5.checked == true){
//         q8 = q8o5.value
//       }
//     }
//     else if(i == 5){
//       if(q8o6.checked == true){
//         q8 = q8o6.value
//       }
//     }
//     else if(i == 6){
//       if(q8o7.checked == true){
//         q8 = q8o7.value
//       }
//     }
//     else if(i == 7){
//       if(q8o8.checked == true){
//         q8 = q8o8.value
//       }
//     }
//     else if(i == 8){
//       if(q8o9.checked == true){
//         q8 = q8o9.value
//       }
//     }
//     else if(i == 9){
//       if(q8o10.checked == true){
//         q8 = q8o10.value
//       }
//     }
//     else if(i == 10){
//       if(q8o11.checked == true){
//         q8 = q8o11.value
//       }
//     }
//   }
//   console.log("Q8: ", q8)
// }
// function getValuesQ9(){
//   q9o1 = document.getElementById("q9o1")
//   q9o2 = document.getElementById("q9o2")
//   q9o3 = document.getElementById("q9o3")
//   q9o4 = document.getElementById("q9o4")
//   for(i = 0; i<=3; i++){
//     if(i == 0){
//       if(q9o1.checked == true){
//         q9 = q9o1.value
//       }
//     }
//     else if(i == 1){
//       if(q9o2.checked == true){
//         q9 = q9o2.value
//       }
//     }
//     else if(i == 2){
//       if(q9o3.checked == true){
//         q9 = q9o3.value
//       }
//     }
//     else if(i == 3){
//       if(q9o4.checked == true){
//         q9 = q9o4.value
//       }
//     }
//   }
//   console.log("Q9: ", q9)
// }
// function getValuesQ10(){
//   q10o1 = document.getElementById("q10o1")
//   q10o2 = document.getElementById("q10o2")
//   q10o3 = document.getElementById("q10o3")
//   q10o4 = document.getElementById("q10o4")
//   q10o5 = document.getElementById("q10o5")
//   q10o6 = document.getElementById("q10o6")
//   q10o7 = document.getElementById("q10o7")
//   for(i = 0; i<=6; i++){
//     if(i == 0){
//       if(q10o1.checked == true){
//         q10 = q10o1.value
//       }
//     }
//     else if(i == 1){
//       if(q10o2.checked == true){
//         q10 = q10o2.value
//       }
//     }
//     else if(i == 2){
//       if(q10o3.checked == true){
//         q10 = q10o3.value
//       }
//     }
//     else if(i == 3){
//       if(q10o4.checked == true){
//         q10 = q10o4.value
//       }
//     }
//     else if(i == 4){
//       if(q10o5.checked == true){
//         q10 = q10o5.value
//       }
//     }
//     else if(i == 5){
//       if(q10o6.checked == true){
//         q10 = q10o6.value
//       }
//     }
//     else if(i == 6){
//       if(q10o7.checked == true){
//         q10 = q10o7.value
//       }
//     }
//   }
//   console.log("Q10: ", q10)
// }
function disableOptionsQ11(option){
  if(option.checked == true){
    document.getElementById("q11o1").disabled = true
    document.getElementById("q11o1").checked = false
    document.getElementById("q11o2").disabled = true
    document.getElementById("q11o2").checked = false
    document.getElementById("q11o3").disabled = true
    document.getElementById("q11o3").checked = false
    document.getElementById("q11o4").value = ""
    document.getElementById("q11o4").disabled = true
  }
  else if(option.checked == false){
    document.getElementById("q11o1").disabled = false
    document.getElementById("q11o2").disabled = false
    document.getElementById("q11o3").disabled = false
    document.getElementById("q11o4").disabled = false
  }
}
// function getValuesQ11(){
//   q11o1 = document.getElementById("q11o1")
//   q11o2 = document.getElementById("q11o2")
//   q11o3 = document.getElementById("q11o3")
//   q11o4 = document.getElementById("q11o4")
//   q11o5 = document.getElementById("q11o5")
//   let arrayQ11 =[]
//   for(let i = 0; i<=4; i++){
//     if(i == 0){
//       if(q11o1.checked == true){
//         arrayQ11.push(q11o1.value)
//       }
//     }
//     else if(i == 1){
//       if(q11o2.checked == true){
//         arrayQ11.push(q11o2.value)
//       }
//     }
//     else if(i == 2){
//       if(q11o3.checked == true && i == 2){
//         arrayQ11.push(q11o3.value)
//       }
//     }
//     else if(i == 3){
//       if(q11o4.value !== "" && i == 3){
//         arrayQ11.push(q11o4.value)
//       }
//     }
//     else if(i == 4){
//       if(q11o5.checked == true && i == 4){
//         arrayQ11 = ["notuveventas"]
//       }
//     }
//   }
//   q11 = arrayQ11.toString()
//   console.log("Q11: ",q11)
// }
function disableInputNumberQuestion12(option){
  if(option.checked == true){
    document.getElementById("q12o1").disabled = true
    document.getElementById("q12o1").value = ""
  }
  else if(option.checked == false){
    document.getElementById("q12o1").disabled = false
  }
}
// function getValuesQ12(){
//   q12o1 = document.getElementById("q12o1")
//   q12o2 = document.getElementById("q12o2")
//   if(q12o2.checked == true){
//     q12 = q12o2.value
//   }
//   else if(q12o2.checked == false){
//     q12 = q12o1.value
//   }
//   console.log("Q12: ",q12)
// }
function disableInputNumberQuestion13(option){
  if(option.checked == true){
    document.getElementById("q13o1").disabled = true
    document.getElementById("q13o1").value = ""
  }
  else if(option.checked == false){
    document.getElementById("q13o1").disabled = false
  }
}
// function getValuesQ13(){
//   q13o1 = document.getElementById("q13o1")
//   q13o2 = document.getElementById("q13o2")
//   if(q13o2.checked == true){
//     q13 = q13o2.value
//   }
//   else if(q13o2.checked == false){
//     q13 = q13o1.value
//   }
//   console.log("Q13: ",q13)
// }
function disableInputNumberQuestion14(option){
  if(option.checked == true){
    document.getElementById("q14o1").disabled = true
    document.getElementById("q14o1").value = ""
  }
  else if(option.checked == false){
    document.getElementById("q14o1").disabled = false
  }
}
// function getValuesQ14(){
//   q14o1 = document.getElementById("q14o1")
//   q14o2 = document.getElementById("q14o2")
//   if(q14o2.checked == true){
//     q14 = q14o2.value
//   }
//   else if(q14o2.checked == false){
//     q14 = q14o1.value
//   }
//   console.log("Q14: ",q14)
// }
function disableOptionsQ15(option){
  if(option.checked == true){
    document.getElementById("q15o1").disabled = true
    document.getElementById("q15o1").checked = false
    document.getElementById("q15o2").disabled = true
    document.getElementById("q15o2").checked = false
    document.getElementById("q15o3").disabled = true
    document.getElementById("q15o3").checked = false
    document.getElementById("q15o4").value = ""
    document.getElementById("q15o4").disabled = true
  }
  else if(option.checked == false){
    document.getElementById("q15o1").disabled = false
    document.getElementById("q15o2").disabled = false
    document.getElementById("q15o3").disabled = false
    document.getElementById("q15o4").disabled = false
  }
}
// function escribirUso(inputObject) {
//   if(inputObject.id == "q15o4" && inputObject.checked == true){
//     Swal.fire({
//       title: "Los compradores en su mayoría",
//       html: '<input id="swal-input1" class="swal2-input" placeholder="Escribe el uso del espacio"></input>',
//       preConfirm: () => {
//         uso = document.getElementById("swal-input1").value;
//         if(uso == ""){
//           escribirUso(inputObject)
//         }
//         else if(uso != ""){
//           if(inputObject.id == "q15o4"){
//             // document.getElementById("insertUse").innerHTML = "";
//             document.getElementById("q15o4").value = uso;
//             document.getElementById(
//               "insertUse"
//             ).innerHTML = `<h6 id="h6Uso">${uso}</h6>`;
//             inputObject.value = uso
//           }
//         }
//       },
//     });
//   }
//   else if(inputObject.id !== "q15o4"){
//     document.getElementById("insertUse").innerHTML = ""
//   }
// }
// function getValuesQ15(){
//   q15o1 = document.getElementById("q15o1")
//   q15o2 = document.getElementById("q15o2")
//   q15o3 = document.getElementById("q15o3")
//   q15o4 = document.getElementById("q15o4")
//   q15o5 = document.getElementById("q15o5")
//   for(i = 0; i<=4; i++){
//     if(i == 0){
//       if(q15o1.checked == true){
//         q15 = q15o1.value
//       }
//     }
//     else if(i == 1){
//       if(q15o2.checked == true){
//         q15 = q15o2.value
//       }
//     }
//     else if(i == 2){
//       if(q15o3.checked == true){
//         q15 = q15o3.value
//       }
//     }    
//     else if(i == 3){
//       if(q15o4.checked == true){
//         q15 = q15o4.value
//       }
//     }    
//     else if(i == 4){
//       if(q15o5.checked == true){
//         q15 = q15o5.value
//       }
//     }
//   }
//   console.log("Q15: ",q15)
// }
// function getValuesQ16(){
//   q16o1 = document.getElementById("q16o1")
//   q16o2 = document.getElementById("q16o2")
//   q16o3 = document.getElementById("q16o3")
//   q16o4 = document.getElementById("q16o4")
//   q16o5 = document.getElementById("q16o5")
//   for(i = 0; i<=4; i++){
//     if(i == 0){
//       if(q16o1.checked == true){
//         q16 = q16o1.value
//       }
//     }
//     else if(i == 1){
//       if(q16o2.checked == true){
//         q16 = q16o2.value
//       }
//     }
//     else if(i == 2){
//       if(q16o3.checked == true){
//         q16 = q16o3.value
//       }
//     }
//     else if(i == 3){
//       if(q16o4.checked == true){
//         q16 = q16o4.value
//       }
//     }
//     else if(i == 4){
//       if(q16o5.checked == true){
//         q16 = q16o5.value
//       }
//     }
//   }
//   console.log("Q16: ",q16)
// }
// function getValuesQ17(){
//   q17o1 = document.getElementById("q17o1")
//   q17 = q17o1.value
//   console.log("Q17: ", q17)
// }

function getValues(){
  prePersonalInformation = Array.from(document.getElementsByName("personalInformation"))
  for(i = 0; i <= prePersonalInformation.length - 1; i++){
    responses.push(prePersonalInformation[i].value)
  }
  preQ1 = Array.from(document.getElementsByName("q1"))
  for(i = 0; i <= preQ1.length - 1; i++){
    if(preQ1[i].checked == true){
      responses.push(preQ1[i].value)
    }
  }
  preQ2 = Array.from(document.getElementsByName("q2"))
  for(i = 0; i <= preQ2.length - 1; i++){
    if(preQ2[i].type == "number" && preQ2[i].value !== ""){
      responses.push(preQ2[i].value)
    }
    else if(preQ2[i].type == "checkbox" && preQ2[i].checked == true){
      responses.push(preQ2[i].value)
    }
  }
  preQ3 = Array.from(document.getElementsByName("q3"))
  for(i = 0; i <= preQ3.length - 1; i++){
    if(preQ3[i].type == "number" && preQ3[i].value !== ""){
      responses.push(preQ3[i].value)
    }
    else if(preQ3[i].type == "checkbox" && preQ3[i].checked == true){
      responses.push(preQ3[i].value)
    }
  }
  preQ4 = Array.from(document.getElementsByName("q4"))
  for(i = 0; i <= preQ4.length - 1; i++){
    if(preQ4[i].type == "number" && preQ4[i].value !== ""){
      responses.push(preQ4[i].value)
    }
    else if(preQ4[i].type == "checkbox" && preQ4[i].checked == true){
      responses.push(preQ4[i].value)
    }
  }
  preQ5 = Array.from(document.getElementsByName("q5"))
  for(i = 0; i <= preQ5.length - 1; i++){
    if(preQ5[i].checked == true){
      responses.push(preQ5[i].value)
    }
  }
  preQ6 = Array.from(document.getElementsByName("q6"))
  for(i = 0; i <= preQ6.length - 1; i++){
    if(preQ6[i].checked == true){
      responses.push(preQ6[i].value)
    }
  }
  preQ7 = Array.from(document.getElementsByName("q7"))
  for(i = 0; i <= preQ7.length - 1; i++){
    if(preQ7[i].checked == true){
      responses.push(preQ7[i].value)
    }
  }
  preQ8 = Array.from(document.getElementsByName("q8"))
  for(i = 0; i <= preQ8.length - 1; i++){
    if(preQ8[i].checked == true){
      responses.push(preQ8[i].value)
    }
  }
  preQ9 = Array.from(document.getElementsByName("q9"))
  for(i = 0; i <= preQ9.length - 1; i++){
    if(preQ9[i].checked == true){
      responses.push(preQ9[i].value)
    }
  }
  preQ10 = Array.from(document.getElementsByName("q10"))
  for(i = 0; i <= preQ10.length - 1; i++){
    if(preQ10[i].checked == true){
      responses.push(preQ10[i].value)
    }
  }
  preQ11 = Array.from(document.getElementsByName("q11"))
  for(i = 0; i <= preQ11.length - 1; i++){
    if(preQ11[i].checked == true || preQ11[i].type == "text"){
      q11.push(preQ11[i].value)
    }
  }
  responses.push(q11)
  preQ12 = Array.from(document.getElementsByName("q12"))
  for(i = 0; i <= preQ12.length - 1; i++){
    if(preQ12[i].type == "number" && preQ12[i].value !== ""){
      responses.push(preQ12[i].value)
    }
    else if(preQ12[i].type == "checkbox" && preQ12[i].checked == true){
      responses.push(preQ12[i].value)
    }
  }
  preQ13 = Array.from(document.getElementsByName("q13"))
  for(i = 0; i <= preQ13.length - 1; i++){
    if(preQ13[i].type == "number" && preQ13[i].value !== ""){
      responses.push(preQ13[i].value)
    }
    else if(preQ13[i].type == "checkbox" && preQ13[i].checked == true){
      responses.push(preQ13[i].value)
    }
  }
  preQ14 = Array.from(document.getElementsByName("q14"))
  for(i = 0; i <= preQ14.length - 1; i++){
    if(preQ14[i].type == "number" && preQ14[i].value !== ""){
      responses.push(preQ14[i].value)
    }
    else if(preQ14[i].type == "checkbox" && preQ14[i].checked == true){
      responses.push(preQ14[i].value)
    }
  }
  // preQ15 = Array.from(document.getElementsByName("q15"))
  // for(i = 0; i <= preQ15.length - 1; i++){
  //   if(preQ15[i].type == "radio"){
  //     if(preQ15[i].checked == true){
  //       responses.push(preQ15[i].value)
  //     }
  //   }
  //   else if(preQ15[i].type == "checkbox"){
  //     if(preQ15[i].checked == true){
  //       responses.push(preQ15[i].value)
  //     }
  //   }
  // }
  preQ15 = Array.from(document.getElementsByName("q15"))
  for(i = 0; i <= preQ15.length - 1; i++){
    if(preQ15[i].checked == true || preQ15[i].type == "text"){
      q15.push(preQ15[i].value)
    }
  }
  responses.push(q15)
  preQ16 = Array.from(document.getElementsByName("q16"))
  for(i = 0; i <= preQ16.length - 1; i++){
    if(preQ16[i].checked == true){
      responses.push(preQ16[i].value)
    }
  }
  preQ17 = Array.from(document.getElementsByName("q17"))
  for(i = 0; i <= preQ17.length - 1; i++){
    if(preQ17[i].type == "number" && preQ17[i].value !== ""){
      responses.push(preQ17[i].value)
    }
  }
  console.log(responses)
  validateInformation(responses)
}

function validateInformation(array) {
  // Error
  if(array.length < 21){
    Swal.fire({
      icon: "error",
      title: "Faltan preguntas por responder",
      confirmButtonColor: "#3085d6"
    })
    q11 = []
    q15 = []
    responses = []
  }
  else if(array[1] == ""){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas el nombre de tu empresa",
      confirmButtonColor: "#3085d6"
    })
    q11 = []
    q15 = []
    responses = []
  }
  else if(array.length == 21){
    Swal.showLoading();
    sendData(array)
  }
}
function sendData(array) {
    var data = JSON.stringify({
      nombre: `${array[0]}`,
      empresa: `${array[1]}`,
      correo: `${array[2]}`,
      telefono: `${array[3]}`,
      q1: `${array[4]}`,
      q2: `${array[5]}`,
      q3: `${array[6]}`,
      q4: `${array[7]}`,
      q5: `${array[8]}`,
      q6: `${array[9]}`,
      q7: `${array[10]}`,
      q8: `${array[11]}`,
      q9: `${array[12]}`,
      q10: `${array[13]}`,
      q11: `${array[14]}`,
      q12: `${array[15]}`,
      q13: `${array[16]}`,
      q14: `${array[17]}`,
      q15: `${array[18]}`,
      q16: `${array[19]}`,
      q17: `${array[20]}`
    });
    // sheet.best
    var config = {
      method: "post",
      url: "https://sheet.best/api/sheets/32aacf91-902e-4e88-8d70-e596b2f41ceb/tabs/trim42023",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    // restdb.io
    // var config = {
    //   method: "post",
    //   url: "https://responses-5389.restdb.io/rest/responses",
    //   // mode: "cors",
    //   headers: {
    //     "x-apikey": "63ea9066478852088da681dd",
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };
  
    axios(config)
      .then((res) => {
        q11 = []
        responses = []
        // console.log(res)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Información enviada, ya puede cerrar esta ventana",
          showConfirmButton: false,
          confirmButtonColor: "#3085d6",
        });
        document.getElementById("deleteDiv").remove();
        let divToInsertHTMLTags = document.getElementById("divToInsertHTMLTags");
        let notification = document.createElement("div");
        notification.innerHTML = `<h4 class="text-center">Gracias por llenar la encuesta, ya puede cerrar esta ventana.</h4>`;
        divToInsertHTMLTags.insertAdjacentElement("beforeend", notification);
      })
      .catch(async(err) => {
        console.log(err)
        // const { value: accept} =
        // await Swal.fire({
        //   icon: "error",
        //   title: "¡Algo salió mal!",
        //   text: "Recuerda que tu nombre es obligatorio",
        //   confirmButtonColor: "#3085d6",
        // })
        // if(accept){
        //   location.reload()
        // };
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#3085d6"
        })
      });
}






