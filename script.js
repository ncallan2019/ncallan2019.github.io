entries = [
  "2/1/19",
  "2/2/19"
];

window.onload = a;

function a() {
  x = window.location.pathname.substring(1).replace(/-/g, "/").replace(/\.html?/g, "");
  document.title = "ISP Journal " + x;
  document.getElementById("date").innerHTML = x;
  
  top = document.getElementsByTagName("select").item(0)
  bottom = document.getElementsByTagName("select").item(1)
  
  entries.forEach(function(item) {top.innerHTML += "<option value=\"" + item.replace(/\//g, "-") + "\">" + item + "</option>"});
};
