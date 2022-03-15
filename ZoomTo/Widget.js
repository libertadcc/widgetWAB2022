define(['dojo/_base/declare', 'jimu/BaseWidget', 'esri/geometry/Point', 'dojo/dom'],
  function(declare, BaseWidget, Point, dom) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-zoom',
      name: "ZoomTo",
      
      onZoomClick: function(){
        console.log('has hecho click');
        var lat = dom.byId("latitud");
        var long = dom.byId("longitud");
        var zoom = dom.byId("zoom");

        var punto = new Point(long.value, lat.value);
        // console.log('punto', punto);

        this.map.centerAndZoom(punto, zoom.value);
      }
    });
  });