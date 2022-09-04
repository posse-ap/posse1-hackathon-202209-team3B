/**introduce */
$(function(){
  $("#acMenu dt").on("click", function() {
    $(this).next().slideToggle();
  });
});



/**input内容 */
const universityInput=document.querySelector('.university_input')
const nameInput=document.querySelector('.name_input');
const submitButton=document.querySelector('.submit_button');
const facultyInput=document.querySelector('.faculty_input');
const subnameInput=document.querySelector('.subname_input');

var listContent=[ ];
const local=localStorage;

// あ行の処理
submitButton.addEventListener('click',function(){
  var myProfile={
    university: universityInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
  }
  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);
  if(subnameInput.value[0]==='あ' || subnameInput.value[0]==='い' || subnameInput.value[0]==='う' ||subnameInput.value[0]==='え' ||subnameInput.value[0]==='お'){
    const profileBox1=document.querySelector('.introduce_page1');
    const litag=document.createElement('li');
    const ptagA=document.createElement('p');
    const ptagB=document.createElement('p');
    const ptagC=document.createElement('p');
    const ptagD=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    // メンタータイムで聞く。ここでpタグ４つ出てくるのに、更新（リロード）すると１個にまとまってしまう
    ptagA.textContent=universityContent;
    ptagB.textContent=facultyContent;
    ptagC.textContent=subnameContent;
    ptagD.textContent=nameContent;
    litag.appendChild(ptagA)
    litag.appendChild(ptagB)
    litag.appendChild(ptagC)
    litag.appendChild(ptagD)
    profileBox1.appendChild(litag)
  }
  
})
document.addEventListener("DOMContentLoaded", () => {
  const data=local.store;
  listContent=JSON.parse(data);
  console.log(listContent)
  for (const item of listContent){
    console.log(item.subname)
    const subnameInput=item.subname
    if(subnameInput[0]==='あ' || subnameInput[0]==='い' || subnameInput[0]==='う' ||subnameInput[0]==='え' ||subnameInput[0]==='お'){
      const profileBox1=document.querySelector('.introduce_page1')
      const litag=document.createElement('li');
      const ptagA=document.createElement('p');
      const ptagB=document.createElement('p');
      const ptagC=document.createElement('p');
      const ptagD=document.createElement('p');
      const universityContent=item.university;
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      ptagA.textContent=universityContent;
      ptagB.textContent=facultyContent;
      ptagC.textContent=subnameContent;
      ptagD.textContent=nameContent;
      litag.appendChild(ptagA)
      litag.appendChild(ptagB)
      litag.appendChild(ptagC)
      litag.appendChild(ptagD)
      profileBox1.appendChild(litag)
    }
  }
})
// か行の処理
submitButton.addEventListener('click',function(){
  var myProfile={
    university: universityInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
  }
  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);
  if(subnameInput.value[0]==='か' || subnameInput.value[0]==='き' || subnameInput.value[0]==='く' ||subnameInput.value[0]==='け' ||subnameInput.value[0]==='こ'){
    const profileBox1=document.querySelector('.introduce_page2');
    const litag=document.createElement('li');
    const ptagA=document.createElement('p');
    const ptagB=document.createElement('p');
    const ptagC=document.createElement('p');
    const ptagD=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    // メンタータイムで聞く。ここでpタグ４つ出てくるのに、更新（リロード）すると１個にまとまってしまう
    ptagA.textContent=universityContent;
    ptagB.textContent=facultyContent;
    ptagC.textContent=subnameContent;
    ptagD.textContent=nameContent;
    litag.appendChild(ptagA)
    litag.appendChild(ptagB)
    litag.appendChild(ptagC)
    litag.appendChild(ptagD)
    profileBox1.appendChild(litag)
  }
  
})
document.addEventListener("DOMContentLoaded", () => {
  const data=local.store;
  listContent=JSON.parse(data);
  console.log(listContent)
  for (const item of listContent){
    console.log(item.subname)
    const subnameInput=item.subname
    if(subnameInput[0]==='か' || subnameInput[0]==='き' || subnameInput[0]==='く' ||subnameInput[0]==='け' ||subnameInput[0]==='こ'){
      const profileBox1=document.querySelector('.introduce_page2')
      const litag=document.createElement('li');
      const ptagA=document.createElement('p');
      const ptagB=document.createElement('p');
      const ptagC=document.createElement('p');
      const ptagD=document.createElement('p');
      const universityContent=item.university;
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      ptagA.textContent=universityContent;
      ptagB.textContent=facultyContent;
      ptagC.textContent=subnameContent;
      ptagD.textContent=nameContent;
      litag.appendChild(ptagA)
      litag.appendChild(ptagB)
      litag.appendChild(ptagC)
      litag.appendChild(ptagD)
      profileBox1.appendChild(litag)
    }
  }
})
// さ行の処理
submitButton.addEventListener('click',function(){
  var myProfile={
    university: universityInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
  }
  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);
  if(subnameInput.value[0]==='さ' || subnameInput.value[0]==='し' || subnameInput.value[0]==='す' ||subnameInput.value[0]==='せ' ||subnameInput.value[0]==='そ'){
    const profileBox1=document.querySelector('.introduce_page3');
    const litag=document.createElement('li');
    const ptagA=document.createElement('p');
    const ptagB=document.createElement('p');
    const ptagC=document.createElement('p');
    const ptagD=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    // メンタータイムで聞く。ここでpタグ４つ出てくるのに、更新（リロード）すると１個にまとまってしまう
    ptagA.textContent=universityContent;
    ptagB.textContent=facultyContent;
    ptagC.textContent=subnameContent;
    ptagD.textContent=nameContent;
    litag.appendChild(ptagA)
    litag.appendChild(ptagB)
    litag.appendChild(ptagC)
    litag.appendChild(ptagD)
    profileBox1.appendChild(litag)
  }
  
})
document.addEventListener("DOMContentLoaded", () => {
  const data=local.store;
  listContent=JSON.parse(data);
  console.log(listContent)
  for (const item of listContent){
    console.log(item.subname)
    const subnameInput=item.subname
    if(subnameInput[0]==='さ' || subnameInput[0]==='し' || subnameInput[0]==='す' ||subnameInput[0]==='せ' ||subnameInput[0]==='そ'){
      const profileBox1=document.querySelector('.introduce_page3')
      const litag=document.createElement('li');
      const ptagA=document.createElement('p');
      const ptagB=document.createElement('p');
      const ptagC=document.createElement('p');
      const ptagD=document.createElement('p');
      const universityContent=item.university;
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      ptagA.textContent=universityContent;
      ptagB.textContent=facultyContent;
      ptagC.textContent=subnameContent;
      ptagD.textContent=nameContent;
      litag.appendChild(ptagA)
      litag.appendChild(ptagB)
      litag.appendChild(ptagC)
      litag.appendChild(ptagD)
      profileBox1.appendChild(litag)
    }
  }
})
// た行の処理
submitButton.addEventListener('click',function(){
  var myProfile={
    university: universityInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
  }
  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);
  if(subnameInput.value[0]==='た' || subnameInput.value[0]==='ち' || subnameInput.value[0]==='つ' ||subnameInput.value[0]==='て' ||subnameInput.value[0]==='と'){
    const profileBox1=document.querySelector('.introduce_page4');
    const litag=document.createElement('li');
    const ptagA=document.createElement('p');
    const ptagB=document.createElement('p');
    const ptagC=document.createElement('p');
    const ptagD=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    // メンタータイムで聞く。ここでpタグ４つ出てくるのに、更新（リロード）すると１個にまとまってしまう
    ptagA.textContent=universityContent;
    ptagB.textContent=facultyContent;
    ptagC.textContent=subnameContent;
    ptagD.textContent=nameContent;
    litag.appendChild(ptagA)
    litag.appendChild(ptagB)
    litag.appendChild(ptagC)
    litag.appendChild(ptagD)
    profileBox1.appendChild(litag)
  }
  
})
document.addEventListener("DOMContentLoaded", () => {
  const data=local.store;
  listContent=JSON.parse(data);
  console.log(listContent)
  for (const item of listContent){
    console.log(item.subname)
    const subnameInput=item.subname
    if(subnameInput[0]==='た' || subnameInput[0]==='ち' || subnameInput[0]==='つ' ||subnameInput[0]==='て' ||subnameInput[0]==='と'){
      const profileBox1=document.querySelector('.introduce_page4')
      const litag=document.createElement('li');
      const ptagA=document.createElement('p');
      const ptagB=document.createElement('p');
      const ptagC=document.createElement('p');
      const ptagD=document.createElement('p');
      const universityContent=item.university;
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      ptagA.textContent=universityContent;
      ptagB.textContent=facultyContent;
      ptagC.textContent=subnameContent;
      ptagD.textContent=nameContent;
      litag.appendChild(ptagA)
      litag.appendChild(ptagB)
      litag.appendChild(ptagC)
      litag.appendChild(ptagD)
      profileBox1.appendChild(litag)
    }
  }
})
// な行の処理
submitButton.addEventListener('click',function(){
  var myProfile={
    university: universityInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
  }
  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);
  if(subnameInput.value[0]==='な' || subnameInput.value[0]==='に' || subnameInput.value[0]==='ぬ' ||subnameInput.value[0]==='ね' ||subnameInput.value[0]==='の'){
    const profileBox1=document.querySelector('.introduce_page5');
    const litag=document.createElement('li');
    const ptagA=document.createElement('p');
    const ptagB=document.createElement('p');
    const ptagC=document.createElement('p');
    const ptagD=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    // メンタータイムで聞く。ここでpタグ４つ出てくるのに、更新（リロード）すると１個にまとまってしまう
    ptagA.textContent=universityContent;
    ptagB.textContent=facultyContent;
    ptagC.textContent=subnameContent;
    ptagD.textContent=nameContent;
    litag.appendChild(ptagA)
    litag.appendChild(ptagB)
    litag.appendChild(ptagC)
    litag.appendChild(ptagD)
    profileBox1.appendChild(litag)
  }
  
})
document.addEventListener("DOMContentLoaded", () => {
  const data=local.store;
  listContent=JSON.parse(data);
  console.log(listContent)
  for (const item of listContent){
    console.log(item.subname)
    const subnameInput=item.subname
    if(subnameInput[0]==='な' || subnameInput[0]==='に' || subnameInput[0]==='ぬ' ||subnameInput[0]==='ね' ||subnameInput[0]==='の'){
      const profileBox1=document.querySelector('.introduce_page5')
      const litag=document.createElement('li');
      const ptagA=document.createElement('p');
      const ptagB=document.createElement('p');
      const ptagC=document.createElement('p');
      const ptagD=document.createElement('p');
      const universityContent=item.university;
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      ptagA.textContent=universityContent;
      ptagB.textContent=facultyContent;
      ptagC.textContent=subnameContent;
      ptagD.textContent=nameContent;
      litag.appendChild(ptagA)
      litag.appendChild(ptagB)
      litag.appendChild(ptagC)
      litag.appendChild(ptagD)
      profileBox1.appendChild(litag)
    }
  }
})
// は行の処理
submitButton.addEventListener('click',function(){
  var myProfile={
    university: universityInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
  }
  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);
  if(subnameInput.value[0]==='は' || subnameInput.value[0]==='ひ' || subnameInput.value[0]==='ふ' ||subnameInput.value[0]==='へ' ||subnameInput.value[0]==='ほ'){
    const profileBox1=document.querySelector('.introduce_page6');
    const litag=document.createElement('li');
    const ptagA=document.createElement('p');
    const ptagB=document.createElement('p');
    const ptagC=document.createElement('p');
    const ptagD=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    // メンタータイムで聞く。ここでpタグ４つ出てくるのに、更新（リロード）すると１個にまとまってしまう
    ptagA.textContent=universityContent;
    ptagB.textContent=facultyContent;
    ptagC.textContent=subnameContent;
    ptagD.textContent=nameContent;
    litag.appendChild(ptagA)
    litag.appendChild(ptagB)
    litag.appendChild(ptagC)
    litag.appendChild(ptagD)
    profileBox1.appendChild(litag)
  }
  
})
document.addEventListener("DOMContentLoaded", () => {
  const data=local.store;
  listContent=JSON.parse(data);
  console.log(listContent)
  for (const item of listContent){
    console.log(item.subname)
    const subnameInput=item.subname
    if(subnameInput[0]==='は' || subnameInput[0]==='ひ' || subnameInput[0]==='ふ' ||subnameInput[0]==='へ' ||subnameInput[0]==='ほ'){
      const profileBox1=document.querySelector('.introduce_page6')
      const litag=document.createElement('li');
      const ptagA=document.createElement('p');
      const ptagB=document.createElement('p');
      const ptagC=document.createElement('p');
      const ptagD=document.createElement('p');
      const universityContent=item.university;
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      ptagA.textContent=universityContent;
      ptagB.textContent=facultyContent;
      ptagC.textContent=subnameContent;
      ptagD.textContent=nameContent;
      litag.appendChild(ptagA)
      litag.appendChild(ptagB)
      litag.appendChild(ptagC)
      litag.appendChild(ptagD)
      profileBox1.appendChild(litag)
    }
  }
})
// ま行の処理
submitButton.addEventListener('click',function(){
  var myProfile={
    university: universityInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
  }
  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);
  if(subnameInput.value[0]==='ま' || subnameInput.value[0]==='み' || subnameInput.value[0]==='む' ||subnameInput.value[0]==='め' ||subnameInput.value[0]==='も'){
    const profileBox1=document.querySelector('.introduce_page7');
    const litag=document.createElement('li');
    const ptagA=document.createElement('p');
    const ptagB=document.createElement('p');
    const ptagC=document.createElement('p');
    const ptagD=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    // メンタータイムで聞く。ここでpタグ４つ出てくるのに、更新（リロード）すると１個にまとまってしまう
    ptagA.textContent=universityContent;
    ptagB.textContent=facultyContent;
    ptagC.textContent=subnameContent;
    ptagD.textContent=nameContent;
    litag.appendChild(ptagA)
    litag.appendChild(ptagB)
    litag.appendChild(ptagC)
    litag.appendChild(ptagD)
    profileBox1.appendChild(litag)
  }
  
})
document.addEventListener("DOMContentLoaded", () => {
  const data=local.store;
  listContent=JSON.parse(data);
  console.log(listContent)
  for (const item of listContent){
    console.log(item.subname)
    const subnameInput=item.subname
    if(subnameInput[0]==='ま' || subnameInput[0]==='み' || subnameInput[0]==='む' ||subnameInput[0]==='め' ||subnameInput[0]==='も'){
      const profileBox1=document.querySelector('.introduce_page7')
      const litag=document.createElement('li');
      const ptagA=document.createElement('p');
      const ptagB=document.createElement('p');
      const ptagC=document.createElement('p');
      const ptagD=document.createElement('p');
      const universityContent=item.university;
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      ptagA.textContent=universityContent;
      ptagB.textContent=facultyContent;
      ptagC.textContent=subnameContent;
      ptagD.textContent=nameContent;
      litag.appendChild(ptagA)
      litag.appendChild(ptagB)
      litag.appendChild(ptagC)
      litag.appendChild(ptagD)
      profileBox1.appendChild(litag)
    }
  }
})
// や行の処理
submitButton.addEventListener('click',function(){
  var myProfile={
    university: universityInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
  }
  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);
  if(subnameInput.value[0]==='や' || subnameInput.value[0]==='ゆ' || subnameInput.value[0]==='よ'){
    const profileBox1=document.querySelector('.introduce_page8');
    const litag=document.createElement('li');
    const ptagA=document.createElement('p');
    const ptagB=document.createElement('p');
    const ptagC=document.createElement('p');
    const ptagD=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    // メンタータイムで聞く。ここでpタグ４つ出てくるのに、更新（リロード）すると１個にまとまってしまう
    ptagA.textContent=universityContent;
    ptagB.textContent=facultyContent;
    ptagC.textContent=subnameContent;
    ptagD.textContent=nameContent;
    litag.appendChild(ptagA)
    litag.appendChild(ptagB)
    litag.appendChild(ptagC)
    litag.appendChild(ptagD)
    profileBox1.appendChild(litag)
  }
  
})
document.addEventListener("DOMContentLoaded", () => {
  const data=local.store;
  listContent=JSON.parse(data);
  console.log(listContent)
  for (const item of listContent){
    console.log(item.subname)
    const subnameInput=item.subname
    if(subnameInput[0]==='や' || subnameInput[0]==='ゆ' || subnameInput[0]==='よ'){
      const profileBox1=document.querySelector('.introduce_page8')
      const litag=document.createElement('li');
      const ptagA=document.createElement('p');
      const ptagB=document.createElement('p');
      const ptagC=document.createElement('p');
      const ptagD=document.createElement('p');
      const universityContent=item.university;
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      ptagA.textContent=universityContent;
      ptagB.textContent=facultyContent;
      ptagC.textContent=subnameContent;
      ptagD.textContent=nameContent;
      litag.appendChild(ptagA)
      litag.appendChild(ptagB)
      litag.appendChild(ptagC)
      litag.appendChild(ptagD)
      profileBox1.appendChild(litag)
    }
  }
})
// ら行の処理
submitButton.addEventListener('click',function(){
  var myProfile={
    university: universityInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
  }
  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);
  if(subnameInput.value[0]==='ら' || subnameInput.value[0]==='り' || subnameInput.value[0]==='る' ||subnameInput.value[0]==='れ' ||subnameInput.value[0]==='ろ'){
    const profileBox1=document.querySelector('.introduce_page9');
    const litag=document.createElement('li');
    const ptagA=document.createElement('p');
    const ptagB=document.createElement('p');
    const ptagC=document.createElement('p');
    const ptagD=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    // メンタータイムで聞く。ここでpタグ４つ出てくるのに、更新（リロード）すると１個にまとまってしまう
    ptagA.textContent=universityContent;
    ptagB.textContent=facultyContent;
    ptagC.textContent=subnameContent;
    ptagD.textContent=nameContent;
    litag.appendChild(ptagA)
    litag.appendChild(ptagB)
    litag.appendChild(ptagC)
    litag.appendChild(ptagD)
    profileBox1.appendChild(litag)
  }
  
})
document.addEventListener("DOMContentLoaded", () => {
  const data=local.store;
  listContent=JSON.parse(data);
  console.log(listContent)
  for (const item of listContent){
    console.log(item.subname)
    const subnameInput=item.subname
    if(subnameInput[0]==='ら' || subnameInput[0]==='り' || subnameInput[0]==='る' ||subnameInput[0]==='れ' ||subnameInput[0]==='ろ'){
      const profileBox1=document.querySelector('.introduce_page9')
      const litag=document.createElement('li');
      const ptagA=document.createElement('p');
      const ptagB=document.createElement('p');
      const ptagC=document.createElement('p');
      const ptagD=document.createElement('p');
      const universityContent=item.university;
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      ptagA.textContent=universityContent;
      ptagB.textContent=facultyContent;
      ptagC.textContent=subnameContent;
      ptagD.textContent=nameContent;
      litag.appendChild(ptagA)
      litag.appendChild(ptagB)
      litag.appendChild(ptagC)
      litag.appendChild(ptagD)
      profileBox1.appendChild(litag)
    }
  }
})
// わ行の処理
submitButton.addEventListener('click',function(){
  var myProfile={
    university: universityInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
  }
  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);
  if(subnameInput.value[0]==='わ' || subnameInput.value[0]==='を' || subnameInput.value[0]==='ん'){
    const profileBox1=document.querySelector('.introduce_page10');
    const litag=document.createElement('li');
    const ptagA=document.createElement('p');
    const ptagB=document.createElement('p');
    const ptagC=document.createElement('p');
    const ptagD=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';
    // メンタータイムで聞く。ここでpタグ４つ出てくるのに、更新（リロード）すると１個にまとまってしまう
    ptagA.textContent=universityContent;
    ptagB.textContent=facultyContent;
    ptagC.textContent=subnameContent;
    ptagD.textContent=nameContent;
    litag.appendChild(ptagA)
    litag.appendChild(ptagB)
    litag.appendChild(ptagC)
    litag.appendChild(ptagD)
    profileBox1.appendChild(litag)
  }
  
})
document.addEventListener("DOMContentLoaded", () => {
  const data=local.store;
  listContent=JSON.parse(data);
  console.log(listContent)
  for (const item of listContent){
    console.log(item.subname)
    const subnameInput=item.subname
    if(subnameInput[0]==='わ' || subnameInput[0]==='を' || subnameInput[0]==='ん'){
      const profileBox1=document.querySelector('.introduce_page10')
      const litag=document.createElement('li');
      const ptagA=document.createElement('p');
      const ptagB=document.createElement('p');
      const ptagC=document.createElement('p');
      const ptagD=document.createElement('p');
      const universityContent=item.university;
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      ptagA.textContent=universityContent;
      ptagB.textContent=facultyContent;
      ptagC.textContent=subnameContent;
      ptagD.textContent=nameContent;
      litag.appendChild(ptagA)
      litag.appendChild(ptagB)
      litag.appendChild(ptagC)
      litag.appendChild(ptagD)
      profileBox1.appendChild(litag)
    }
  }
})

// localStorage.clear();  //←これのコメントを解除すれば保存されてるデータが消える
/*delete local.store**/