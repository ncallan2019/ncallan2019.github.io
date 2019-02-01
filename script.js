window.onload = a;

function a() {
  x = window.location.pathname.substring(1).replace(/-/g, "/");
  document.title = "ISP Journal " + x;
  document.getElementById("date").innerHTML = "ISP Journal " + x;
}
