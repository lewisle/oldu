'use strict';

var $doc = $(document);

$doc.ready(function () {
  $doc.on('keypress', function (evt) {
    var $searchTextbox = $('#q');

    var searchTextboxNotFocused = $searchTextbox.is(':not(:focus)');
    if (searchTextboxNotFocused) {
      evt = evt || window.event;
      var charCode = evt.which || evt.keyCode;
      var charStr = String.fromCharCode(charCode);

      var charIsAlphanumeric = /[a-z0-9]/i.test(charStr);
      if (charIsAlphanumeric) {
        // Clear search text box and focus on it so users can continue searching
        // without having to use mouse to click back to the text box
        $searchTextbox.val('');
        $searchTextbox.focus();
      }
    }
  });
});
