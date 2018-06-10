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
