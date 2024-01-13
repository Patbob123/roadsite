import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
import { About } from './About.js';
import { NavBar } from './NavBar.js';
import { InfoBox } from './InfoBox.js';
import { Team } from './Works.js';
const {
  useState
} = React;
function App() {
  var x = document.getElementById("wind");
  x.volume = 0.2;
  x.play();
  return /*#__PURE__*/React.createElement("div", {
    className: `scroll-smooth snap-mandatory snap-y w-[1440px] h-[4320px]`,
    "x-init": "app"
  }, /*#__PURE__*/React.createElement("img", {
    src: './assets/roadlive.png',
    id: "unimg",
    alt: "Icon",
    className: "w-full h-full"
  }), /*#__PURE__*/React.createElement("div", {
    "x-data": "{ shown: false , handleIntersect: () => { shown = true; }  }",
    "x-intersect": "handleIntersect()",
    className: "caption"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null))));
}
let inter;
let element;
window.addEventListener('DOMContentLoaded', function () {
  const root = ReactDOM.createRoot(document.querySelector('#app'), {
    throwIfNamespace: false
  });
  console.log(root);
  root.render( /*#__PURE__*/React.createElement(App, null));
  element = document.querySelector('#father');
});
window.addEventListener('keydown', function (event) {
  if (inter) {
    clearTimeout(inter);
  }
  inter = setInterval(move, 10, event);
});
window.addEventListener('keyup', function () {
  clearInterval(inter);
  inter = null;
});
function move(event) {
  console.log(event);
  element = document.querySelector('#father');
  switch (event.key) {
    case "S":
    case "s":
      window.scrollBy(0, 2);
      if (element.offsetTop < 4320) {
        element.style.top = parseInt(element.style.top) + 2 + 'px';
      }
      break;
    case "w":
    case "W":
      window.scrollBy(0, -1.25);
      if (element.offsetTop > 450) {
        element.style.top = parseInt(element.style.top) - 2 + 'px';
      }
      break;
    case "a":
    case "A":
    case "ArrowLeft":
      if (element.offsetLeft > 0) {
        element.style.left = parseInt(element.style.left) - 2 + 'px';
      }
      break;
    case "d":
    case "D":
    case "ArrowRight":
      if (element.offsetLeft < 1920) {
        element.style.left = parseInt(element.style.left) + 2 + 'px';
      }
      break;
    default:
      return;
  }
}