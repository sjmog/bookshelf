var Spine = function(title, author, logo) {
  this.BASE_SPINE_WIDTH = "30vw"
  this.title = title;
  this.author = author;
  this.logo = logo;
};

Spine.prototype.initialize = function() {
  this.width = Math.random() * this.BASE_SPINE_WIDTH;
};

var spines = document.querySelectorAll('.spine');

for (var i = spines.length - 1; i >= 0; i--) {
  spines[i].width = 30;
}