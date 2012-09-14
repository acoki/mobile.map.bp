// add dojo.require
dojo.require("esri.map");

function init() {
	// orientation change enabled
    var supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

    window.addEventListener(orientationEvent, function () {
        orientationChanged();
    }, false);
    function orientationChanged() {
        console.log("Orientation changed: " + window.orientation);
        if(map){
          map.reposition();
          map.resize();
        }
      }	

}
function hideAddressBar()
      {
          if(!window.location.hash)
          {
              if(document.height <= window.outerHeight + 10)
              {
                  document.body.style.height = (window.outerHeight + 50) +'px';
                  setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
              }
              else
              {
                  setTimeout( function(){ window.scrollTo(0, 1); }, 0 );
              }
          }
      }

      window.addEventListener("load", hideAddressBar );
      window.addEventListener("orientationchange", hideAddressBar );
dojo.addOnLoad(init);