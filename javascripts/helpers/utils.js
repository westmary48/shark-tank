const printToDom = (divId, textToPrint) => {
  // $('#tank')
  // const selectedDiv = $(`${divId}`);
  // const selectedDiv = document.getElementById(divId);
  // selectedDiv.html(textToPrint) = textToPrint;
  $(`#${divId}`).html(textToPrint);
}

export default { printToDom }