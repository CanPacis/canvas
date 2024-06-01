import map from "./screens/map";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d")!;

const animate = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  map.render(context);
  map.update();
  
  requestAnimationFrame(animate);
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
animate();