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
    tohtml += '<tr class="tiron"><td>' + element.invoiceNum + '</td><td>' + element.reference +
    '</td><td>' + element.Supplier + '</td><td>' + element.Date + '</td><td>' +
    element.Status + '</td><td><span class="amounts">' + element.Amounts + '</span> SEK</td><td>' + element.Organization +
    '</td><td>'+ element.options + '<a href="#/"><img onclick="clicks()" class="append-div" src="public/assets/stylesheets/images/fsf.png"></a><a href="#/"><img src="public/assets/stylesheets/images/burg.png"></a></td></tr>' +
    `<tr class="table-data">
      <td>
        <div class="table-data-inputs">
          <form class="table-data-forms" action="index.html" method="post">
            <div class="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
            </div>
            <div class="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
              <input type="text" name="" value="">
            </div>
          </form>
        </div>
      </td>
    </tr>`;
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

// table data box jquery





$(document).ready(function() {

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCB0YWJsZUNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVtbycpO1xyXG5sZXQgbXlSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbm15UmVxdWVzdC5vcGVuKCdHRVQnLCAnaXRlbXMuanNvbicpO1xyXG5teVJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKG15UmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gIHNob3dodG1sKGRhdGEpO1xyXG59O1xyXG5teVJlcXVlc3Quc2VuZCgpO1xyXG5cclxuZnVuY3Rpb24gc2hvd2h0bWwoZGF0YSkge1xyXG4gIGxldCB0b2h0bWwgPSBcIlwiO1xyXG4gIGRhdGEuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICB0b2h0bWwgKz0gJzx0ciBjbGFzcz1cInRpcm9uXCI+PHRkPicgKyBlbGVtZW50Lmludm9pY2VOdW0gKyAnPC90ZD48dGQ+JyArIGVsZW1lbnQucmVmZXJlbmNlICtcclxuICAgICc8L3RkPjx0ZD4nICsgZWxlbWVudC5TdXBwbGllciArICc8L3RkPjx0ZD4nICsgZWxlbWVudC5EYXRlICsgJzwvdGQ+PHRkPicgK1xyXG4gICAgZWxlbWVudC5TdGF0dXMgKyAnPC90ZD48dGQ+PHNwYW4gY2xhc3M9XCJhbW91bnRzXCI+JyArIGVsZW1lbnQuQW1vdW50cyArICc8L3NwYW4+IFNFSzwvdGQ+PHRkPicgKyBlbGVtZW50Lk9yZ2FuaXphdGlvbiArXHJcbiAgICAnPC90ZD48dGQ+JysgZWxlbWVudC5vcHRpb25zICsgJzxhIGhyZWY9XCIjL1wiPjxpbWcgb25jbGljaz1cImNsaWNrcygpXCIgY2xhc3M9XCJhcHBlbmQtZGl2XCIgc3JjPVwicHVibGljL2Fzc2V0cy9zdHlsZXNoZWV0cy9pbWFnZXMvZnNmLnBuZ1wiPjwvYT48YSBocmVmPVwiIy9cIj48aW1nIHNyYz1cInB1YmxpYy9hc3NldHMvc3R5bGVzaGVldHMvaW1hZ2VzL2J1cmcucG5nXCI+PC9hPjwvdGQ+PC90cj4nICtcclxuICAgIGA8dHIgY2xhc3M9XCJ0YWJsZS1kYXRhXCI+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtZGF0YS1pbnB1dHNcIj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwidGFibGUtZGF0YS1mb3Jtc1wiIGFjdGlvbj1cImluZGV4Lmh0bWxcIiBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPmA7XHJcbiAgfSk7XHJcbiAgLy90b2h0bWwgKz0gJzx0cj48dGQ+JyArIGRhdGFbMF0uaW52b2ljZU51bSArICc8L3RkPjx0ZD4nICsgZGF0YVswXS5yZWZlcmVuY2UgKyAnPC90ZD48dGQ+JyArIGRhdGFbMF0uU3VwcGxpZXIgKyAnPC90ZD48L3RyPidcclxuICB0YWJsZUNvbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0b2h0bWwpO1xyXG59XHJcblxyXG4vLyBTZWFyY2ggYmFyXHJcblxyXG5sZXQgc2VhcmNoQmFyID0gZG9jdW1lbnQuZm9ybXNbJ3NlYXJjaC1ib3gnXS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgbGV0IHRlcm0gPSBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gIGxldCBib3hzID0gdGFibGVDb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXJvbicpO1xyXG4gIEFycmF5LmZyb20oYm94cykuZm9yRWFjaChmdW5jdGlvbihib3gpIHtcclxuICAgIGxldCB0aXRsZSA9IGJveC50ZXh0Q29udGVudDtcclxuICAgIGlmKHRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXJtKSAhPSAtMSkge1xyXG4gICAgICBib3guc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8gdGFibGUgZGF0YSBib3gganF1ZXJ5XHJcblxyXG5cclxuXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG59KTtcclxuIl19
