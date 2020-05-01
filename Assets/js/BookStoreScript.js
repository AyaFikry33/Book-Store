$(document).ready(function(){ 
    var addbtn = document.getElementById("add");
    var table = document.getElementsByTagName("table")[0]
    addbtn.addEventListener("click", function(){
        table.innerHTML += `<tr>
                            <td><input type="checkbox"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                        </tr>`
    })
}); 

var a = document.querySelectorAll("nav .navbar-nav .nav-item a")
a.forEach(element => {
    element.addEventListener("click", function(e){
        var x = e.target.getAttribute("link")
        document.getElementById(x).style.display = "block"
    
    })
}); 