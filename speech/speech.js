// まずアコーディオンをここで対応させた
$(function(){
  $("#acMenu dt").on("click", function() {
    $(this).next().slideToggle();
  });
});
// ここで要素の名前を取得
const themesInput=document.querySelector('.themes_input');
const nameInput=document.querySelector('.name_input');
const submitButton=document.querySelector('.submit_button');
const commentInput=document.querySelector('.comment_input');
const subnameInput=document.querySelector('.subname_input');

// var で宣言して、ここに情報を格納する
var speechContents=[ ];
const st=localStorage;

// １０の宣言を記載
const allspeech=[
  {
    id:1,
    theme:'仲間の居場所作らずして自分の居場所なし',
    box:'.speech_theme_option1'
  },
  {
    id:2,
    theme:'振り返り主義',
    box:'.speech_theme_option2'
  },
  {
    id:3,
    theme:'インサイドアウト',
    box:'.speech_theme_option3'
  },
  {
    id:4,
    theme:'理解してから理解される',
    box:'.speech_theme_option4'
  },
  {
    id:5,
    theme:'深掘力は人格力',
    box:'.speech_theme_option5'
  },
  {
    id:6,
    theme:'嘘をつかないごまかさない',
    box:'.speech_theme_option6'
  },
  {
    id:7,
    theme:'教えることは教わること',
    box:'.speech_theme_option7'
  },
  {
    id:8,
    theme:'「ベンチ行かない？」と言う勇気',
    box:'.speech_theme_option8'
  },
  {
    id:9,
    theme:'本音の対話無くして最高のチームなし',
    box:'.speech_theme_option9'
  },
  {
    id:10,
    theme:'自ら機会を創り出し、機会によって自らを変えよ',
    box:'.speech_theme_option10'
  },
]

// 以下、ボタンを押したときの処理
submitButton.addEventListener('click',function(){
  var mySpeech={
    themes: themesInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    comment: commentInput.value,
  }
  // それぞれのInputに格納されている値をとってきている

  speechContents.push(mySpeech);
  st.json=JSON.stringify(speechContents);
  
  for(let i=0; i<10; i++){
    if(themesInput.value === allspeech[i].theme){
      console.log(allspeech[i].box)  
      // ここで取り出されたのは、themeのクラス名
      const themeBox=document.querySelector(allspeech[i].box)
      const litag=document.createElement('li');
      const ptag=document.createElement('p');
      const nameContent=nameInput.value;
      const subnameContent=subnameInput.value;
      const commentContent=commentInput.value;
      const themesContent=themesInput.value;
      nameInput.value='';
      subnameInput.value='';
      commentInput.value='';
      themesInput.value='';
      ptag.innerHTML= 'ふりがな:'+ '<span></span>' +subnameContent +'<br>' + '名前:' +'<span></span>'  + nameContent +'<br>' +'コメント:' + '<span></span>' +commentContent;
      ptag.setAttribute('class','myspeech_item')
      litag.setAttribute('class','myspeech_list')
      // 作成したものにclass名をつけた
      litag.appendChild(ptag);
      themeBox.appendChild(litag)
    }
  }
})


document.addEventListener("DOMContentLoaded", () => {
  
  const data=st.json;
  speechContents=JSON.parse(data);
  console.log(data)
  console.log(speechContents)
  for (const item of speechContents){
    console.log(item.themes)
    const themesContent=item.themes;
      for(let i=0; i<10; i++){
        const themesContent=item.themes;
        if(themesContent === allspeech[i].theme){
          console.log(allspeech[i].box)
          const themeBox=document.querySelector(allspeech[i].box)
          const litag=document.createElement('li');
          const ptag=document.createElement('p');
          
          const nameContent=item.name;
          const subnameContent=item.subname;
          const commentContent=item.comment;

          nameInput.value='';
          subnameInput.value='';
          commentInput.value='';
          themesInput.value='';

          ptag.innerHTML= 'ふりがな:'+ '<span></span>' +subnameContent +'<br>' + '名前:' +'<span></span>'  + nameContent +'<br>' +'コメント:' + '<span></span>' +commentContent;
          
          ptag.setAttribute('class','myspeech_item')
          litag.setAttribute('class','myspeech_list')
          // 作成したものにclass名をつけた
          litag.appendChild(ptag);
          themeBox.appendChild(litag)
        }
      }
  }
})

// localStorage.clear();  
// ↑これのコメントを解除して、リロードをかければ保存されてるデータが消える
