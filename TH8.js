let num = 0
let total = +num;
while (true) {
    num = +prompt('nhập số bất kỳ');
    if(num == -1){
        break;
    }
    else{
        total = total + num;
        alert(total)
    }
}
alert(total)