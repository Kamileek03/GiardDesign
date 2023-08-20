//Wysuwana oferta
function oferta() {
    document.getElementById("lista").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.ofertabtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
//Popup
function popup(){
  document.querySelectorAll('.zdjecia img').forEach(png =>{
    png.onclick = () =>{
      document.querySelector('.popup').style.display = 'block';
      document.querySelector('.popup img').src = png.getAttribute('src');
    }
  });

  document.querySelector('.popup span').onclick = () =>{
    document.querySelector('.popup').style.display = 'none';
  }
}
//wyszukiwarka
function searchbar(){
  let searchbtn = document.querySelector('.searchbtn');
  let closebtn = document.querySelector('.closebtn');
  let searchbox = document.querySelector('.searchbox');
  let menu = document.querySelector('.menu');
  let header = document.querySelector('header');

  searchbtn.onclick = function(){
    searchbox.classList.add('active');
    closebtn.classList.add('active');
    searchbtn.classList.add('active');
    menu.classList.add('hide');
    header.classList.remove('open');
  }
  closebtn.onclick = function(){
    searchbox.classList.remove('active');
    closebtn.classList.remove('active');
    searchbtn.classList.remove('active');
    menu.classList.remove('hide');
  }

  menutoggle.onclick = function(){
    header.classList.toggle('open');
    searchbox.classList.remove('active');
    closebtn.classList.remove('active');
    searchbtn.classList.remove('active');
  }
}