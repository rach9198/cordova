var num = document.getElementById("display");

function calc(obj) 
{
    var pushed = obj.innerHTML;
    
    if(pushed == "=") {
        num.innerHTML = eval(num.innerHTML);   
    }
    else if(pushed == "AC") {
        num.innerHTML = "0";
    }
    else if(pushed == "DEL") {
        num.innerHTML = num.innerHTML.substr(0, num.innerHTML.length - 1);
    }
    else {
        if(num.innerHTML == "0") {
            num.innerHTML = pushed;
        }
        else {
            num.innerHTML = num.innerHTML + pushed;
        }
    }   
}
