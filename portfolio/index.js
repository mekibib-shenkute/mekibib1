const container=document.querySelector("#skillcontent");
const skill=["youtuber","webdeveloper","freelancer","instructor"];
let careIndex=0;
let characterIndex=0;
function updateText(){
    characterIndex++;
container.innerHTML=`<h1>I am ${skill[careIndex].slice(0,1)==("i"||"u")?"an":"a"} ${skill[careIndex].slice(0,characterIndex)} </h1>`;
if(characterIndex===skill[careIndex].length){
    careIndex++
    characterIndex=0;
}
if(careIndex===skill.length)
{
    careIndex=0;
}
setTimeout(updateText,400)
}
updateText();
color=["blue",'green','cyan','red']
colorIndex=0;
function changecolor(){
    container.style.color=`${color[colorIndex]}`
    colorIndex++
    if(colorIndex==color.length){
        colorIndex=0;
    }
    setTimeout(changecolor,3600)
}
changecolor()