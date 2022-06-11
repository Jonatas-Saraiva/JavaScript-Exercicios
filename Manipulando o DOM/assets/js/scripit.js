const btn = document.getElementById("mode-selector");
const h1=document.getElementById("title")
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];

const darkModeClass = 'dark-mode';


function darkMode () {
    changeClass();
    changeTextHtml();
    
 
}
function changeClass(){
    h1.classList.toggle(darkModeClass); 
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    
}
function changeTextHtml(){
     const lightMode = 'Light Mode';
     const darkModeT = 'Dark Mode';
    if(body.classList.contains(darkModeClass)){
    btn.innerHTML= lightMode;
    h1.innerHTML = darkModeT + ' ON';
    return;
}
btn.innerHTML=darkModeT;
h1.innerHTML=lightMode + ' ON';


}

btn.addEventListener('click', darkMode);

console.log(btn);