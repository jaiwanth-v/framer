function scale() {
  const actualWidth = 1524;
  let width = document.documentElement.clientWidth;
  let zoom = width / actualWidth;
  document.body.style.transform = `scale(${zoom})`;
  document.body.style.transformOrigin = "0 0";
}

export function Scale() {
  scale();
  window.addEventListener("resize", scale);
}
