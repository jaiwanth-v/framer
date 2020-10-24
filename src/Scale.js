function scale() {
  const actualWidth = 1524;
  const actualHeight = 1014;
  let width = document.documentElement.clientWidth;
  let zoom = width / actualWidth;
  document.body.style.transform = `scale(${zoom})`;
  document.body.style.transformOrigin = "0 0";
  let height = actualHeight / zoom;
  document.querySelector(".canvas-container").style.width = `${913 * zoom}px`;
  document.querySelector(".canvas-container").style.height = `${
    actualHeight * zoom
  }px`;
  document.querySelector(".footer__text").style.top = `${height + 80}px`;
}

export function Scale() {
  scale();
  window.addEventListener("resize", () => {
    scale();
  });
}
