entries = [
  "2/1/19",
  "2/2/19"
];

window.onload = a;

function a() {
  x = window.location.pathname.substring(1).replace(/-/g, "/").replace(/\.html?/g, "");
  document.title = "ISP Journal " + x;
  document.getElementById("date").innerHTML = x;
  
  var sel1 = document.getElementById('topNav');
  //sel1.addEventListener(change, function() {window.location.pathname = this.options[this.selectedIndex].value;});
  //var sel2 = document.getElementById('bottomNav');
  //sel2.addEventListener(change, function() {window.location.pathname = this.options[this.selectedIndex].value;});
  
  for (var i = 0; i < entries.length; i++) {
    var opt = document.createElement('option');
    opt.text = entries[i];
    opt.value = entries[i].replace(/\//g, "-");
    sel1.appendChild(opt);
    //sel2.appendChild(opt);
  };
  /*var topNav = document.getElementsByTagName("select").item(0)
  var bottomNav = document.getElementsByTagName("select").item(1)
  
  entries.forEach(function(item) {d = document.createElement("option"); d.text = item; d.value = item.replace(/\//g, "-"); topNav.add(d); bottomNav.add(d); console.log(d);});
  */
};
