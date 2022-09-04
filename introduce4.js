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
    const profileBox1=document.querySelector('.introduce_page1')
    const litag=document.createElement('li');
    const ptag=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    const universityContent=universityInput.value;
    
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';
    universityInput.value='';

    ptag.textContent=nameContent+subnameContent+facultyContent +universityContent;
    litag.appendChild(ptag)
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
      const ptag=document.createElement('p');
      const universityContent=item.university;
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      ptag.textContent=universityContent + subnameContent+nameContent+facultyContent;
      litag.appendChild(ptag)
      profileBox1.appendChild(litag)
    }
    
  }
})

/*delete local.store**/