"use strict"
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
let input = document.getElementById('item');

// Form submit event
form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e) {
   e.preventDefault();
   
   let newItem = document.getElementById('item').value;

   let li = document.createElement('li');

   li.className = 'list-group-item';

   li.appendChild(document.createTextNode(newItem));

   let deleteBtn = document.createElement('button');

   deleteBtn.classList = 'btn btn-danger btn-sm float-end delete';

   deleteBtn.appendChild(document.createTextNode('X'));
   li.appendChild(deleteBtn);

   itemList.appendChild(li);

   input.value = "";
}

   // delete remove

function removeItem(e) {
   if(e.target.classList.contains('delete')) {
      if(confirm('Age You sure ?')) {
         let li = e.target.parentElement;
         itemList.removeChild(li);
      }
   }
}

function filterItems(e) {
   let text = e.target.value.toLowerCase();
   let items = itemList.getElementsByTagName('li');

   Array.from(items).forEach(function(item) {
      let itemName = item.firstChild.textContent;
      
      if(itemName.toLowerCase().indexOf(text) != -1) {
         item.style.display = 'block';
      } else {
         item.style.display = 'none';
      }
   });
};