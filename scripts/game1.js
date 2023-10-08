const jumbleWords = [
    "eklipso"
    , "syzygy"
    , "umbra"
    , "penumbra"
    , "annular"
    , "saros cycle"
    , "metonic cycle"
    , "shadow"
    , "eclipse season"
    , "blood moon"
    , "diamond ring"]

var pickAWord=jumbleWords[Math.floor(Math.random()*jumbleWords.length)]
//console.log(pickAWord);
var input_boxes=document.getElementById("input-boxes")
//close the answer
var result =document.getElementById("result");

var box=document.getElementById("box");
function shuffleWord (word){
    var shufledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shufledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    //console.log(shufleWord);
    box.innerText=shufledWord
    return shufledWord;
}

shuffleWord(pickAWord)


for (var i=0;i<pickAWord.length;i++){
    input_boxes.innerHTML+=`<input type="text" maxlength="1" id="" class="input-text">`
}
//console.log(shuffleWord("eclipse season"));
var inputs = document.querySelectorAll('.input-text');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        if (this.value.length >= 1) {
            var next = this.nextElementSibling;
            if (next) {
                next.focus();
            }
        } else if (this.value.length === 0) {
            var prev = this.previousElementSibling;
            if (prev) {
                prev.focus();
            }
        }
    });
}


function Check(){
    result.style.display="flex"
    var userInput=""
    for (var j=0;j<inputs.length;j++){
        userInput+=inputs[j].value;
        console.log(userInput);
    }
    if(userInput==pickAWord){
        result.style.backgroundColor="green";
        result.innerHTML=`
        <div class="pop-up">
        <div>
        <p class="msg">You get the one map piese</p>
        <button onclick="leve2()" class="btn">Level 2</button>
        </div>
        </div>
        `
    }
    else{
        result.style.backgroundColor="red";
        result.innerHTML=`
        <div class="pop-up">
        <div>
        <p class="msg">Retry</p>
        <button onclick="level1()" class="btn2">Retry</button></div>
        </div>
        `
    }
}
console.log(pickAWord);

function level1(){
    window.location.href ="../Pages/game1.html";
}
function leve2(){
    window.location.href ="../Pages/game2.html"
}