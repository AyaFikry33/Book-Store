$(document).ready(function(){ 
    //Elements
    const logoutBtn = document.querySelector(".logout");
    const forms = Array.from(document.querySelectorAll("form"));
    const content = document.querySelector("section .content")
    const headerForm = document.querySelector("section .header h3");
    const plusIcon = document.getElementsByClassName("fa-plus")[0]

    //Event Listener
    logoutBtn.addEventListener("click", logout)
    plusIcon.addEventListener("click", newProductOrder)

    //Functions
    function logout(){
        window.location.href = 'login.html';
    }

    function newProductOrder(){
        console.log("Aya")
        var div = document.createElement("div");
        div.classList.add("row")
        div.innerHTML = `<div class="col">
                            <input type="text" class="form-control" placeholder="Name">
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Price">
                        </div>
                        <div class="col">
                            <input type="number" class="form-control" placeholder="Quantity">
                        </div>`
        document.getElementsByClassName("add")[0].appendChild(div)
    }
    
    window.onload = function () {
        const x = JSON.parse(localStorage.getItem('x'))
        forms.forEach(targetform => {
            if(targetform.id == x){
                headerForm.innerText = `${x}`
                targetform.classList.add("show")
                content.appendChild(targetform)
            }else{
                targetform.classList.remove("show")
                content.appendChild(targetform)
            }
        })
    }()
})