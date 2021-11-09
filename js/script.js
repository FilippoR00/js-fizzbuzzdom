const ul = document.querySelector("ul");

for(let i=1; i <= 100; i++){
    if(i % 15 == 0){
        ul.innerHTML += `<li class="box FizzBuzz">FizzBuzz</li>`;
        console.log(i + " FizzBuzz ");
    } else if (i % 5 == 0){
        ul.innerHTML += `<li class="box Buzz">Buzz</li>`;
        console.log(i + " Buzz ");
    } else if (i % 3 == 0){
        ul.innerHTML += `<li class="box Fizz">Fizz</li>`;
        console.log(i + " Fizz ");
    } else {
        ul.innerHTML += `<li class="box">${i}</li>`;
        console.log(i);
    }
}