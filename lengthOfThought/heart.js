const button = document.getElementById('comment_btn');
const replyBox = document.getElementById('comment_reply');
const commentBox = document.getElementById('comment_box')
const box = document.querySelector('container_content')
button.addEventListener('click', () => {
    replyBox.classList.add('is-clicked');
    commentBox.classList.add('is-clicked');
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


// ここから送信ボタンを押したら、下に出てくるものを作っていきたい

// まずここで入力するフォーム部分を取ってくる
const ageInput=document.querySelector('.age_input');
const monthsInput=document.querySelector('.months_input');
const daysInput=document.querySelector('.days_input');
// const subnameInput=document.querySelector('.heart_subname_input');
const nameInput=document.querySelector('.heart_name_input');
const commentInput = document.querySelector('.heart_comment_input');
const submitButton=document.querySelector('.heart_submit_button');

// ここで格納する
var heartContents = [];
const st = localStorage;

// 投稿ボタンを押すと下の箱に内容が入る　ものを作っていく
submitButton.addEventListener('click', function(){
    var myheart = {
        age: ageInput.value,
        month: monthsInput.value,
        day: daysInput.value,
        // subname: subnameInput.value,
        name: nameInput.value,
        comment: commentInput.value,
    }
    heartContents.push(myheart);
    // myheartに入ってるものをheartContents内に入れる
    st.store=JSON.stringify(heartContents);
    
    const heartContainer = document.querySelector('.container');
    const heartdiv= document.createElement('div');
    const heartbox= document.querySelector('.container_content_date');
    const heartboxAge = document.querySelector('.container_content_date_age');
    const heartboxMonth = document.querySelector('.container_content_date_month');
    const heartboxDay = document.querySelector('.container_content_date_day');
    const heartboxName = document.querySelector('.container_content_date_name');
    const heartboxDetail = document.querySelector('.container_content_detail');
    const heartboxBtn = document.querySelector('.container_content_btn');
    const heartboxCommentBtn = document.querySelector('container_content_comment_btn');
    const heartboxCommentHeart = document.querySelector('.heart_btn');
    const heartboxPastComment = document.querySelector('past_comment');
    

    const ageContent = ageInput.value;
    const monthsContent = monthsInput.value;
    const daysContent =  daysInput.value;
    // const subnameContent = subnameInput.value;
    const nameContent = nameInput.value;
    const commentContent = commentInput.value;
    
    ageInput.value='';
    monthsInput.value='';
    daysInput.value='';
    // subnameInput.value='';
    nameInput.value='';
    commentInput.value='';
    // 入力した後にこれで空にする

    // ここで入力した要素がどの要素に入るかを記述
    // heartboxAge.innerHTML = ageContent + '<span></span>';
    // heartboxMonth.innerHTML = monthsContent + '<span></span>';
    // heartboxDay.innerHTML = daysContent + '<span></span>';
    // heartboxName.innerHTML = '名前：' + nameContent ;
    // heartboxDetail.innerHTML = commentContent;
    heartdiv.setAttribute('class', 'container_content_new')
    heartboxDetail.innerHTML = ageContent + '<span></span>' + monthsContent + '<span></span>' + daysContent + '<span></span>' + '<br>' + '名前：' + '<span></span>' + nameContent + '<br>' + commentContent;

    // ここにどの要素がどの要素の子要素、親要素なのかを記述
    // heartdiv.appendChild(heartbox);
    heartdiv.appendChild(heartboxDetail);
    heartdiv.appendChild(heartboxBtn);
    // heartdiv[0].appendChild(heartboxPastComment);
    // heartdiv.appendChild(heartboxBtn);
    // heartbox.appendChild(heartboxAge);
    // heartbox.appendChild(heartboxMonth);
    // heartbox.appendChild(heartboxDay);
    // heartbox.appendChild(heartboxName);
    // heartboxBtn.appendChild(heartboxCommentBtn);
    // heartboxBtn.appendChild(heartboxCommentHeart);
    heartContainer.insertBefore(heartdiv, heartboxPastComment);
})




/*delete storage.store;*/
/*delete keep.box*/
