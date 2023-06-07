'use strict';

// console.log(document.querySelector('.message').textContent);

// //đổi nội dung của message
// document.querySelector('.message').textContent = 'Correct number';
// //chọn phần từ có class score và number, guess
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 12;
//chọn nút và gán hành động click, xử lý hành động click bằng hàm (in ra console)
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });
//Các biến toàn cục
let hiddenNumber = Math.floor(Math.random() * 20 + 1);
console.log(`The hidden number is ${hiddenNumber}`);
let highScore = 0;
let score = 20;
//xử lý sự kiện ấn nút check
document.querySelector('.check').addEventListener('click', function () {
  if (score !== 0) {
    //lấy dữ liệu vào
    const inputValue = document.querySelector('.guess').value;
    //kiểm tra dữ liệu vào
    if (inputValue) {
      let inputValueCheck = checkInputValue(inputValue);
      //xử lý dữ liệu:
      document.querySelector('.message').textContent = inputValueCheck;
      //xử lý khi giá trị đúng
      if (inputValueCheck === 'Correct number!') {
        //set highscore
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        //đổi màu background
        document.querySelector('body').style.backgroundColor = '#228B22';
        //đổi số trong ô hidden
        document.querySelector('.number').textContent = hiddenNumber;
      } else {
        //xử lý khi giá trị sai
        score = score - 1;
        document.querySelector('.score').textContent = score;
      }
      //xử lý sự kiện khi score = 0 => game over
      if (score === 0) {
        document.querySelector('.message').textContent = `Game Over!`;
        document.querySelector('body').style.backgroundColor = '#B22222';
      }
    } else
      document.querySelector('.message').textContent = `Please input a number!`;
  }
});
//xử lý sự kiện nút again
document.querySelector('.again').addEventListener('click', function () {
  //set lại hidden number
  hiddenNumber = Math.floor(Math.random() * 20 + 1);
  console.log(`New the hidden number is ${hiddenNumber}`);
  //set lại score
  score = 20;
  //set lại giá trị ô input
  document.querySelector('.guess').value = '';
  //set lại message
  document.querySelector('.message').textContent = 'Start guessing...';
  //set lại màu background
  document.querySelector('body').style.backgroundColor = '#222';
  //set lại giá trị score
  document.querySelector('.score').textContent = 20;
  //set hidden number
  document.querySelector('.number').textContent = '?';
});

//vùng hàng dùng chung
//hàm kiểm tra giá trị vào
const checkInputValue = function (paramInput) {
  let result = '';
  if (paramInput !== '') {
    if (paramInput < hiddenNumber) result = 'Too low!';
    if (paramInput > hiddenNumber) result = 'Too high!';
    if (paramInput < 1 || paramInput > 20) result = 'Please input again!';
    if (paramInput == hiddenNumber) result = 'Correct number!';
  } else result = 'Please input again!';
  return result;
};
//hàm kiểm tra khi game over
