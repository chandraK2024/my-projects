const btnsEle=document.querySelectorAll("button")
//console.log(btnsEle);
const inputEle=document.getElementById("result")
for(let i=0;i<btnsEle.length;i++){
    btnsEle[i].addEventListener("click",()=>{
      // console.log(btnsEle[i].textContent)
      const btnvalue=btnsEle[i].textContent
      if(btnvalue==="C"){
        clearResult()
      }
      else if(btnvalue==="="){
        calculateResult()
      }
      else{
        appendValue(btnvalue)
      }
    })
}
function clearResult(){
    inpytEle.value=""
}
function calculateResult(){
    inputEle.value=eval(inputEle.value)
}
function appendValue(btnvalue){
    inputEle.value+=btnvalue
}