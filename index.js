const btn = document.querySelector(".add-btn")
const input = document.querySelector("#input-field")
const list = document.querySelector("#list")
const filter = document.querySelector("#filter")
const all = document.querySelectorAll(".select")




 

btn.addEventListener("click", function(e){
    e.preventDefault()
    console.log("aksjgydiauc");
    const  txt = input.value
    const todiv = document.createElement("div")
   
    const appendlist =document.createElement("li")
    appendlist.classList.add("list-styling")
    appendlist.innerHTML = txt
    input.value = ''
    todiv.appendChild(appendlist)


    const deletebtn = document.createElement("btns")
    deletebtn.classList.add("delete")
    deletebtn.innerHTML = "❌"
    appendlist.appendChild(deletebtn)
    todiv.appendChild(appendlist)


    const tickbtn = document.createElement("btns")
    tickbtn.classList.add("tick")
    tickbtn.innerHTML = "✔"
    appendlist.appendChild(tickbtn)
    todiv.appendChild(appendlist)



    list.appendChild(todiv)
    //  list.appendChild(appendlist)
    // list.appendChild(tickbtn)
    
})
 


list.addEventListener("click", (e)=>{
    const item = e.target
    console.log(item);
    if(item.classList[0] === "tick")
    {
      const list = item.parentElement
      console.log(list);
      list.classList.toggle("active")
        
     }

    

     if(item.classList[0] === "delete")
     {
        const list = item.parentElement
        list.classList.toggle("deletebtn")
        list.addEventListener('transitionend', function(){
            list.remove()
          })
     }
 

})
 
// filter.addEventListener("click", function(e){
//   const choose = e.target.innerText
//    console.dir(choose)
// })

 all.addEventListener("click", function(){
  console.log("wlwlwlwllw");
 })