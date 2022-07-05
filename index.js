// #1

// function call() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }
// call()

// #2

// function getOnlyUpperCase(txt) {
//   txt.split("").forEach(item => {
//     if(item.match(/[A-Z]/)){
//       console.log(item); 
//     }
//   })
// }

// getOnlyUpperCase("Hello WoRLD!!!");

// let num = document.querySelector(".box__time");

// #3

// let blue = document.querySelector(".blue");
// let red = document.querySelector(".red");
// let black = document.querySelector(".black");

// let time = num.innerText;
// let temp = null;

// blue.addEventListener("click", () => {
//   temp = setInterval(interval, 1000);
// });

// function interval(){
//   time = Number(time += 1);
//   num.innerText = time;
// }

// red.addEventListener("click", () => {
//   clearInterval(temp);
// });

// black.addEventListener("click", () => {
//   time = 0;
// })

// #4

// let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "h", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// let list = document.querySelector('.list');
// let pagination = document.querySelector(".pagination");

// let page = 1;

// function paginate(arr, page, limit){
//   list.innerHTML = "";

//   for(let i = (page - 1) * limit; i < limit * page; i++){
//     if(arr[i] != undefined){
//       let item = document.createElement("li");
//       item.className = "item";
//       item.innerText = arr[i];
//       list.appendChild(item);
//     }
//   }
// }

// paginate(arr, page, 5);

// for(let i = 1; i < arr.length / 5; i++){
//   let num = document.createElement("button");
//   num.className = "number";
//   num.innerText = i;
//   pagination.appendChild(num);
// }

// let elBtn = document.querySelectorAll(".number");

// elBtn.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     page = index + 1;
//     paginate(arr, page, 5);
//   })
// });


function getMaxNum(arr) {
  let temp = [];
  arr.map(element => {
    if(+element){
      temp.push(element);
    }
  });
  console.log(Math.max(...temp));
}


getMaxNum([524 , true , false , "Hello", -1, null, 78 , 333.33]); 