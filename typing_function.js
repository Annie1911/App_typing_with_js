function showResult(score , numberofwords){
    let zoneScore = document.querySelector('.score');
    let showScore = `${score}/${numberofwords}`;
    zoneScore.innerHTML = showScore;

}

function showProposition(listProposition){
    let zoneProposition = document.querySelector('.propositionbox');
    zoneProposition.textContent = listProposition;
}


function showEmail(nom , email , score){
    let mailto = `mailto:${email}?subject=Partage du score App_typing&body ${nom} a eu un ${score} sur notre site App_typing&body ${nom}`;
}


function launchGame(){
    let score = 0;
    let index = 0;
    let numberofwords = listProposition.length;
    buttonvalide = document.getElementById('validate')
    let zoneProposition = document.querySelector('.propositionbox');
    let zoneWriting= document.querySelector('.typingbox');
    let zoneoption= document.querySelectorAll('.optionbox input');
    
   showProposition(listProposition[index]);
   buttonvalidate.addEventListener('click',()=>{
        index++;
        if(listProposition[index]=== undefined)
        {
             zoneProposition.innerHTML = "LE JEU EST FINI REJOUEZ UNE PARTIE ";
        }else{
            showProposition(listProposition[index]);
        }
 
        if(listProposition[index] === zoneWriting.value) {
         score++;
        }
 
        for(var i=0; i<zoneoption.length; i){
            zoneoption[i].addEventListener("change",(event)=>{
            if(event.target.value === 1 ){
                listProposition=listWords;
            }else{
                 listProposition=listSentences;
             }
         })}
    })

    showResult(score,numberofwords)
   
}