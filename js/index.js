function displayForm() {
  document.querySelector("#accueil-page").style.display = "none";
}

//MENU
const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
    element.classList.remove(stringClass);else

    element.classList.add(stringClass);
  };

  init();
})();

//Agrandir image au clic (CODE DYLAN)
// $("document").ready(function () {
//   $(".section-1-bloc").on("click", function (e) {
//     if (!$(this).hasClass("active")) {
//       // Si la div à la class
//       $(".section-1-bloc").removeClass("active"); // On enlève la classe des autres div
//       $(this).addClass("active"); // On active la class de la div en question
//       e.stopPropagation();
//     } else {
//       $(".section-1-bloc").removeClass("active"); // La class de toutes les div
//     }
//   });
// });

  //dérouler carte projet
  $("document").ready(function () {
    $(".cont_modal").on("click", function (e) {
      if (!$(this).hasClass("cont_modal_active")) {
        // Si la div à la class
        $(".cont_modal").removeClass("cont_modal_active"); // On enlève la classe des autres div
        $(this).addClass("cont_modal_active"); // On active la class de la div en question
        e.stopPropagation();
      } else {
        $(".cont_modal").removeClass("cont_modal_active"); // La class de toutes les div
      }
    });
  });
