import { FadeInSection } from './FadeinSection.js';
import { InfoBox } from './InfoBox.js';
import { Entity } from './Entity.js';
const {
  useState
} = React;
const {
  useRef
} = React;
export function About() {
  const father = /*#__PURE__*/React.createElement(Entity, {
    id: "father",
    iconUrl: "./assets/father.png",
    altImg: "./assets/son.png",
    top: "500",
    left: "700",
    width: "150",
    height: "200",
    className: "z-20"
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "about",
    className: "z-[3] absolute top-0 text-subtextcol w-full h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-8 h-full"
  }, /*#__PURE__*/React.createElement(Entity, {
    id: "campfire",
    iconUrl: "./assets/campfire.png",
    altImg: "./assets/0.jpeg",
    top: "500",
    left: "400",
    width: "200",
    height: "210"
  }), /*#__PURE__*/React.createElement(Entity, {
    id: "huy",
    iconUrl: "./assets/thief1.png",
    altImg: "./assets/dead.png",
    top: "1181",
    left: "891",
    width: "200",
    height: "200"
  }), /*#__PURE__*/React.createElement(Entity, {
    id: "huy",
    iconUrl: "./assets/thief2.png",
    altImg: "./assets/dead.png",
    top: "1311",
    left: "1106",
    width: "200",
    height: "200"
  }), /*#__PURE__*/React.createElement(Entity, {
    id: "huy",
    iconUrl: "./assets/thief3.png",
    altImg: "./assets/dead.png",
    top: "1181",
    left: "1250",
    width: "200",
    height: "200"
  }), /*#__PURE__*/React.createElement(Entity, {
    id: "huy",
    iconUrl: "./assets/oldman.png",
    altImg: "./assets/dead.png",
    top: "2512",
    left: "371",
    width: "200",
    height: "200"
  }), /*#__PURE__*/React.createElement(Entity, {
    id: "huy",
    iconUrl: "./assets/gangman.png",
    altImg: "./assets/dead.png",
    top: "2639",
    left: "977",
    width: "200",
    height: "200"
  }), /*#__PURE__*/React.createElement(Entity, {
    id: "huy",
    iconUrl: "./assets/cannibal.png",
    altImg: "./assets/dead.png",
    top: "3229",
    left: "1017",
    width: "200",
    height: "175"
  }), /*#__PURE__*/React.createElement(Entity, {
    id: "huy",
    iconUrl: "./assets/newfather.png",
    altImg: "./assets/dead.png",
    top: "3613",
    left: "915",
    width: "150",
    height: "250"
  }), /*#__PURE__*/React.createElement(Entity, {
    id: "huy",
    iconUrl: "./assets/newmother.png",
    altImg: "./assets/dead.png",
    top: "3650",
    left: "1020",
    width: "125",
    height: "200"
  }), /*#__PURE__*/React.createElement(Entity, {
    id: "huy",
    iconUrl: "./assets/newsister.png",
    altImg: "./assets/dead.png",
    top: "3683",
    left: "1110",
    width: "100",
    height: "150"
  }), /*#__PURE__*/React.createElement(Entity, {
    id: "huy",
    iconUrl: "./assets/newbrother.png",
    altImg: "./assets/dead.png",
    top: "3683",
    left: "1170",
    width: "90",
    height: "150"
  }), /*#__PURE__*/React.createElement(Entity, {
    id: "huy",
    iconUrl: "./assets/newdog.png",
    altImg: "./assets/dead.png",
    top: "3723",
    left: "1230",
    width: "100",
    height: "100"
  }), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Tent",
    top: "350",
    left: "120",
    width: "200",
    height: "100"
  }, "Basic Shelter, symbol of rest and safety"), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Campfire",
    top: "640",
    left: "400",
    width: "200",
    height: "100"
  }, "The only source of warmth in this cold wasteland. This flame symbolizing morality must be kept alive for the next generation."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Destroyed Car",
    top: "700",
    left: "150",
    width: "200",
    height: "100"
  }, "This car has seen better days. The inside is empty and everything has been looted."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Dead Trees",
    top: "500",
    left: "1000",
    width: "200",
    height: "100"
  }, "Flora does not live under these conditions."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Looter Jeep",
    top: "900",
    left: "1100",
    width: "200",
    height: "100"
  }, "Massive truck with armour and spikes all over. There's some blood on the wheels..."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Looters",
    top: "1500",
    left: "1100",
    width: "200",
    height: "100"
  }, "These guys usually come in gangs, better to avoid them while they are distracted with that guy."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Bird",
    top: "1550",
    left: "350",
    width: "200",
    height: "100"
  }, "A fallen falcon. They used to fly in the sky in the past."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Fish",
    top: "1900",
    left: "1000",
    width: "200",
    height: "100"
  }, "The water is not drinkable. No wonder the trout is dead."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Drowned",
    top: "1900",
    left: "150",
    width: "200",
    height: "100"
  }, "Is that...a person?"), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Old Man",
    top: "2650",
    left: "370",
    width: "200",
    height: "100"
  }, "A feeble old man. Maybe killing him is a safe option, but the fire inside is saying otherwise."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Bunker",
    top: "2300",
    left: "130",
    width: "200",
    height: "100"
  }, "Safety, hope, a relic of the past. There are luxury items such as canned beans in here."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Suspicious house",
    top: "2400",
    left: "1100",
    width: "200",
    height: "100"
  }, "Faint wails can be heard from here. There seemed to be...a half eaten leg here, it seems alot bigger than a chicken leg. Not to mention there's man with a shotgun guarding outside..."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Cannibal",
    top: "3350",
    left: "1025",
    width: "200",
    height: "100"
  }, "They will do anything to survive, even eating human flesh."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Fallen Skyscraper",
    top: "3150",
    left: "130",
    width: "200",
    height: "100"
  }, "Leftover of the past."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Family",
    top: "3850",
    left: "1025",
    width: "200",
    height: "100"
  }, "Unsure whether they can be trusted or not, but they must be the \"good guys\" if they don't eat people right? Even the dog is still here."), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Coast",
    top: "4000",
    left: "300",
    width: "200",
    height: "100"
  }, "This is the end of the road for a certain father. However, the child will find hope the sea of possiblities."), father)));
}