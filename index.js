let countEl = document.getElementById("count-el");
let saveBtn = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let saveEntries = count + " - ";
    saveEl.textContent += saveEntries;
    count = 0;
    countEl.textContent = count;
}
  