

window.onload = a;

function a() {
  x = window.location.pathname.substring(1).replace(/-/g, "/").replace(/\.html?/g, "");
  document.title = "ISP Journal " + x;
  document.getElementById("date").innerHTML = x;
  
  top = document.getElementsByTagName("select").item(0)
  bottom = document.getElementsByTagName("select").item(1)
  
  for (var key in p) {
    if (p.hasOwnProperty(key)) {
        .innerHTML+="<option>dfdf</option>"
    }
  }
}
