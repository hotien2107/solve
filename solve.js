function solve(){
    var form = document.getElementById("form");

    var formInput1 = document.getElementById("formInput1").value;
    var formInput2 = document.getElementById("formInput2").value;
    var formResult = document.getElementById("formResult");

    var add = document.getElementById("add");
    var sub = document.getElementById("sub");
    var mul = document.getElementById("mul");
    var div = document.getElementById("div");

    var btn_solve = document.getElementById("btn_solve");

    var notification = document.getElementById("notification");

    if(formInput1 == '')
    {
        notification.innerHTML = "<span style = 'margin-left:42px; color: #d7385e; '>Chưa nhập </span>";
        notification.innerHTML += "<span style='color: #d7385e; font-style: italic; font-weight: bold; '>số thứ nhất</span>";
        formResult.value = "";
    }
    else if(formInput2 == '')
    {
        notification.innerHTML = "<span style = 'margin-left:42px; color: #d7385e;'>Chưa nhập </span>";
        notification.innerHTML += "<span style='color: #d7385e; font-style: italic; font-weight: bold; '>số thứ hai</span>";
        formResult.value = "";
    }
    else if(add.checked === false && sub.checked === false && mul.checked === false && div.checked === false)
    {
        notification.innerHTML = "<span style = 'margin-left:42px; color: #d7385e;'>Chưa nhập </span>";
        notification.innerHTML += "<span style='color: #d7385e; font-style: italic; font-weight: bold; '>phép tính</span>";
        formResult.value = "";
    }
    else if(isNaN(formInput1) === true)
    {
        notification.innerHTML = "<span style='margin-left:42px; color: #d7385e; font-style: italic; font-weight: bold; '>số thứ nhất </span>";
        notification.innerHTML += "<span style = 'color: #d7385e;'>không hợp lệ</span>";
        formResult.value = "";
    }
    else if(isNaN(formInput2) === true)
    {
        notification.innerHTML = "<span style='margin-left:42px; color: #d7385e; font-style: italic; font-weight: bold; '>số thứ hai </span>";
        notification.innerHTML += "<span style = 'color: #d7385e;'>không hợp lệ</span>";
        formResult.value = "";
    }
    else 
    {
        notification.innerHTML = "";
        if(add.checked === true)
        {
            formResult.value = parseFloat(formInput1) + parseFloat(formInput2);
        }
        else if(sub.checked === true)
        {
            formResult.value = parseFloat(formInput1) - parseFloat(formInput2);
        }
        else if(mul.checked === true)
        {
            formResult.value = parseFloat(formInput1) * parseFloat(formInput2);
        }
        else if(div.checked === true)
        {
            formResult.value = parseFloat(formInput1) / parseFloat(formInput2);
        }
    }
}
