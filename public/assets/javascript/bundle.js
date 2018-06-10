let tableCont = document.getElementById('demo');
let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'items.json');
myRequest.onload = function() {
  let data = JSON.parse(myRequest.responseText);
  showhtml(data);
};
myRequest.send();

function showhtml(data) {
  let tohtml = "";
  data.forEach(function(element) {
    tohtml += '<tbody><tr class="tiron"><td><div class="expand-col"></div><div class="dfspace"></div>' + element.invoiceNum + '</td><td><div class="dfspace"></div>' + element.reference +
    '</td><td><div class="dfspace"></div>' + element.Supplier + '</td><td><div class="dfspace"></div>' + element.Date + '</td><td><div class="dfspace"></div>' +
    element.Status + '</td><td><div class="dfspace"></div><span class="amounts">' + element.Amounts + '<span class="sek"> SEK</span></span></td><td><div class="dfspace"></div>' + element.Organization +
    '</td><td><div class="expand-col-right"></div><div class="dfspace"></div>'+ element.options + '<a class="append-tr" href="#/"><img class="arrow-select" src="public/assets/stylesheets/images/fsf.png"><img class="arrow-select1" src="public/assets/stylesheets/images/Selected.png"></a><a href="#/"><img src="public/assets/stylesheets/images/burg.png"></a></td></tr>' +
    '<tr class="newtr"><td colspan="8"><form><input class="expand-input" type="text" name="" value="" placeholder="*Konto"><input class="expand-input" type="text" name="" value="" placeholder="*Kostnadsställe"><input class="expand-input" type="text" name="" value="" placeholder="*V-gren"><input class="expand-input" type="text" name="" value="" placeholder="*Aktivitet"><input class="expand-input" type="text" name="" value="" placeholder="Beskrivning"><input class="expand-input" type="text" name="" value="" placeholder="Projekt"><input class="expand-input" type="text" name="" value="" placeholder="Motpart"><input class="expand-input" type="text" name="" value=""placeholder="Period. kod"><div class="clip-sek"><img src="public/assets/stylesheets/images/Clipboard-normal.png"><div class="expand-sek">300.00 SEK</div></div></form></td></tr>' +
    '<tr class="newtr1"><td colspan="8"><form><input class="expand-input" type="text" name="" value="" placeholder="*Konto"><input class="expand-input" type="text" name="" value="" placeholder="*Kostnadsställe"><input class="expand-input" type="text" name="" value="" placeholder="*V-gren"><input class="expand-input" type="text" name="" value="" placeholder="*Aktivitet"><input class="expand-input" type="text" name="" value="" placeholder="Beskrivning"><input class="expand-input" type="text" name="" value="" placeholder="Projekt"><input class="expand-input" type="text" name="" value="" placeholder="Motpart"><input class="expand-input" type="text" name="" value=""placeholder="Period. kod"><div class="clip-sek"><img src="public/assets/stylesheets/images/Cliptext-normal.png"><div class="expand-sek">300.00 SEK</div></div><a class="visalogg" href="#/">Visa logg</a></form><div class="space-to-bottom"></div></td></tr></tbody>';
  });
  //tohtml += '<tr><td>' + data[0].invoiceNum + '</td><td>' + data[0].reference + '</td><td>' + data[0].Supplier + '</td></tr>'
  tableCont.insertAdjacentHTML('beforeend', tohtml);
}

// Search bar

let searchBar = document.forms['search-box'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
  let term = e.target.value.toLowerCase();
  let boxs = tableCont.querySelectorAll('.tiron');
  Array.from(boxs).forEach(function(box) {
    let title = box.textContent;
    if(title.toLowerCase().indexOf(term) != -1) {
      box.style.display = '';
    } else {
      box.style.display = 'none';
    }
  });
});




function panaikint() {
  let naikink = document.querySelectorAll('.tablepvz');
  for(let s = 0; s < naikink.length; s++) {
  if(naikink[s].style.display === "none") {
    naikink[s].style.display = "block";
  } else {
    naikink[s].style.display = "none";
  }
}
}

// table data box jquery

$(document).ready(function() {
  $('#demo').on('click', '.append-tr', function() {
    $(this).closest('tbody').toggleClass('open');
    $(this).closest('.tiron').toggleClass('active-tr');
  });
  $(".append-tr").click(function() {
    $('.arrow-select, .arrow-select1', this).toggle();
  });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdGFibGVDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbW8nKTtcclxubGV0IG15UmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5teVJlcXVlc3Qub3BlbignR0VUJywgJ2l0ZW1zLmpzb24nKTtcclxubXlSZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gIGxldCBkYXRhID0gSlNPTi5wYXJzZShteVJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICBzaG93aHRtbChkYXRhKTtcclxufTtcclxubXlSZXF1ZXN0LnNlbmQoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dodG1sKGRhdGEpIHtcclxuICBsZXQgdG9odG1sID0gXCJcIjtcclxuICBkYXRhLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgdG9odG1sICs9ICc8dGJvZHk+PHRyIGNsYXNzPVwidGlyb25cIj48dGQ+PGRpdiBjbGFzcz1cImV4cGFuZC1jb2xcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZGZzcGFjZVwiPjwvZGl2PicgKyBlbGVtZW50Lmludm9pY2VOdW0gKyAnPC90ZD48dGQ+PGRpdiBjbGFzcz1cImRmc3BhY2VcIj48L2Rpdj4nICsgZWxlbWVudC5yZWZlcmVuY2UgK1xyXG4gICAgJzwvdGQ+PHRkPjxkaXYgY2xhc3M9XCJkZnNwYWNlXCI+PC9kaXY+JyArIGVsZW1lbnQuU3VwcGxpZXIgKyAnPC90ZD48dGQ+PGRpdiBjbGFzcz1cImRmc3BhY2VcIj48L2Rpdj4nICsgZWxlbWVudC5EYXRlICsgJzwvdGQ+PHRkPjxkaXYgY2xhc3M9XCJkZnNwYWNlXCI+PC9kaXY+JyArXHJcbiAgICBlbGVtZW50LlN0YXR1cyArICc8L3RkPjx0ZD48ZGl2IGNsYXNzPVwiZGZzcGFjZVwiPjwvZGl2PjxzcGFuIGNsYXNzPVwiYW1vdW50c1wiPicgKyBlbGVtZW50LkFtb3VudHMgKyAnPHNwYW4gY2xhc3M9XCJzZWtcIj4gU0VLPC9zcGFuPjwvc3Bhbj48L3RkPjx0ZD48ZGl2IGNsYXNzPVwiZGZzcGFjZVwiPjwvZGl2PicgKyBlbGVtZW50Lk9yZ2FuaXphdGlvbiArXHJcbiAgICAnPC90ZD48dGQ+PGRpdiBjbGFzcz1cImV4cGFuZC1jb2wtcmlnaHRcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZGZzcGFjZVwiPjwvZGl2PicrIGVsZW1lbnQub3B0aW9ucyArICc8YSBjbGFzcz1cImFwcGVuZC10clwiIGhyZWY9XCIjL1wiPjxpbWcgY2xhc3M9XCJhcnJvdy1zZWxlY3RcIiBzcmM9XCJwdWJsaWMvYXNzZXRzL3N0eWxlc2hlZXRzL2ltYWdlcy9mc2YucG5nXCI+PGltZyBjbGFzcz1cImFycm93LXNlbGVjdDFcIiBzcmM9XCJwdWJsaWMvYXNzZXRzL3N0eWxlc2hlZXRzL2ltYWdlcy9TZWxlY3RlZC5wbmdcIj48L2E+PGEgaHJlZj1cIiMvXCI+PGltZyBzcmM9XCJwdWJsaWMvYXNzZXRzL3N0eWxlc2hlZXRzL2ltYWdlcy9idXJnLnBuZ1wiPjwvYT48L3RkPjwvdHI+JyArXHJcbiAgICAnPHRyIGNsYXNzPVwibmV3dHJcIj48dGQgY29sc3Bhbj1cIjhcIj48Zm9ybT48aW5wdXQgY2xhc3M9XCJleHBhbmQtaW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiKktvbnRvXCI+PGlucHV0IGNsYXNzPVwiZXhwYW5kLWlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIipLb3N0bmFkc3N0w6RsbGVcIj48aW5wdXQgY2xhc3M9XCJleHBhbmQtaW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiKlYtZ3JlblwiPjxpbnB1dCBjbGFzcz1cImV4cGFuZC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCIqQWt0aXZpdGV0XCI+PGlucHV0IGNsYXNzPVwiZXhwYW5kLWlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkJlc2tyaXZuaW5nXCI+PGlucHV0IGNsYXNzPVwiZXhwYW5kLWlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIlByb2pla3RcIj48aW5wdXQgY2xhc3M9XCJleHBhbmQtaW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiTW90cGFydFwiPjxpbnB1dCBjbGFzcz1cImV4cGFuZC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIHZhbHVlPVwiXCJwbGFjZWhvbGRlcj1cIlBlcmlvZC4ga29kXCI+PGRpdiBjbGFzcz1cImNsaXAtc2VrXCI+PGltZyBzcmM9XCJwdWJsaWMvYXNzZXRzL3N0eWxlc2hlZXRzL2ltYWdlcy9DbGlwYm9hcmQtbm9ybWFsLnBuZ1wiPjxkaXYgY2xhc3M9XCJleHBhbmQtc2VrXCI+MzAwLjAwIFNFSzwvZGl2PjwvZGl2PjwvZm9ybT48L3RkPjwvdHI+JyArXHJcbiAgICAnPHRyIGNsYXNzPVwibmV3dHIxXCI+PHRkIGNvbHNwYW49XCI4XCI+PGZvcm0+PGlucHV0IGNsYXNzPVwiZXhwYW5kLWlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIipLb250b1wiPjxpbnB1dCBjbGFzcz1cImV4cGFuZC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCIqS29zdG5hZHNzdMOkbGxlXCI+PGlucHV0IGNsYXNzPVwiZXhwYW5kLWlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIipWLWdyZW5cIj48aW5wdXQgY2xhc3M9XCJleHBhbmQtaW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiKkFrdGl2aXRldFwiPjxpbnB1dCBjbGFzcz1cImV4cGFuZC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJCZXNrcml2bmluZ1wiPjxpbnB1dCBjbGFzcz1cImV4cGFuZC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWt0XCI+PGlucHV0IGNsYXNzPVwiZXhwYW5kLWlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIk1vdHBhcnRcIj48aW5wdXQgY2xhc3M9XCJleHBhbmQtaW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiB2YWx1ZT1cIlwicGxhY2Vob2xkZXI9XCJQZXJpb2QuIGtvZFwiPjxkaXYgY2xhc3M9XCJjbGlwLXNla1wiPjxpbWcgc3JjPVwicHVibGljL2Fzc2V0cy9zdHlsZXNoZWV0cy9pbWFnZXMvQ2xpcHRleHQtbm9ybWFsLnBuZ1wiPjxkaXYgY2xhc3M9XCJleHBhbmQtc2VrXCI+MzAwLjAwIFNFSzwvZGl2PjwvZGl2PjxhIGNsYXNzPVwidmlzYWxvZ2dcIiBocmVmPVwiIy9cIj5WaXNhIGxvZ2c8L2E+PC9mb3JtPjxkaXYgY2xhc3M9XCJzcGFjZS10by1ib3R0b21cIj48L2Rpdj48L3RkPjwvdHI+PC90Ym9keT4nO1xyXG4gIH0pO1xyXG4gIC8vdG9odG1sICs9ICc8dHI+PHRkPicgKyBkYXRhWzBdLmludm9pY2VOdW0gKyAnPC90ZD48dGQ+JyArIGRhdGFbMF0ucmVmZXJlbmNlICsgJzwvdGQ+PHRkPicgKyBkYXRhWzBdLlN1cHBsaWVyICsgJzwvdGQ+PC90cj4nXHJcbiAgdGFibGVDb250Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdG9odG1sKTtcclxufVxyXG5cclxuLy8gU2VhcmNoIGJhclxyXG5cclxubGV0IHNlYXJjaEJhciA9IGRvY3VtZW50LmZvcm1zWydzZWFyY2gtYm94J10ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xyXG4gIGxldCB0ZXJtID0gZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICBsZXQgYm94cyA9IHRhYmxlQ29udC5xdWVyeVNlbGVjdG9yQWxsKCcudGlyb24nKTtcclxuICBBcnJheS5mcm9tKGJveHMpLmZvckVhY2goZnVuY3Rpb24oYm94KSB7XHJcbiAgICBsZXQgdGl0bGUgPSBib3gudGV4dENvbnRlbnQ7XHJcbiAgICBpZih0aXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGVybSkgIT0gLTEpIHtcclxuICAgICAgYm94LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHBhbmFpa2ludCgpIHtcclxuICBsZXQgbmFpa2luayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZXB2eicpO1xyXG4gIGZvcihsZXQgcyA9IDA7IHMgPCBuYWlraW5rLmxlbmd0aDsgcysrKSB7XHJcbiAgaWYobmFpa2lua1tzXS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgbmFpa2lua1tzXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYWlraW5rW3NdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn1cclxufVxyXG5cclxuLy8gdGFibGUgZGF0YSBib3gganF1ZXJ5XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAkKCcjZGVtbycpLm9uKCdjbGljaycsICcuYXBwZW5kLXRyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3Rib2R5JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICQodGhpcykuY2xvc2VzdCgnLnRpcm9uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS10cicpO1xyXG4gIH0pO1xyXG4gICQoXCIuYXBwZW5kLXRyXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmFycm93LXNlbGVjdCwgLmFycm93LXNlbGVjdDEnLCB0aGlzKS50b2dnbGUoKTtcclxuICB9KTtcclxufSk7XHJcbiJdfQ==
