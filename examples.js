$(document).ready(function(){

  $.ajax({
    url:'/data.json'
  }) .done(function(json){

    var source = $('#list').html();
    var template = Handlebars.compile(source);

    var context = {color: json, value: json};
    var html = template(context);

    $('body').html(html);
  });
});
