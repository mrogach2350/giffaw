$(document).on("ready", function(){
  $('form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
        method:'GET',
        url: "http://api.giphy.com/v1/gifs/search?",
        data: $("form").serialize().concat('&api_key=dc6zaTOxFJmzC'),
        success: displayGifs
    });
  });
  $('#reset').on('click', function handleEvent(event){
    $('img').remove();
  });
  $('#add25').on('click', function handleEvent(event){
    $('.gif-gallery').prepend('<img src="'+ json.data[i].images.downsized.url +'"/>' )
  });
});

function displayGifs(json){
  console.log(json);
  for (var i = 0; i < json.data.length; i++){
    console.log(json.data[i].url);
    $('.gif-gallery').append('<img src="'+ json.data[i].images.downsized.url +'"/>' )
  }
}
