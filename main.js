$(document).ready(() => {
  $('#cart').on('click', () => {
    $('#cartMenu').show();
  });
  ('#accunt').on('click', () => {
    $('#accuntMenu').show();
  });
  ('#help').on('click', () => {
    $('#helpMenu').show();
  });

  $('.dropdown-menu').on('mouseLeave', () => {
{
    $('.dropdown-menu').hide()
  });
})


 