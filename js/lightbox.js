console.log('lightbox loaded');

jQuery(document).ready(function($) {
  $('.projectImg').click(function(e){

    e.preventDefault();

    var image_href = $(this).attr("src");

    console.log(image_href);

    if ($('.lightbox').length > 0) {
      $('.lightboxContent').html('<img src="' + image_href + '" />');
      $('.lightbox').show();
    } else {
      var lightbox =
                '<div class="lightbox">' +
                '<div class="lightboxClose">&#10006;</div>' +
                '<div class="lightboxContent">' +
                  '<img src="' + img_href + '"/>' +
                '</div>' +
              '</div>';

        $('body').append(lightbox);
    }
  });
    $('body').on('click', '.lightbox', function() {
    $('.lightbox').hide();
  });
  $('.lightboxClose').on('click', '.lightbox', function() {
  $('.lightbox').hide();
});

});
