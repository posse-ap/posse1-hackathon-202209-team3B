const button = document.getElementById('comment_btn');
const replyBox = document.getElementById('comment_reply');
const commentBox = document.getElementById('comment_box')

button.addEventListener('click', () => {
    replyBox.classList.add('is-clicked');
    commentBox.classList.add('is-clicked');
})


// ここから送信ボタンを押したら、下に出てくるものを作っていきたい

const ageInput=document.querySelector('.age_input');
const monthsInput=document.querySelector('.months_input');
const daysInput=document.querySelector('.days_input');
const subnameInput=document.querySelector('.heart_subname_input');
const nameInput=document.querySelector('.heart_name_input');
const commentInput = document.querySelector('.heart_comment_input');
const submitButton=document.querySelector('.heart_submit_button');

var heartContents = [];
const st = localStorage;

submitButton.addEventListener('click', function(){
    var myheart = [{
        age: ageInput.value,
        month: monthsInput.value,
        day: daysInput.value,
        subname: subnameInput.value,
        name: nameInput.value,
        comment: commentInput.value,
        }]
    
    heartContents.push(myheart);
    st.store=JSON.stringify(heartContents);
    
    
    const heartbox= document.querySelector('.container_content_date');
    const heartboxAge = document.querySelector('.container_content_date_age');
    const heartboxMonth = document.querySelector('.container_content_date_month');
    const heartboxDay = document.querySelector('.container_content_date_day');
    const heartboxName = document.querySelector('.container_content_date_name');
    const heartboxDetail = document.querySelector('.container_content_detail');
    const heartboxContent = document.createElement('p');
    const contentContainer=document.querySelector('.container_content');

    const ageContent = ageInput.value;
    const monthsContent = monthsInput.value;
    const daysContent =  daysInput.value;
    const subnameContent = subnameInput.value;
    const nameContent = nameInput.value;
    const commentContent = commentInput.value;
    
    ageInput.value='';
    monthsInput.value='';
    daysInput.value='';
    subnameInput.value='';
    nameInput.value='';
    commentInput.value='';

    /*const inputHtml=(input,inputNumber) => {
      return`<ul class="container_content_date">
      <li class="container_content_date_age">${ageContent}</li>
      <li class="container_content_date_month">${monthsContent}</li>
      <li class="container_content_date_day">${daysContent}</li>
      <li class="container_content_date_name">${nameContent}</li>
      </ul>
      <div class="container_content_name"></div>
        <div class="container_content_detail">${commentContent}</div>
      </div>`
    }

  

    contentContainer.innerHTML=myheart.map((heart,heartIndex) => {
      return inputHtml(heart,heartIndex)
    }).join('')
    // 入力した後にこれで空にする*/

    heartboxAge.innerHTML = ageContent +'<span></span>';
    heartboxMonth.innerHTML = monthsContent + '<span></span>';
    heartboxDay.innerHTML = daysContent  + '<span></span>';
    heartboxName.innerHTML = '名前：' + nameContent ;
    heartboxContent.innerHTML = commentContent;

    heartboxContent.setAttribute('class', 'container_content_detail_ptag');
    // createElementで作った要素にclass名をつけた

    heartboxDetail.appendChild(heartboxContent);
    console.log(heartContents)
})




/**コメントボックス */

button.addEventListener('click', () => {
    commentBox.style.display='block';
    $('.container_content_comment_btn').addClass('clicked');
    
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
const commentInput2=document.querySelector('.comment_input');
const replyBtn=document.querySelector('.reply_button');

var heartContents=[ ];
const keep=localStorage;

replyBtn.addEventListener('click',function(){
  
    var pastComment={
      comment: commentInput2.value,
    }
    heartContents.push(pastComment);
    keep.box=JSON.stringify(heartContents);
    const  commentResult=document.querySelector('.past_comment');

    const commentContent=commentInput2.value;
    console.log(commentContent)
    const ptag=document.createElement('p');
    ptag.setAttribute('class','comment_ptag')
    commentInput2.value='';

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

/*delete storage.store;
delete keep.box*/

