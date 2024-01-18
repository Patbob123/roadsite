import { FadeInSection } from './FadeinSection.js';
const {
  useState
} = React;
export function Entity(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [iconImage, setIconImage] = useState(props.iconUrl);
  const [dreamState, setDream] = useState(0);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const kill = () => {
    document.getElementById("gun").play();
    if (props.id == "father") {
      window.close();
    }
    setIconImage(props.altImg);
  };
  const change = () => {
    console.log(document.querySelector("#fatherimg"));
    document.querySelector("#fatherimg").src = "./assets/son.png";
    document.querySelector("#father").dataset.isS = true;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: props.id,
    onMouseLeave: () => setIsOpen(false),
    onClick: togglePopup,
    style: {
      width: `${props.width}px`,
      height: `${props.height}px`,
      left: `${props.left}px`,
      top: `${props.top}px`
    },
    className: `absolute transition ease-in-out p-4 flex lg:flex justify-center rounded-2xl transform md:hover:-translate-y-1 md:hover:scale-125 md:hover:bg-opacity-80 md:hover:text-hovertxtcol duration-200`
  }, isOpen && !document.querySelector("#father").dataset.isS && props.id == "father" && /*#__PURE__*/React.createElement("div", {
    style: {
      top: `-45px`
    },
    onClick: () => setDream(1),
    className: "text-xs absolute bg-subbgcol shadow-2xl transition ease-in-out p-2 flex lg:flex-col justify-between  border-2 border-bordercol rounded-2xl box-border transform md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-100 text-xs lg:text-center"
  }, "Dream")), isOpen && document.querySelector("#father").dataset.isS && props.id == "father" && /*#__PURE__*/React.createElement("div", {
    style: {
      top: `-45px`
    },
    onClick: () => setDream(2),
    className: "text-xs absolute bg-subbgcol shadow-2xl transition ease-in-out p-2 flex lg:flex-col justify-between  border-2 border-bordercol rounded-2xl box-border transform md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-100 text-xs lg:text-center"
  }, "Dream")), isOpen && props.id != "campfire" && /*#__PURE__*/React.createElement("div", {
    style: {
      top: `-10px`
    },
    onClick: kill,
    className: "text-xs absolute bg-subbgcol shadow-2xl transition ease-in-out p-2 flex lg:flex-col justify-between  border-2 border-bordercol rounded-2xl box-border transform md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-100 text-xs lg:text-center"
  }, "Use Gun")), isOpen && props.id == "campfire" && /*#__PURE__*/React.createElement("div", {
    style: {
      top: `-10px`
    },
    onClick: change,
    className: "text-xs absolute bg-subbgcol shadow-2xl transition ease-in-out p-2 flex lg:flex-col justify-between  border-2 border-bordercol rounded-2xl box-border transform md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-100 text-xs lg:text-center"
  }, "Pass on the Fire")), dreamState == 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      top: `-200px`
    },
    onClick: () => setDream(0),
    className: "z-10 w-[800px] h-[600px] text-xs fixed bg-subbgcol shadow-2xl transition ease-in-out p-2 flex lg:flex-col justify-between  border-2 border-bordercol rounded-2xl box-border transform md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center flex-col lg:flex-row lg:w-full"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/fatherdream.png",
    alt: "Icon",
    className: ""
  }))), dreamState == 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      top: `-200px`
    },
    onClick: () => setDream(0),
    className: "z-10 w-[800px] h-[600px] text-xs fixed bg-subbgcol shadow-2xl transition ease-in-out p-2 flex lg:flex-col justify-between  border-2 border-bordercol rounded-2xl box-border transform md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center flex-col lg:flex-row lg:w-full"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/sondream.png",
    alt: "Icon",
    className: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:items-center lg:justify-around flex-grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl lg:text-2xl lg:text-center"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "text-base lg:text-xl underline"
  }, props.children)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center flex-col lg:flex-row lg:w-full"
  }, /*#__PURE__*/React.createElement("img", {
    id: props.id + "img",
    src: iconImage,
    alt: "Icon",
    className: ""
  }))));
}