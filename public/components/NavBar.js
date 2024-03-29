export function NavBar(props) {
  const handleClick = id => {
    console.log(id);
    let page = document.querySelector(id);
    page.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "z-[5] fixed top-0 w-full flex justify-around md:justify-between px-2 md:px-24 py-2 duration-700 ",
    style: {
      height: '10vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center px-2 md:w-1/3 text-subtextcol duration-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-extrabold titlefont text-navtextcol text-xl titlefont"
  }, "Dawson Li")), /*#__PURE__*/React.createElement("ul", {
    className: "font-extrabold text-navtextcol flex justify-around items-center py-2 mt-0 h-full w-2/3 md:w-4/5 rounded-2xl bg-backgroundcol bg-opacity-40 text-3xl"
  }, /*#__PURE__*/React.createElement("li", {
    onClick: () => handleClick("#about"),
    className: "flex items-center my-2 px-2 md:px-8 py-0 text-base sm:text-xl rounded md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-700 h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "titlefont"
  }, " START")), /*#__PURE__*/React.createElement("li", {
    onClick: () => handleClick("#home"),
    className: "flex items-center my-2 px-2 md:px-8 py-0 text-base sm:text-xl rounded md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-700 h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "titlefont"
  }, " END"))));
}
// const root = ReactDOM.createRoot(document.querySelector('#navbar'));
// root.render(<Navbar />);