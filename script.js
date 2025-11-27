const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function onlyOneLetter(resultInput){
  const regex = /^[a-z0-9/s]+$/i;
  const regexReplace = /[ \/\-_(),.]/g;

  function testing(test) {
    let arr = [];

    for(let i = 0; i < test.length; i++){
      arr.push(test[test.length - (i+1)]);
    };

    const arrJoin = arr.join("").toLowerCase();
    const testerJoin = test.join("").toLowerCase();
    console.log(testerJoin)
    console.log(arrJoin)
   

  if (arrJoin == testerJoin){
    result.innerHTML = resultInput + " is a Palindrome";
    setTimeout(()=>{
      result.innerHTML = ""
    },5000)
  }else {
    result.innerHTML = resultInput + " is not a Palindrome";
     setTimeout(()=>{
      result.innerHTML = ""
    },5000)
  };
  };

  if (resultInput.match(regex)){
    const resultSplit = resultInput.split("");
    testing(resultSplit);
  }else {
    const resultSplitRplc = resultInput.replace(regexReplace, "").split("");
    testing(resultSplitRplc);
  };
};

function btnCheckHere() {
  if(textInput.value === ""){
    alert("Please input a value ")
  } else {
    onlyOneLetter(textInput.value)
  };
};

checkBtn.addEventListener("click",() =>{
  btnCheckHere();
});