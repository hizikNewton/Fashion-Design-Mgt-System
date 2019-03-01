

var userdata = JSON.parse(localStorage.getItem('userdata'))
var userUploadImg =[]
$(document).ready(function() {

$.ajax({
    type: "GET",
    url:  "http://localhost:3000/designStyles",
    dataType: 'json',
    success: function(res){
        for (i=0;i<res.length;i++){
            if(res[i].userId==userdata.id){
                userUploadImg.push(res[i])
            }

        }
        for(i=0;i<userUploadImg.length;i++){
            var id = 'img'+i
            var img = userUploadImg[i].img
            var mydiv = `<div class="card" style="width: 18rem;">
                            <img src=${img} id= ${id} class="card-img-top" alt="...">
                         
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                              </div>`
            $(imageGallery).prepend(mydiv)
            
        }
    }
});

    $("div#imageGallery.card-group").click(function(event) {
        var id = event.target.id
        var imgsrc =  document.getElementById(id).src
        $("#displayBox").html(`<img src=${imgsrc} id= ${id}>`).toggle()

});
});