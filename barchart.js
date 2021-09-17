"use strict";

window.addEventListener("DOMContentLoaded", loop);

const queue = [
  3, 10, 24, 5, 9, 17, 30, 25, 12, 2, 6, 19, 17, 32, 27, 16, 4, 21, 26, 4, 30,
  23, 6, 1, 32, 25, 16, 3, 8, 14, 3, 9, 16, 32, 30, 7, 13, 16, 4, 29,
];
console.log(queue);
let counter = 0;

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function loop() {
  counter++;
  let queueSize = getNumberOfCustomers();
  queue.unshift(queueSize);
  displayData();
  console.log(queue.slice(1, 40));
  setTimeout(loop, 1000);
}

function displayData() {
  for (let i = 0; i < 40; i++) {
    console.log(i);
    const bar = document.querySelector(".bar");
    bar.style.height = queue[i] * 10 + "%";
    console.log(bar.style.height);
    document.querySelector("#bars").append(bar);
  }
}
