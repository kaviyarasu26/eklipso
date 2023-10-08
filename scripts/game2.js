const Sent = ["A total lunar eclipse happens when the Earth's shadow completely covers the Moon, making it appear red or coppery often referred to as a 'ÆӨҮҮΨ   ҰҮҮӨ̵'", 'The " Ұ̵ҰÆҴΦ " is the darkest part of a shadow, where light is completely blocked.', 'The "ҺΣӨ̵Ұ̵ҰÆҴΦ " is the lighter, outer part of a shadow where some light is blocked but not all', 'The orbital movements of the Sun, Moon, and Earth as well as the "ΩҴΦқ̵Әә̵Φә̵ӘҮӨ̵ΦӨ   ЖҮҴŦΣҒ" between them are what essentially determine the alignment of the Sun, Moon, and Earth']

var randampara=document.getElementById("randomPara");

var pickAWord=Sent[Math.floor(Math.random()*Sent.length)]
randampara.innerText=pickAWord;

var answer
switch (pickAWord) {
  case "A total lunar eclipse happens when the Earth's shadow completely covers the Moon, making it appear red or coppery often referred to as a 'ÆӨҮҮΨ   ҰҮҮӨ̵'":
    answer ="blood moon";
    break;
  case 'The " Ұ̵ҰÆҴΦ " is the darkest part of a shadow, where light is completely blocked.':
    answer="umbra";
    break;
  case 'The "ҺΣӨ̵Ұ̵ҰÆҴΦ " is the lighter, outer part of a shadow where some light is blocked but not all':
   answer="penumbra";
    break;
  case 'The orbital movements of the Sun, Moon, and Earth as well as the "ΩҴΦқ̵Әә̵Φә̵ӘҮӨ̵ΦӨ   ЖҮҴŦΣҒ" between them are what essentially determine the alignment of the Sun, Moon, and Earth':
   answer="gravitational forces";
    break;
}

var popup= document.getElementById("pop-up");


function Check(){
    var userInput =document.getElementById("userInput");
    if(answer==userInput.value){
        popup.innerHTML=`
        <div class="center">
            <div>
                <P>You got your second map.</P>
                <button>Leve 3</button>
            </div>
        </div>
        `
    }else{
        
    }
}










