var number = document.getElementById('counter')
var add = document.getElementById('addition')
var minus = document.getElementById('subtract')

var number = 0;

add.addEventListener('click',function(){
    
    number = number + 1;
    counter.innerHTML = number
    if(number > 0){
        counter.style.color = "green";
    }else{
        console.log()
    }
    
    
})
minus.addEventListener('click',function(){
    number = number - 1;
    counter.innerHTML = number
    if(number < 0){
    counter.style.color = "red";
    } else{
        console.log()
    }
})