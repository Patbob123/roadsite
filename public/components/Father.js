const {
  useState
} = React;
export function Entity(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [iconImage, setIconImage] = useState(props.iconUrl);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const kill = () => {
    setIconImage(props.altImg);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "father",
    onClick: togglePopup,
    style: {
      width: `${props.width}px`,
      height: `${props.height}px`,
      left: `${props.left}px`,
      top: `${props.top}px`
    },
    className: `absolute bg-subbgcol shadow-2xl transition ease-in-out p-4 flex lg:flex-col justify-between  border-2 border-bordercol rounded-2xl box-border transform md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200`
  }, isOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      top: `-50px`
    },
    onClick: kill,
    className: "text-xs absolute absolute bg-subbgcol shadow-2xl transition ease-in-out p-2 flex lg:flex-col justify-between  border-2 border-bordercol rounded-2xl box-border transform md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200"
  }, "Use Gun"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:items-center lg:justify-around flex-grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl lg:text-2xl lg:text-center"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "text-base lg:text-xl underline"
  }, props.children)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center flex-col lg:flex-row lg:w-full"
  }, /*#__PURE__*/React.createElement("img", {
    src: iconImage,
    alt: "Icon",
    className: "w-16 h-16 lg:w-24 lg:h-24 duration-100"
  }))));
}