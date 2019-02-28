var fileName
var userdata = JSON.parse(localStorage.getItem('userdata'))

    $('input[type="file"]').change(function(e){
    var filePath=$('#fileUpload').val();
        console.log(filePath)
        fileName = e.target.files[0].name;
        var filesize = e.target.files[0].size;
        $('p#fn').append('file name: '+fileName +'<br>'+'file size: '+filesize+'<br>')
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#upImg').attr('src', e.target.result);
                img=$("#upImg").attr("src")
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#file").change(function(){
        readURL(this);
    });

    $('button#upload').click(function(){
        event.preventDefault();
    $.ajax({
        url:" http://localhost:3000/designStyles",
         type:"POST",
         contentType:'application/x-www-form-urlencoded;charset=utf-8',
         
         data:{
            "userId":userdata.id,
            "img":'..//assets//image//'+fileName
         },
         dataType:'json',
         success:function(res){
     
         },
         error:function(){
           console.log('error')
         }
        })
    })