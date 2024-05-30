const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');
let drawing = false;

canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 100;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing(event) {
    drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

function stopDrawing() {
    drawing = false;
    context.closePath();
}

function draw(event) {
    if (!drawing) return;
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = '#000';
    
    context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    context.stroke();
}
