$( document ).ready(function(){
  var errors = new Array();
  //check meta
  $('meta').each(function(){
    if($(this).attr('charset') == undefined) {
      if(this.content == '') {
        errors.push({
          'name' : 'Metatag em branco: <strong>' + ($(this).attr('name') != undefined ? $(this).attr('name') : $(this).attr('property')) + '</strong>'
        });
      }
    }
  });
  //check favicon
  if($('link[rel~="icon"]').attr('href') == '') {
    errors.push({
      'name' : '<strong>Favicon</strong> não encontrado'
    });
  }
  //check title
  if($('title').val() == '') {
    errors.push({
      'name' : '<strong>Title</strong> em branco'
    });
  }
  //check ga
  if(tracking_code == 'UA-XXXXX-X') {
    errors.push({
      'name' : 'ID do <strong>Google Analytics</strong> não configurado'
    });
  }

  //create div
  console.log(errors.length);
  if(errors.length > 0) {
    var skyline = $('<div>').css({ 'background-color': '#fff6bf', 'font-family': 'sans-serif', 'border' : '2px solid #ffd324', 'padding' : '10px' });
    var html = '<h1>Atenção, existem problemas a serem corrigidos antes da publicação!</h1>';
    html+='<ul>';
    $.each(errors, function(i, elem) {
      html+='<li>' + elem.name + '</li>';
    });
    html+='</ul>';

    skyline.html(html);

    $('body').prepend(skyline);
  }
});