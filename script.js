window.onload = a()

function a() {
  x = window.location.pathname.substring(1).replace(/-/g, "/");
  document.title = "ISP Journal " + x;
  window.onload = document.getElementById("title") = "ISP Journal " + x;
}
