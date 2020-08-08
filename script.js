const editor = theWYSIWYG.document; // IDEA: variable 'editor' :=> iframe name && its Document (iframe.document);

editor.designMode = "on";

boldButton.addEventListener("click", function() {
  editor.execCommand("Bold", false, null); // IDEA: iframe has a cool command/function(buildIn) that can 1, 2/ 3 parameters to change its setup ;)
}, false);

italicButton.addEventListener("click", function() {
  editor.execCommand("Italic", false, null); // IDEA: iframe has a cool command/function(buildIn) that can 1, 2/ 3 parameters to change its setup ;)
}, false);

underLine.addEventListener("click", function() {
  editor.execCommand("Underline", false, null); // IDEA: iframe has a cool command/function(buildIn) that can 1, 2/ 3 parameters to change its setup ;)
}, false);

supButton.addEventListener("click", function() {
  editor.execCommand("Superscript", false, null); // IDEA: iframe has a cool command/function(buildIn) that can 1, 2/ 3 parameters to change its setup ;)
}, false);

subButton.addEventListener("click", function() {
  editor.execCommand("Subscript", false, null); // IDEA: iframe has a cool command/function(buildIn) that can 1, 2/ 3 parameters to change its setup ;)
}, false);

strikeButton.addEventListener("click", function() {
  editor.execCommand("Strikethrough", false, null); // IDEA: iframe has a cool command/function(buildIn) that can 1, 2/ 3 parameters to change its setup ;)
}, false);

orderedList.addEventListener("click", function() {
  editor.execCommand("InsertOrderedList", false, "newOl" + Math.round(Math.random() * 1000)); // IDEA: iframe has a cool command/function(buildIn) that can 1, 2/ 3 parameters to change its setup ;)
}, false);

unOrdered.addEventListener("click", function() {
  editor.execCommand("InsertUnorderedList", false, "newUOl"); // IDEA: iframe has a cool command/function(buildIn) that can 1, 2/ 3 parameters to change its setup ;)
}, false);

fontColor.addEventListener("change", function(e) {
  editor.execCommand("ForeColor", false, e.target.value); // IDEA: iframe function for colour change gets argument as ForeColor and its event(User_choose Value) as target and React acc.
}, false);

highLight.addEventListener("change", function(e) {
  editor.execCommand("BackColor", false, e.target.value); // IDEA: iframe function for colour change gets argument as BackColor(background-color) and its event(User_choose Value) as target and React acc.
}, false);

fontSelector.addEventListener("change", function(e) {
  editor.execCommand("FontName", false, e.target.value); // IDEA: here iframe gets 3 argument for font (Name- fontfamily) and it treated as input, so event "change". value of target :)
}, false);

fontSizor.addEventListener("change", function(e) {
  editor.execCommand("FontSize", false, e.target.value); // IDEA: here iframe gets 3 argument for font (Size- font-Size) and it treated as input, so event "change". value of target ;)
}, false);

linkButton.addEventListener("click", function() {
  let universalResourceLocator = prompt("Enter URL", "http://");
  editor.execCommand("CreateLink", false, universalResourceLocator); // IDEA: iframe gets the URL from promt create Link through getting 3 arguments (create-link, false, promt(URL- universalResourceLocator));
}, false);

unLink.addEventListener("click", function() {
  editor.execCommand("UnLink", false, null);
}, false);

unDo.addEventListener("click", function() {
  editor.execCommand("undo", false, null);
}, false);

reDo.addEventListener("click", function() {
  editor.execCommand("redo", false, null);
}, false);
