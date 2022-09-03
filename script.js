const heartButton=document.querySelector('.heart_button');
var numberSum=[];
heartButton.addEventListener('click',() => {
  
  var thisCount=$('.count_number').html();
  thisCount=Number(thisCount);
  thisCount=thisCount + 1;
  $('.count_number').html(thisCount);

  $('.heart_button,.heart_icon').addClass('clicked');


  
})