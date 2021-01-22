function Adjust(){
    if(checkName()&&checkNumber()&&checkCode()){
        alert("修改成功");
    }else{
        alert("格式错误");
    }
}

function checkName(){    //检查用户名是否为空
    if(document.getElementById("name").value==""){
        return false;
    }else{
        return true;
    }
}

function checkNumber(){  //检查手机号
    var str=document.getElementById("tel").value;
    var Reg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if(Reg.test(str)){
        return true;
    }else{
        return false;
    }
}

function checkCode(){  //检查密码
    var str=document.getElementById("code").value;
    var Reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d]{2})(?=.*[#,&,*,?,@])[A-Za-z\d#&*?@]{9,15}$/;
    if(Reg.test(str)){
        return true;
    }else{
        return false;
    }
}