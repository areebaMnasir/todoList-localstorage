const user = document.getElementById("user");
const taskcontainer = document.getElementById("listcontainer");

let arr = JSON.parse(localStorage.getItem("task"))

const show = () =>{
  taskcontainer.innerHTML = "";
  arr.map((data,id) =>{
        // taskcontainer.innerHTML += `
        // <div>${data.text} </div><div><i class="fa fa-xmark" onclick="deleteEach(${id})"></i>
        //         <i class="fa fa-pencil" onclick="update(${id})"></i></div>
        // `
       taskcontainer.innerHTML += `   <div class="list">
       <div class="task">
        ${data.text}
       </div>
       <div class="icon">
         <i class="fa fa-xmark" onclick="deleteEach(${id})"></i>
         <i class="fa fa-pencil" onclick="update(${id})"></i>

       </div>
     </div>
     
       `
         user.value = "";
     })
}
if(!arr){
  taskcontainer.innerHTML = "<div>Enter data here</div>"
}
else{
  show()
}

const Add = () =>{
  arr = !arr ? [] : arr;
  var list = {text : user.value};
  arr.push(list);
  localStorage.setItem("task" , JSON.stringify(arr));
  user.value = "";
console.log(list);
  show()

}

// const deleteEach = (id) =>{
//     arr.splice(id , 1);
//     console.log(arr , id);
//     localStorage.setItem("task", JSON.stringify(arr));
//     arr = [] ;
// }

const clearAll = () =>{
  arr = [];
  taskcontainer.innerHTML = "";
  localStorage.setItem("task", JSON.stringify(arr))
}

const update = (id) =>{
  var update = prompt("Please tell the update!");
  arr[id].text = update ;
  localStorage.setItem("task", JSON.stringify(arr));
  show()
}

const deleteEach = (id) =>{
  arr.splice(id,1);
  console.log(arr , id)
  localStorage.setItem("task" , JSON.stringify(arr));
  show();
}



    
    