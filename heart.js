/**コメントボックス */
const button = document.getElementById('comment_button');
const replyBox = document.getElementById('comment_reply');
const commentBox = document.getElementById('comment_box');

button.addEventListener('click', () => {
    replyBox.style.display='block';
    
})

/**ハートボタン */
const heartButton=document.querySelector('.heart_button');
var numberSum=[];
const storage=localStorage;
heartButton.addEventListener('click',() => {
  
  var thisCount=$('.count_number').html();
  thisCount=Number(thisCount);
  thisCount=thisCount + 1;
  $('.count_number').html(thisCount);

  $('.heart_button,.heart_icon').addClass('clicked');


  const number = {
    currentNumber: thisCount
  }
  numberSum.push(number);
  storage.store = JSON.stringify(numberSum); 
  console.log(storage.store)

},{'once':true})

document.addEventListener("DOMContentLoaded", () => {
  const json = storage.store;
  numberSum = JSON.parse(json);
  
  
  /**for(const item of numberSum ){
    console.log(Number(item.currentNumber))
  }**/
  const lastNumber=(Number(numberSum[(numberSum.length)-1].currentNumber))
  $('.count_number').html(lastNumber);
  
})
delete storage.store;



