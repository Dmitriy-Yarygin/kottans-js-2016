var myOptions = [ "normal", "multiply", "screen", "overlay", "darken",
                  "lighten", "color-dodge", "color-burn", "hard-light", "soft-light",
                   "difference", "exclusion", "hue", "saturation", "color", "luminosity" ]



var myPicture = document.getElementsByTagName('img')[0];
var selectorObj = document.getElementById("myMixSelector");

myOptions.forEach( function(item){ 
  addOption( selectorObj, item, item );  
} );


function addOption (oListbox, text, value){
  var oOption = document.createElement("option");
  oOption.appendChild(document.createTextNode(text));
  oOption.setAttribute("value", value);
  oListbox.appendChild(oOption);
}


 selectorObj.onchange = function(){
  if ( selectorObj.selectedIndex != -1)
    {
      myPicture.style.mixBlendMode = selectorObj.options[selectorObj.selectedIndex].value;
    }
 }



/* mix-blend-mode: normal;
mix-blend-mode: multiply;
mix-blend-mode: screen;
mix-blend-mode: overlay;
mix-blend-mode: darken;
mix-blend-mode: lighten;
mix-blend-mode: color-dodge;
mix-blend-mode: color-burn;
mix-blend-mode: hard-light;
mix-blend-mode: soft-light;
mix-blend-mode: difference;
mix-blend-mode: exclusion;
mix-blend-mode: hue;
mix-blend-mode: saturation;
mix-blend-mode: color;
mix-blend-mode: luminosity;
*/