var lang = navigator.language || navigator.userLanguage;

if(lang.split('-')[0] == 'es') {
  $('.es').show();
  $('html').attr('lang', 'es');
} else {
  $('.en').show();
  $('html').attr('lang', 'en');
}
