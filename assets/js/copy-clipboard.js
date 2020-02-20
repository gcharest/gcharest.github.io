//Adapted from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function copyText(id, text) {
  /* Get the text field */
  var copyText = document.getElementById(id);

  console.log(text)
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert(text.toString() + copyText.value);
}