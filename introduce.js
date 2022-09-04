/**introduce */
$(function(){
  $("#acMenu dt").on("click", function() {
    $(this).next().slideToggle();
  });
});



/**input内容 */
const nameInput=document.querySelector('.name_input');
const submitButton=document.querySelector('.submit_button');
const facultyInput=document.querySelector('.faculty_input');
const subnameInput=document.querySelector('.subname_input');

var listContent=[ ];
const local=localStorage;

submitButton.addEventListener('click',function(){
  
  var myProfile={
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
  }





  listContent.push(myProfile);
  local.store=JSON.stringify(listContent);

  /**const litag=document.createElement('li');
  const ptag=document.createElement('p');
  const nameContent=nameInput.value;
  const subnameContent=subnameInput.value;
  const facultyContent=facultyInput.value;
  
  nameInput.value='';
  subnameInput.value='';
  facultyInput.value='';

  ptag.textContent=nameContent+subnameContent+facultyContent;
  litag.appendChild(ptag)**/
  if(subnameInput.value[0]==='あ' || subnameInput.value[0]==='い' || subnameInput.value[0]==='う' ||subnameInput.value[0]==='え' ||subnameInput.value[0]==='お'){
    const profileBox1=document.querySelector('.introduce_page1')
    const litag=document.createElement('li');
    const ptag=document.createElement('p');
    const nameContent=nameInput.value;
    const subnameContent=subnameInput.value;
    const facultyContent=facultyInput.value;
    
    nameInput.value='';
    subnameInput.value='';
    facultyInput.value='';

    ptag.textContent=nameContent+subnameContent+facultyContent;
    litag.appendChild(ptag)
    profileBox1.appendChild(litag)
  }



 
  
  console.log(myProfile)
  
  /**const profileBox3=document.querySelector('.introduce_page1')
  const profileBox4=document.querySelector('.introduce_page1')
  const profileBox5=document.querySelector('.introduce_page1')
  const profileBox6=document.querySelector('.introduce_page1')
  const profileBox7=document.querySelector('.introduce_page1')
  const profileBox8=document.querySelector('.introduce_page1')
  const profileBox9=document.querySelector('.introduce_page1')
  const profileBox10=document.querySelector('.introduce_page1')**/
  
  
 
  /**const profileContent=(profile) => {
    return `<section class="myprofile">
    <div class="myfurigana">${profile.subname}</div>
    <div class="myname">${profile.name}</div>
    <div class="myfaculty">${profile.faculty}</div>
    </section>`
   
  }
  
  profileBox1.innerHTML=Object.keys(myProfile).forEach(function(key){
    console.log(myProfile.subname)
    const profile=myProfile;
    if( profile.subname[0] === 'あ' || profile.subname[0] === 'い' || profile.subname[0] === 'う' || profile.subname[0] === 'え' || profile.subname[0] === 'お'){
      return `<section class="myprofile">
      <div class="myfurigana">${profile.subname}</div>
      <div class="myname">${profile.name}</div>
      <div class="myfaculty">${profile.faculty}</div>
      </section>`
    }
    else{
      return;
    }
  
  })
  
  /**profileBox2.innerHTML=myProfile.map((profile,index) => {
    console.log(profile.subname[0])
    if( profile.subname[0] === 'か' || profile.subname[0] === 'き' || profile.subname[0] === 'く' || profile.subname[0] === 'け' || profile.subname[0] === 'こ'){
      return profileContent(profile,index);
    }
    else{
      return;
    }
  
  }).join('')**/

  
  

})



document.addEventListener("DOMContentLoaded", () => {
  
  const data=local.store;
  
  listContent=JSON.parse(data);
  console.log(listContent)
  for (const item of listContent){
    console.log(item)
    /**const profileBox1=document.querySelector('.introduce_page1')
    const profileBox2=document.querySelector('.introduce_page2')

    const profileContent=(profile,index) => {
      return `<section class="myprofile">
      <div class="myfurigana">${profile.subname}</div>
      <div class="myname">${profile.name}</div>
      <div class="myfaculty">${profile.faculty}</div>
      </section>`
     
    }
    
    profileBox1.innerHTML=item.map((profile,index) => {
      console.log(profile.subname[0])
      if( profile.subname[0] === 'あ' || profile.subname[0] === 'い' || profile.subname[0] === 'う' || profile.subname[0] === 'え' || profile.subname[0] === 'お'){
        return profileContent(profile,index);
      }
      else{
        return;
      }
    
    }).join('')
    
    profileBox2.innerHTML=item.map((profile,index) => {
      console.log(profile.subname[0])
      if( profile.subname[0] === 'か' || profile.subname[0] === 'き' || profile.subname[0] === 'く' || profile.subname[0] === 'け' || profile.subname[0] === 'こ'){
        return profileContent(profile,index);
      }
      else{
        return;
      }
    
    }).join('')**/
    console.log(item.subname)
    const subnameInput=item.subname
    if(subnameInput[0]==='あ' || subnameInput[0]==='い' || subnameInput[0]==='う' ||subnameInput[0]==='え' ||subnameInput[0]==='お'){
      const profileBox1=document.querySelector('.introduce_page1')
      const litag=document.createElement('li');
      const ptag=document.createElement('p');
      const nameContent=item.name;
      const subnameContent=item.subname;
      const facultyContent=item.faculty;
      
      /**nameInput.value='';
      subnameInput.value='';
      facultyInput.value='';**/
  
      ptag.textContent=nameContent+subnameContent+facultyContent;
      litag.appendChild(ptag)
      profileBox1.appendChild(litag)
    }
    
  }
})

/*delete local.store**/