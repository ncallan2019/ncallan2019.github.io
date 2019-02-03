entries = [
  "2/1/19",
  "2/2/19"
];

window.onload = a;

function a() {
  x = window.location.pathname.substring(1).replace(/-/g, "/").replace(/\.html?/g, "");
  document.title = "ISP Journal " + x;
  document.getElementById("date").innerHTML = x;
  
  var topNav = document.getElementsByTagName("select").item(0)
  var bottomNav = document.getElementsByTagName("select").item(1)
  
  entries.forEach(function(item) {d = document.createElement("option"); d.text = item; d.value = item.replace(/\//g, "-"); topNav.add(d); bottomNav.add(d); console.log(d);});
};
