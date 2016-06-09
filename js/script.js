// Problem: Need to be able to search gallery for images
// Solution: Use JavaScript to filter search results based on the img name property


$("#search").keyup(function() {
    // Grab a searched title 
      var searchInput = $(this).val();
    // Put a loop on the element 
      $(".gallerylist img").each(function() {
    // Show only matched titles and make lower case
        var searchTitle = $(this).attr("title");
        if(searchTitle.toLowerCase().search(searchInput.toLowerCase()) >= 0) {
    // Only show img if searchInput matches title, hide all that do not match
          $(this).slideDown();
        } else {
          $(this).slideUp();
        }
      });
    });

$.simpleLightbox({
    closeText: 'Close',
    navText:    ['&larr;','&rarr;'],
});

