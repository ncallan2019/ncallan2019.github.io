window.onload = a()

function a() {
  x = window.location.pathname.substring(1).replace(/-/g, "/");
  document.title = "ISP Journal " + x;
  document.getElementById("title") = "ISP Journal " + x;
}
