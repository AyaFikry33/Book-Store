$(document).ready(function(){ 
    // navbar 
    var a = document.querySelectorAll("nav .navbar-nav .nav-item a")
    a.forEach(element => {
        var linkAttrValue = element.getAttribute("link")
        console.log(linkAttrValue);
        element.addEventListener("click", function(e){
            var x = e.target.getAttribute("link")
            document.getElementById(x).style.display = "block";    
        })
    }); 

    // filtering recurring profiles 
    $("#recurring-Input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#recurring-table tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // filtering customers 
    $("#customer-Input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#customer-table tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // filtering suppliers 
    $("#supplier-Input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#supplier-table tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
}); 