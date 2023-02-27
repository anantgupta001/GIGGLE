const scrollTopButton = document.getElementById("scroll-top");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

scrollTopButton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




