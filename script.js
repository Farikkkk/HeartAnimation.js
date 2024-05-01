const heart = document.querySelector("span");
const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  let posX = e.offsetX;
  let posY = e.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = posX + "px";
  spanEl.style.top = posY + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  body.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
