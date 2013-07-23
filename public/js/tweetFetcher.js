$(document).ready(function(){

  var tweetFetch = function(that){
    if ($('.rush').length > $('.maher').length)
    {
      console.log(that);
      $(that).toggleClass('maher');
      counter = 0;
      $.getJSON("http://bstshk-replacement.herokuapp.com/?callback=?&screen_name=@billmaher",function(data){
          var html = "";
          $.each(data,function(key,value){
            html += '<div class="entry">';
            html += '<div class="text">'+ value.text + '</div>';
            html += '<div class="text">'+ value.created_at + '</div>';
            html += '</div>';
              $.each(value.entities.user_mentions,function(key1,value1){
              html += '<div class="entry">';
              html += '<div class="text">'+ value1.name + '</div>';
              html += '</div>';
              });
            html += '<hr>';
          });
          $(".yahoo").html(html);
      });
    }
    else
    {
      console.log(that);
      $(that).toggleClass('rush');
      counter = 1;
      $.getJSON("http://bstshk-replacement.herokuapp.com/?callback=?&screen_name=@limbaugh",function(data){
          var html = "";
          $.each(data,function(key,value){
            html += '<div class="entry">';
            html += '<div class="text">'+ value.text + '</div>';
            html += '<div class="text">'+ value.created_at + '</div>';
            html += '</div>';
              $.each(value.entities.user_mentions,function(key1,value1){
              html += '<div class="entry">';
              html += '<div class="text">'+ value1.name + '</div>';
              html += '</div>';
              });
            html += '<hr>';
           });
          $(".yahoo").html(html);
      });
    }
    // console.log($('.rush').length > $('.maher').length);
    };

  $('.inner').on('click', function(){tweetFetch(this)});
});
