// window load function
$(window).on('load',function(){
  hidePageLoader();
  $('.cta .box-btn').on('click',function(){
    $('.ls-form-cnt').attr('data-show','');
    $('.ls-form-cnt').attr('data-show', $(this).attr('data-rel'))
  });
})

// show page loader function.
function showPageLoader(){
  $('.loader').show();
}
// hide page loader function
function hidePageLoader(){
  $('.loader').hide();
}
