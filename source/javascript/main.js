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
