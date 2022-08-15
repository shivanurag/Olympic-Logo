canvas=document.getElementById("OLC");
ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle ="black";
ctx.lineWidth = 3;
ctx.rect(143, 157, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 5;
ctx.strokeStyle="blue";
ctx.arc(260,240,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 5;
ctx.strokeStyle="black";
ctx.arc(360,240,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 5;
ctx.strokeStyle="red";
ctx.arc(460,240,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 5;
ctx.strokeStyle="yellow";
ctx.arc(310,280,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 5;
ctx.strokeStyle="green";
ctx.arc(410,280,40,0,2 * Math.PI);
ctx.stroke();



