let gons = document.querySelectorAll(".gon")
let fons = document.querySelector(".fon")

gons.forEach((gon)=>{
    gon.addEventListener("dragover",(e) =>{
       e.preventDefault();
    })
    gon.addEventListener("drop" , (e)=>{
        gon.appendChild(fons);
    })
})
