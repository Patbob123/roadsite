import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
import { About } from './About.js';
import { NavBar } from './NavBar.js';
import { InfoBox } from './InfoBox.js';
import { Team } from './Works.js';

const { useState } = React

function App() {
    

    return (
        <div className={`scroll-smooth snap-mandatory snap-y w-[1440px] h-[4320px]`}
            x-init="app">
            
            <img src={'./assets/roadlive.png'} id="unimg" alt="Icon" className="w-full h-full" />
            <div x-data="{ shown: false , handleIntersect: () => { shown = true; }  }" x-intersect="handleIntersect()" className="caption">
                <div>
                    <Hero />
                    <About />


                </div>
            </div>


        </div>
    );
}


let inter;
let element;
let audioPlaying = false;
let interval = 0;
let up = true;

window.addEventListener('DOMContentLoaded', function () {
    const root = ReactDOM.createRoot(document.querySelector('#app'), { throwIfNamespace: false });
    console.log(root)
    root.render(<App />);
    element = document.querySelector('#father')
    
});


window.addEventListener('keydown', function (event) {
    
    if(!audioPlaying){
        var x = document.getElementById("wind");
        x.volume = 0.2
        x.play();
        audioPlaying = true;
    }
    if(inter) {
        clearTimeout(inter);
      }
      
      inter = setInterval(move, 10, event)
});
window.addEventListener('keyup', function () {
    clearInterval(inter)
    inter = null;
});
function move(event) {
    console.log(event)
    element = document.querySelector('#father')
    interval++;
    switch (event.key) {
        case "S":
        case "s":
        case "ArrowDown":
            bump()
            direction("")
            window.scrollBy(0,2)
            if(element.offsetTop<4320){
                element.style.top = (parseInt(element.style.top) + 2) + 'px';
            }
            
            break;
        case "w":
        case "W":
        case "ArrowUp":
            bump()
            direction("back")
            window.scrollBy(0,-1.25)
            if(element.offsetTop>450){
                element.style.top = (parseInt(element.style.top) - 2) + 'px';
            }
            break;
        case "a":
        case "A":
        case "ArrowLeft":
            bump()
            direction("right")
            if(element.offsetLeft>0){
                element.style.left = (parseInt(element.style.left) - 2) + 'px';
            }
            break;
        case "d":
        case "D":
        case "ArrowRight":
            bump()
            direction("left")
            if(element.offsetLeft<1920){
                element.style.left = (parseInt(element.style.left) + 2) + 'px';
            }
            break;
        default:
            return;
    }
}
function bump(){
    if(interval%14==0){
        up = false
        element.style.top = (parseInt(element.style.top) + 5) + 'px';
    }else if(interval%7==0){
        up = true
        element.style.top = (parseInt(element.style.top) - 5) + 'px';
    }
}
function direction(dire){
    document.getElementById("foot").play();
    let son = (document.querySelector("#father").dataset.isS)?"son":"father";
  
    const urls =  document.querySelector("#fatherimg").src.split("/");
      console.log(urls)
    document.querySelector("#fatherimg").src = urls[0]+"/"+urls[1]+"/"+urls[2]+"/"+urls[3]+"/"+urls[4]+"/"+son+dire+".png";

}