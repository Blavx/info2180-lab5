function buttons(){
    var lookup1= document.getElementById("lookup");
    lookup1.addEventListener("click",function(e) {
        e.preventDefault();
        var text1 = (document.getElementById("country").value);
        $.ajax({
            type: 'GET',
            url: `world.php?country=${text1}`,
            success: function (data) {
                $("#result").html(data);
            }
        });        
    });
}
window.onload=buttons;