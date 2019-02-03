entries = [
  "2/1/19",
  "2/2/19"
];

window.onload = a;

function a() {
  x = window.location.pathname.substring(1).replace(/-/g, "/").replace(/\.html?/g, "");
  document.title = "ISP Journal " + x;
  document.getElementById("date").innerHTML = x;
  
  var sel = document.getElementById('topNav');
  for (var i = 0; i < entries.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = entries[i];
    opt.value = entries[i];
    sel.appendChild(opt);
  };
  /*var topNav = document.getElementsByTagName("select").item(0)
  var bottomNav = document.getElementsByTagName("select").item(1)
  
  entries.forEach(function(item) {d = document.createElement("option"); d.text = item; d.value = item.replace(/\//g, "-"); topNav.add(d); bottomNav.add(d); console.log(d);});
  */
};
