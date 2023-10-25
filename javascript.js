const srchInput = document.querySelector(".srch");
const addBtn = document.querySelector(".btn");
const todoList = document.querySelector(".ulTag");

let todoEdit= null;

const addTodo = ()=>{
    // console.log(srchInput.value.length)

    if(srchInput.value.length ==0)
    {
        alert("Please write something");
        // return false
    }
    else if(addBtn.value ==="Edit")
    {
        todoEdit.target.previousElementSibling.innerText = srchInput.value;
        srchInput.value = "";
        addBtn.value = "Add";
        saveData();

    }
    else{

        const list = document.createElement("li");
        const para = document.createElement("p");
        list.appendChild(para);
        para.classList.add("text");

        const edit =document.createElement("span");
        edit.style.color ="#37ab3b";
        edit.innerHTML  ="Edit";
        list.appendChild(edit);

        const remove =document.createElement("span");
        remove.style.color ="#f72929";
        remove.innerText = "Remove";
        list.appendChild(remove);

        todoList.appendChild(list);


        // 

        para.innerText =srchInput.value;
        srchInput.value ="";
        saveData();
    }
}

const updateTodo = (e)=>{
    
    if(e.target.innerText =="Remove")
    {
        
        e.target.parentElement.style.transform = "translateX(-300px)"
        setTimeout(()=>{
            todoList.removeChild(e.target.parentElement)
            saveData();
        },200)
       
        
    }

    else if(e.target.innerText == "Edit"){
        srchInput.value = e.target.previousElementSibling.innerText;
        addBtn.value = "Edit";
        srchInput.focus();
        todoEdit=e;
    }
}


const saveData = ()=>{
    localStorage.setItem("data",todoList.innerHTML)
}

const GetData =()=>{
    todoList.innerHTML = localStorage.getItem("data");
}

GetData();
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click",updateTodo);






