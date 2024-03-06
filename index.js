let btn1 = document.querySelector('.button-1')
let btn2 = document.querySelector('.button-2')
let btn3 = document.querySelector('.button-3')
let text = document.querySelector('.card-text')



btn2.addEventListener('click', function () {
    text.textContent = text.textContent *1+1
})

btn3.addEventListener('click' , function(){
    text.textContent = '0'
    
})

btn1.addEventListener('click' , function(){
    text.textContent = text.textContent *1-1

})