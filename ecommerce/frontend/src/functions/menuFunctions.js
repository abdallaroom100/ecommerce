// show and close menu
export const menuClick = () => {
  document.querySelector(".home")?.classList?.toggle("hide");
  document.querySelector(".mobile-menu").classList.toggle("select");
  document.body.classList.toggle("stop-scroll");
};

//   show list of items
// export const showItemListOne = (e) => {
//   e.target.parentElement.parentElement.childNodes[1].classList.toggle("show");
// };

// click to svg

// export const showItemListTwo = (e) => {
//   e.target.parentElement.parentElement.parentElement.childNodes[1].classList.toggle(
//     "show"
//   );
// };
