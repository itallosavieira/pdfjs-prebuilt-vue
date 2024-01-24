// Create a new style sheet
let sheet = (function() {
  let style = document.createElement("style");
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style.sheet;
})();

function editToolBar() {
  // When the page is resized, the viewer hides and moves some buttons around.
  // This function forcibly shows all buttons so none of them disappear or re-appear on page resize
  removeGrowRules();

  /* Reorganizing the UI */
  // The 'addElemFromSecondaryToPrimary' function moves items from the secondary nav into the primary nav
  // There are 3 primary nav regions (toolbarViewerLeft, toolbarViewerMiddle, toolbarViewerRight)

  // Adding elements to the left part of the toolbar
  addElemFromSecondaryToPrimary('pageRotateCcw', 'toolbarViewerLeft');
  addElemFromSecondaryToPrimary('pageRotateCw', 'toolbarViewerLeft');
  addElemFromSecondaryToPrimary('previous', 'toolbarViewerLeft');
  addElemFromSecondaryToPrimary('pageNumber', 'toolbarViewerLeft');
  addElemFromSecondaryToPrimary('numPages', 'toolbarViewerLeft');
  addElemFromSecondaryToPrimary('next', 'toolbarViewerLeft');

  // Adding elements to the middle part of the toolbar
  addElemFromSecondaryToPrimary('zoomIn', 'toolbarViewerMiddle');
  addElemFromSecondaryToPrimary('zoomOut', 'toolbarViewerMiddle');

  // Adding elements to the right part of the toolbar
  addElemFromSecondaryToPrimary('secondaryOpenFile', 'toolbarViewerRight');

  removeElement('#editorModeButtons');
  removeElement('#viewOutline');
  removeElement('#viewAttachments');
  removeElement('#viewLayers');
  removeElement('#editorModeSeparator')
  removeElement('#secondaryOpenFile')
  removeElement('#secondaryToolbarToggle')
  removeElement('#scaleSelectContainer')
  removeElement('.verticalToolbarSeparator')
  removeElement('.splitToolbarButtonSeparator')
  removeElement('#pageRotateCw')
  removeElement('#pageRotateCcw')
}

function addElemFromSecondaryToPrimary(elemID, parentID) {
  let element = document.getElementById(elemID);
  let parent = document.getElementById(parentID);
  element.style.minWidth = "0px";
  element.innerHTML = '';
  parent.append(element);
}

function removeElement(element) {
  addCSSRule(sheet, element, 'display:none !important');
}

function removeGrowRules() {
  addCSSRule(sheet, '.hiddenSmallView *', 'display:block !important');
  addCSSRule(sheet, '.hiddenMediumView', 'display:block !important');
  addCSSRule(sheet, '.hiddenLargeView', 'display:block !important');
  addCSSRule(sheet, '.visibleSmallView', 'display:block !important');
  addCSSRule(sheet, '.visibleMediumView', 'display:block !important');
  addCSSRule(sheet, '.visibleLargeView', 'display:block !important');
  addCSSRule(sheet, '.visibleLargeView', 'display:block !important');
}

function addCSSRule(sheet, selector, rules, index) {
  if ("insertRule" in sheet) {
    sheet.insertRule(selector + "{" + rules + "}", index);
  } else if ("addRule" in sheet) {
    sheet.addRule(selector, rules, index);
  }
}

window.onload = editToolBar;