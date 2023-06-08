"use strict";

let list = [];
let listUl = document.getElementById("l1");


function screen() {
    let data = "";
    
    for (let i = 0; i < list.length; i++) {
        data += ` <li class="list-group-item d-flex justify-content-between">${list[i]} <button onclick="Delete(${i})" class="btn btn-danger btn-sm">Delete</button> </li>`;
    }
    
    listUl.innerHTML = data;
}

function todo() {
  let inp = document.getElementById("inp");

  if (inp.value.trim() === "") {
    Swal.fire('No data here. Please try again later!')

    return;
  }

  if (list.includes(inp.value)) {
  Swal.fire('This item already exists. Please try again later!')

  return;
}

  list.push(inp.value);
  inp.value = "";
  screen();
  
}



function Delete(ind) {
  list.splice(ind, 1);
    screen();
}