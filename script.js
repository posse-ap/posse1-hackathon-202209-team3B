const heartButton=document.querySelector('.heart-count');
heartButton.addEventListener('click',() => {
  var thisCount=$('.count-number').html();
  thisCount=Number(thisCount);
  thisCount=thisCount + 1;
  $('.count-number').html(thisCount);

})