/**コメントボックス */
const button = document.getElementById('comment_button');
const replyBox = document.getElementById('comment_reply');
const commentBox = document.getElementById('comment_box');

button.addEventListener('click', () => {
    commentBox.style.display='block';
    
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

/**過去のコメント表示 */
const commentInput=document.querySelector('.comment_input');
const replyBtn=document.querySelector('.reply_button');

var heartContents=[ ];
const keep=localStorage;

replyBtn.addEventListener('click',function(){
  
    var pastComment={
      comment: commentInput.value,
    }
    heartContents.push(pastComment);
    keep.box=JSON.stringify(heartContents);
    const  commentResult=document.querySelector('.past_comment');

    const commentContent=commentInput.value;
    const ptag=document.createElement('p');
    ptag.setAttribute('class','comment_ptag')
    commentInput.value='';

    ptag.textContent= commentContent;
    commentResult.appendChild(ptag);

})

document.addEventListener("DOMContentLoaded", () => {
  
    const keepBox=keep.box;
    heartContents=JSON.parse(keepBox);

    button.addEventListener('click',function (){
        for (const item of heartContents){
    
            const replyContent =item.comment;
            const ptag=document.createElement('p');
            ptag.setAttribute('class','comment_ptag')
            commentInput.value='';
    
            ptag.textContent= replyContent;
            const  commentResult=document.querySelector('.past_comment');
    
            commentResult.appendChild(ptag);
    
        }

    },{'once':true})
    

})

/*delete storage.store;*/
/**delete keep.box**/

