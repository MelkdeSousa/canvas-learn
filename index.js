
const canvas = document.getElementById('canvas');
const ctxCanvas = canvas.getContext('2d');

// Rectangle red
ctxCanvas.fillStyle = "rgb(200,0,0)";
ctxCanvas.fillRect(10, 10, 55, 50);

// Rectangle blue
ctxCanvas.fillStyle = "rgba(0, 0, 200, 0.5)";
ctxCanvas.fillRect(30, 30, 55, 50);
