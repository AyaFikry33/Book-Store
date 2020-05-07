$(document).ready(function(){ 
    //Elements
    const logoutBtn = document.querySelector(".logout");
    const forms = Array.from(document.querySelectorAll("form"));
    const content = document.querySelector("section .content")
    const headerForm = document.querySelector("section .header h3");

    //Event Listener
    logoutBtn.addEventListener("click", logout)

    //Functions
    function logout(){
        window.location.href = 'login.html';
    }

    
    $(window).on("load", ()=>{
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
    })
})