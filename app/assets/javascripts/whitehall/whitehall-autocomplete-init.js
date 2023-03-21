/* AUTOCOMPLETE */
(function($){
    $.fn.autocomplete = function() {
      var eID = '#' + $(this).attr('id');
      const $e = document.querySelector(eID);
      if ($e && $e !== null && $e !== undefined) {
        accessibleAutocomplete.enhanceSelectElement({
            selectElement: $e
        });
      }
      return this;
    };
  })( jQuery );