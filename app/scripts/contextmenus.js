'use strict';

chrome.contextMenus.create({
  "title": chrome.i18n.getMessage("contextMenuTitle"),
  "contexts": ["selection"],
  "onclick": function (info, tab) {
    var selectionText = info.selectionText;
    window.open('http://www.oxfordlearnersdictionaries.com/definition/english/' + selectionText + '?q=' + selectionText, '_blank');
  }
});
