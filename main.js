// (async () => {
//   await new GitHubCalendar(".calendar", "joshuasilva414", { responsive: true });
// })();

var menuOpen = false;

const body = document.querySelector("body");
const menu = document.querySelector("aside");

function toggleOpen(btn) {
  btn.classList.toggle("opened");
  btn.classList.toggle("open-animation");
  btn.setAttribute(
    "aria-expanded",
    btn.classList.contains("opened").toString()
  );
  body.classList.toggle("no-scroll");
  menu.classList.toggle("opened");
  menuOpen = !menuOpen;
}

document.querySelector(".menu").addEventListener("click", (e) => {
  toggleOpen(e.target);
});
