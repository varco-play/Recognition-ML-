export const drawRect = (detections, ctx) => {
  detections.forEach((prediction) => {
    //Get prediction results
    const [x, y, w, h] = prediction["bbox"];
    const text = prediction["class"];

    const color = "red";
    ctx.strokeStyle = color;
    ctx.font = "18px Arial";
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, w, h);
    ctx.stroke();
  });
};
