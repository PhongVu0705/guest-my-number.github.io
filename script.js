'use strict';
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
      displayContent('.message', inputValueCheck);
      //xử lý khi giá trị đúng
      if (inputValueCheck === 'Correct number!') {
        //set highscore
        if (score > highScore) {
          highScore = score;
        }
        displayContent('.highscore', highScore);
        //đổi màu background
        document.querySelector('body').style.backgroundColor = '#228B22';
        //đổi số trong ô hidden
        dipslayHiddenNumber(hiddenNumber, '30rem');
      } else {
        //xử lý khi giá trị sai
        score--;
        displayContent('.score', score);
      }
      //xử lý sự kiện khi score = 0 => game over
      if (score === 0) {
        displayContent('.message', `Game Over! 😢`);
        document.querySelector('body').style.backgroundColor = '#B22222';
      }
    } else displayContent('.message', `Please input a number!`);
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
  displayContent('.message', 'Start guessing...');
  //set lại màu background
  document.querySelector('body').style.backgroundColor = '#222';
  //set lại giá trị score
  displayContent('.score', 20);
  //set hidden number
  dipslayHiddenNumber('?', '15rem');
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
//hàm hiển thị nội dung message
const displayContent = function (paramClass, paramMesssage) {
  document.querySelector(paramClass).textContent = paramMesssage;
};
//hàm hiển thị số hidden number
const dipslayHiddenNumber = function (parramNumber, paramWidth) {
  //set hidden number
  document.querySelector('.number').textContent = parramNumber;
  //set lại kích thước ô hidden number
  document.querySelector('.number').style.width = paramWidth;
};
