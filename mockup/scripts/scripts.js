var quotebox = document.getElementById('quotebox');
var spines = document.querySelectorAll('.spine');

for (var i = spines.length - 1; i >= 0; i--) {
  spines[i].onmouseenter = function() {
    this.classList.add("spine--active");
    var quote = this.getAttribute('data-quote');
    if(quote) { quotebox.innerText = '"' + quote + '"'; };
  }

  spines[i].onmouseleave = function() {
    this.classList.remove('spine--active');
    quotebox.innerText = ""
  }
}