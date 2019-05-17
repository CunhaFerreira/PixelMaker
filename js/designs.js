/*jshint esversion: 6 */
const table = $('#pixel_canvas');
const inputHeight = $('#input_height');
const inputWidth = $('#input_width');

/*
 *** Make Grid ***
 */
function makeGrid(x) {

  /* Select size input */
  const height = parseInt(inputHeight.val());
  const width = parseInt(inputWidth.val());

  /* Shows a message if number is greater than 50 */
  if (inputHeight.val() > 50) {

    const message = "Valid number less than 50";
    return alert(message);

  }
  if (inputWidth.val() > 50) {

    const message = "Valid number less than 50";
    return alert(message);

  }

  table.children().remove();

  /* Create the Grid */
  for (let row = 0; row < height; row++) {

    const tr = $('<tr></tr>');

    for (let col = 0; col < width; col++) {
      tr.append('<td></td>');
    }
    table.append(tr);
  }

}

$('#submitBtn').on('click', makeGrid);

/*
 *** Painting ***
 */
$('table').on('mousedown', 'td', function () {
  var color;
  color = $('#colorPicker').val();
  $(this).attr("bgcolor", color);

  /* Remove color doubleClick*/
  $(this).dblclick(function () {
    $(this).removeAttr('bgcolor');
  });

});

/*
 *** Make a Default Grid ***
 */
function def() {
  for (var row = 0; row < 10; row += 1) {
    var para = document.createElement("tr");

    for (var col = 0; col < 10; col += 1) {
      var node = document.createElement("td");
      para.appendChild(node);
      var element = document.getElementById("pixel_canvas");
      element.appendChild(para);

    }
  }
}
def();
