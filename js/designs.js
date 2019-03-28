/*jshint esversion: 6 */

const table = $('#pixel_canvas');
const inputHeight = $('#input_height');
const inputWidth = $('#input_width');

/*Grid size input*/
function makeGrid() {

  const height = parseInt(inputHeight.val());
  const width = parseInt(inputWidth.val());

  table.children().remove();

  for (let row = 0; row < height; row++) {

    const tr = $('<tr></tr>');

    for (let col = 0; col < width; col++) {
      tr.append(`<td></td>`);
    }
    table.append(tr);
  }
}
$('#submitBtn').on('click', makeGrid);

$('table').on('mousedown', 'td', function paint() {
  var color;
  color = $('#colorPicker').val();
  $(this).attr("bgcolor", color);
  $(this).dblclick(function() {
    $(this).removeAttr('bgcolor');

  });
});
