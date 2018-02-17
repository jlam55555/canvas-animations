var canvas = document.getElementById("canvas");
var width, height, hWidth, hHeight;
var ctx = canvas.getContext("2d");

// use this to update dimensions of canvas and adjust variables accordingly
function updateDim(w, h) {
  canvas.width = width = w;
  canvas.height = height = h;
  hWidth = width / 2;
  hHeight = height / 2;
}
updateDim(canvas.width, canvas.height);

// colors from https://material.io/guidelines/style/color.html#color-color-palette
var r1 = "#e57373";
var r2 = "#f44336";
var r3 = "#d32f2f";
var o1 = "#ffb74d";
var o2 = "#ff9800";
var o3 = "#f57c00";
var y1 = "#fff176";
var y2 = "#ffeb3b";
var y3 = "#fbc02d";
var g1 = "#81c784";
var g2 = "#4caf50";
var g3 = "#388e3c";
var b1 = "#64b5fc";
var b2 = "#2196f3";
var b3 = "#1976d2";
var p1 = "#ba68c8";
var p2 = "#9c27b0";
var p3 = "#7b1fa2";
var w = "white";
var bl = "black";