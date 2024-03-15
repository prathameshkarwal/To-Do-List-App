const inputBox = document.getElementById( "input-box" );
const listContainer = document.getElementById( "list-container" );

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");//creating a new <li> element 
        li.innerHTML = inputBox.value; //giving the text of the input box to <li>
        listContainer.appendChild(li); // to display under ul as its li (child)
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; //cross mark in unicode
        li.appendChild(span); //to put cross mark inside <li>
    }

    inputBox.value = ""; //clearing the input field after adding task
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");//checked the  checkbox when we click on it
        saveData();
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();  // remove list item
        saveData();
    } 
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}//saving data into local storage

function showTask() {
    listContainer.innerHTML =localStorage.getItem("data")
}//showing saved tasks from local storage
showTask(); 