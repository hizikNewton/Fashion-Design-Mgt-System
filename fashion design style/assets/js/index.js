var userdb
    $('#login').click(function(e){

        $.ajax({
            url:"http://localhost:3000/users",
            type:"GET",
            contentType:'application/x-www-form-urlencoded;charset=utf-8',
            
            dataType:'json',
            success:function(res){
                userdb = res
                email = $('input#loginEmail').val()
                password = $('input#loginPassword').val()
                
                var isAuthenticated = userdb.findIndex(user=>(user.email === email) && (user.password === password)
                )
                    console.log(isAuthenticated)
                if (isAuthenticated == -1){
                    $("p#loginErrMsg").show()
                }
                else{
                    window.location.href = "createStyle.html";
                        index = isAuthenticated+1
                        $.ajax({
                            url:"http://localhost:3000/users/"+index+'/',
                            type:"GET",
                            success:function(res){
                                console.log(res.id)
                                localStorage.setItem('userdata',JSON.stringify(res))
                            },
                            error:function(){
                                console.log('error');
                                }
                        })
                }
            },
            
            error:function(){
            console.log('error');
            }
                })
            })

    $('button#SignUp').click(function(){
        event.preventDefault();
        name = $('input#name').val() 
         email = $('input#email').val()
        username = $('input#username').val()
        password = $('input#password').val()
        password2 = $('input#password2').val()
        if (name&&email&&username&&password&&password2){
            if(password==password2){
            $.ajax({
            url:"http://localhost:3000/users",
            type:"POST",
            contentType:'application/x-www-form-urlencoded;charset=utf-8',
            
            data:{
                "name":name,
                "email":email,
                "username":username,
                "password":password,
                "password2":password2
            },
            dataType:'json',
            success:function(res){
                window.location.href = "createStyle.html";
                localStorage.setItem('userdata',JSON.stringify(res))
        
            },
            
            error:function(){
            console.log('error');
            }
                })
            }
        }
        else(
            alert("All fields are required")
        )
        
    });

   