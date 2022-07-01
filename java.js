// iThis project used some basic functions such as addition and deletion to search for the url
let book_name = document.getElementById("book_name");
let url_Book = document.getElementById("url_Book");
let submit_book = document.getElementById("submit_book");
var proudactcontanier;
if (localStorage.getItem("proudactcontanier") == null) {
  proudactcontanier = [];
} else {
  //get iteam
  proudactcontanier = JSON.parse(localStorage.getItem("proudactcontanier"));

  display();
}
submit_book.addEventListener("click", function (e) {
  // Default  action
  e.preventDefault();
  // all function
  add_book();
  clear();
  display();

});

//  add book mark

function add_book() {
  let book_mark = {
    proudactproudact: book_name.value,
    sit_url: url_Book.value,
  };
  proudactcontanier.push(book_mark);
  //  add book mark

  localStorage.setItem("proudactcontanier", JSON.stringify(proudactcontanier));
}
//  add display bookmark  value

function display() {
  //display bookmarks
  var temp = "";
  for (i = 0; i < proudactcontanier.length; i++) {
    temp += `
        <div class="col mt-5">
            <h6>${proudactcontanier[i].proudactproudact}</h6>
            <button class="btn btn-success d-inline vi"><a  target="_blank"  href="${proudactcontanier[i].sit_url}">visit</a></button>
            <button onclick="delet(${i})" class="btn btn-danger d-inline  del">delet</button></a>
    </div> 
  `;
    //display bookmarks
    document.getElementById("row_date").innerHTML = temp;
  }
}

// empty  bookmark value in input

function clear() {
  let inputs = document.getElementsByClassName("form-control");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
//delet form  Array
function delet(id) {
  proudactcontanier.splice(id, 1);
  //set iteam in localStorage
  localStorage.setItem("proudactcontanier", JSON.stringify(proudactcontanier));

  display();
}

//end project
