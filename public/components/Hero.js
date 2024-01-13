import { FadeInSection } from './FadeinSection.js';
export function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    id: "home",
    className: "flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "z-[2] absolute top-0 grid grid-cols-1 grid-rows-1 lg:grid-rows-1 lg:grid-cols-1 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "z-[2] h-[400px] flex flex-col justify-center items-center"
  }, /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("div", {
    className: "titlefont font-extrabold text-transparent text-center text-3xl sm:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 duration-700"
  }, "A Walk on the Road")), /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-100 font-bold text-1xl sm:text-1xl lg:text-3xl"
  }, "Dawson Li")), /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-100 font-bold text-m sm:text-1xl lg:text-xl"
  }, "Based on the novel:")), /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("div", {
    className: "titlefont font-extrabold text-transparent text-center text-3xl sm:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 duration-700"
  }, "The Road")), /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-100 font-bold text-1xl sm:text-1xl lg:text-3xl"
  }, "Cormac McCarthy")))));
}