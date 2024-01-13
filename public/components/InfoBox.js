import { FadeInSection } from './FadeinSection.js';
export function InfoBox(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${props.width}px`,
      height: `${props.height}px`,
      left: `${props.left}px`,
      top: `${props.top}px`
    },
    className: `absolute`
  }, /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("div", {
    className: `scale-50 bg-subbgcol shadow-2xl transition ease-in-out p-4 flex lg:flex-col justify-between  border-2 border-bordercol rounded-2xl box-border transform md:hover:-translate-y-2 md:hover:bg-opacity-50 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200
                     md:hover:scale-1000`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:items-center lg:justify-around flex-grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:text-center"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "text-base lg:text-xs"
  }, props.children))))));
}