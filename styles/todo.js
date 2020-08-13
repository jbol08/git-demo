

let form = document.getElementById("newForm");
let taskList = document.getElementById("taskList");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    const newLi = document.createElement("li");
    newLi.innerText = document.getElementById("task").value;
     
    
  
    taskList.appendChild(newLi);
    newLi.appendChild(removeButton);
    form.reset();
    
  }); 

  taskList.addEventListener("click", function(event) {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "button"){
        event.target.parentElement.remove();
        
          } else {
            if (targetTagToLowerCase === 'li') {
                event.target.style.textDecoration = "line-through";
          }
      }
});
