/**introduce */
$(function(){
  $("#acMenu dt").on("click", function() {
    $(this).next().slideToggle();
  });
});

// ヒアヌーへ
// いい感じだと思う。あとはひらがなの処理を最後までお願いしたい。これをfeature/kazukiにコピーしとくから、それを自分のfeature/hinanoにコピーして作業して欲しい。お願いします！！！


/**input内容 */
const universityInput=document.querySelector('.university_input')
const nameInput=document.querySelector('.name_input');
const submitButton=document.querySelector('.submit_button');
const facultyInput=document.querySelector('.faculty_input');
const subnameInput=document.querySelector('.subname_input');
const gradesInput=document.querySelector('.grades_input');
const commentInput=document.querySelector('.comment_input')

var listContent=[ ];
const local=localStorage;

submitButton.addEventListener('click',function(){
  var myProfile={
    university: universityInput.value,
    grades: gradesInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
    comment: commentInput.value,
  }

  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);

  console.log(subnameInput.value)
  if(subnameInput.value[0]==='あ' || subnameInput.value[0]==='い' || subnameInput.value[0]==='う' ||subnameInput.value[0]==='え' ||subnameInput.value[0]==='お'){
    const profileBox1=document.querySelector('.introduce_page1')
    const litag=document.createElement('li');
    const ptag=document.createElement('p');
    
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    const commentContent=commentInput.value;
    const gradesContent=gradesInput.value;
    
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    gradesInput.value='';
    commentInput.value='';
    // 入力した後にこれで空にする

    ptag.innerHTML = '大学名:'+ '<span></span>' +universityContent + '<br>' + '学年:'+ '<span></span>'+ gradesContent +'<br>' +'学部・学科:' + '<span></span>' +facultyContent + '<br>'+ 'ふりがな:'+ '<span></span>' +subnameContent +'<br>' + '名前:' +'<span></span>'  + nameContent +'<br>' +'コメント:' + '<span></span>' +commentContent;
    ptag.setAttribute('class','myinf_item')
    litag.setAttribute('class','myinf_list')
    
    litag.appendChild(ptag);
    profileBox1.appendChild(litag)
    
  }
  else if(subnameInput.value[0]==='か' || subnameInput.value[0]==='き' || subnameInput.value[0]==='く' ||subnameInput.value[0]==='け' ||subnameInput.value[0]==='こ'){
    const profileBox2=document.querySelector('.introduce_page2')
    const litag=document.createElement('li');
    const ptag=document.createElement('p');
    
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    const commentContent=commentInput.value;
    const gradesContent=gradesInput.value;
    
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    gradesInput.value='';
    commentInput.value='';

    ptag.innerHTML = '大学名:'+ '<span></span>' +universityContent + '<br>' + '学年:'+ '<span></span>'+ gradesContent +'<br>' +'学部・学科:' + '<span></span>' +facultyContent + '<br>'+ 'ふりがな:'+ '<span></span>' +subnameContent +'<br>' + '名前:' +'<span></span>'  + nameContent +'<br>' +'コメント:' + '<span></span>' +commentContent;
    ptag.setAttribute('class','myinf_item')
    litag.setAttribute('class','myinf_list')
    
    litag.appendChild(ptag);
    profileBox2.appendChild(litag)
  }
  else if(subnameInput.value[0]==='さ' || subnameInput.value[0]==='し' || subnameInput.value[0]==='す' ||subnameInput.value[0]==='せ' ||subnameInput.value[0]==='そ'){
    const profileBox3=document.querySelector('.introduce_page3')
    const litag=document.createElement('li');
    const ptag=document.createElement('p');
    
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    const commentContent=commentInput.value;
    const gradesContent=gradesInput.value;
    
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    gradesInput.value='';
    commentInput.value='';

    ptag.innerHTML = '大学名:'+ '<span></span>' +universityContent + '<br>' + '学年:'+ '<span></span>'+ gradesContent +'<br>' +'学部・学科:' + '<span></span>' +facultyContent + '<br>'+ 'ふりがな:'+ '<span></span>' +subnameContent +'<br>' + '名前:' +'<span></span>'  + nameContent +'<br>' +'コメント:' + '<span></span>' +commentContent;
    ptag.setAttribute('class','myinf_item')
    litag.setAttribute('class','myinf_list')
    
    litag.appendChild(ptag);
    profileBox3.appendChild(litag)
  }
  else if(subnameInput.value[0]==='た' || subnameInput.value[0]==='ち' || subnameInput.value[0]==='つ' ||subnameInput.value[0]==='て' ||subnameInput.value[0]==='と'){
    const profileBox4=document.querySelector('.introduce_page4')
    const litag=document.createElement('li');
    const ptag=document.createElement('p');
    
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    const commentContent=commentInput.value;
    const gradesContent=gradesInput.value;
    
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    gradesInput.value='';
    commentInput.value='';

    ptag.innerHTML = '大学名:'+ '<span></span>' +universityContent + '<br>' + '学年:'+ '<span></span>'+ gradesContent +'<br>' +'学部・学科:' + '<span></span>' +facultyContent + '<br>'+ 'ふりがな:'+ '<span></span>' +subnameContent +'<br>' + '名前:' +'<span></span>'  + nameContent +'<br>' +'コメント:' + '<span></span>' +commentContent;
    ptag.setAttribute('class','myinf_item')
    litag.setAttribute('class','myinf_list')
    
    litag.appendChild(ptag);
    profileBox4.appendChild(litag)
  }
  
})



document.addEventListener("DOMContentLoaded", () => {
  
  const data=local.store;
  
  listContent=JSON.parse(data);
  console.log(data)
  console.log(listContent)
  for (const item of listContent){
    console.log(item.name)
    const subnameContent=item.subname;
    
    if(subnameContent[0]==='あ' || subnameContent[0]==='い' || subnameContent[0]==='う' ||subnameContent[0]==='え' ||subnameContent[0]==='お'){
      const profileBox1=document.querySelector('.introduce_page1')
      const litag=document.createElement('li');
      const ptag=document.createElement('p');
      
      console.log(item.name);      
      const facultyContent=item.faculty;
      const universityContent=item.university;
      const nameContent=item.name;
      const gradesContent=item.grades;
      const commentContent=item.comment;
      nameInput.value='';
      subnameInput.value='';
      facultyInput.value='';
      universityInput.value='';
      gradesInput.value='';
      commentInput.value='';
      
      
      ptag.innerHTML = '大学名:'+ '<span></span>' +universityContent + '<br>' + '学年:'+ '<span></span>'+ gradesContent +'<br>' +'学部・学科:' + '<span></span>' +facultyContent + '<br>'+ 'ふりがな:'+ '<span></span>' +subnameContent +'<br>' + '名前:' +'<span></span>'  + nameContent +'<br>' +'コメント:' + '<span></span>' + commentContent;
      ptag.setAttribute('class','myinf_item')
      litag.setAttribute('class','myinf_list')
      litag.appendChild(ptag)
      profileBox1.appendChild(litag)
    }
    else if(subnameContent[0]==='か' || subnameContent[0]==='き' || subnameContent[0]==='く' ||subnameContent[0]==='け' ||subnameContent[0]==='こ'){
      const profileBox2=document.querySelector('.introduce_page2')
      const litag=document.createElement('li');
      const ptag=document.createElement('p');
      
      console.log(item.name);      
      const facultyContent=item.faculty;
      const universityContent=item.university;
      const nameContent=item.name;
      const gradesContent=item.grades;
      const commentContent=item.comment;
      nameInput.value='';
      subnameInput.value='';
      facultyInput.value='';
      universityInput.value='';
      gradesInput.value='';
      commentInput.value='';
      
      
      ptag.innerHTML = '大学名:'+ '<span></span>' +universityContent + '<br>' + '学年:'+ '<span></span>'+ gradesContent +'<br>' +'学部・学科:' + '<span></span>' +facultyContent + '<br>'+ 'ふりがな:'+ '<span></span>' +subnameContent +'<br>' + '名前:' +'<span></span>'  + nameContent +'<br>' +'コメント:' + '<span></span>' +commentContent;
      ptag.setAttribute('class','myinf_item')
      litag.setAttribute('class','myinf_list')
      litag.appendChild(ptag)
      profileBox2.appendChild(litag)
    }
    else if(subnameContent[0]==='さ' || subnameContent[0]==='し' || subnameContent[0]==='す' ||subnameContent[0]==='せ' ||subnameContent[0]==='そ'){
      const profileBox3=document.querySelector('.introduce_page3')
      const litag=document.createElement('li');
      const ptag=document.createElement('p');
      const facultyContent=item.faculty;
      const universityContent=item.university;
      const nameContent=item.name;
      const gradesContent=item.grades;
      const commentContent=item.comment;
      nameInput.value='';
      subnameInput.value='';
      facultyInput.value='';
      universityInput.value='';
      gradesInput.value='';
      commentInput.value='';
      
      
      ptag.innerHTML = '大学名:'+ '<span></span>' +universityContent + '<br>' + '学年:'+ '<span></span>'+ gradesContent +'<br>' +'学部・学科:' + '<span></span>' +facultyContent + '<br>'+ 'ふりがな:'+ '<span></span>' +subnameContent +'<br>' + '名前:' +'<span></span>'  + nameContent +'<br>' +'コメント:' + '<span></span>' +commentContent;
      ptag.setAttribute('class','myinf_item')
      litag.setAttribute('class','myinf_list')
      litag.appendChild(ptag)
      profileBox3.appendChild(litag)
    }
    else if(subnameContent[0]==='た' || subnameContent[0]==='ち' || subnameContent[0]==='つ' ||subnameContent[0]==='て' ||subnameContent[0]==='と'){
      const profileBox4=document.querySelector('.introduce_page4')
      const litag=document.createElement('li');
      const ptag=document.createElement('p');
      
      console.log(item.name);      
      const facultyContent=item.faculty;
      const universityContent=item.university;
      const nameContent=item.name;
      const gradesContent=item.grades;
      const commentContent=item.comment;
      nameInput.value='';
      subnameInput.value='';
      facultyInput.value='';
      universityInput.value='';
      gradesInput.value='';
      commentInput.value='';     
      ptag.innerHTML = '大学名:'+ '<span></span>' +universityContent + '<br>' + '学年:'+ '<span></span>'+ gradesContent +'<br>' +'学部・学科:' + '<span></span>' +facultyContent + '<br>'+ 'ふりがな:'+ '<span></span>' +subnameContent +'<br>' + '名前:' +'<span></span>'  + nameContent +'<br>' +'コメント:' + '<span></span>' +commentContent;
      ptag.setAttribute('class','myinf_item')
      litag.setAttribute('class','myinf_list')
      litag.appendChild(ptag)
      profileBox4.appendChild(litag)
    }
  
    
    
  }
})
// localStorage.clear();  
//↑これのコメントを解除すれば保存されてるデータが消える
/*:delete local.store;**/