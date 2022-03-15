define(['dojo/_base/declare', 'jimu/BaseWidget', "dojo/dom", "esri/layers/FeatureLayer"],
  function(declare, BaseWidget, dom, FeatureLayer) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {

      baseClass: 'jimu-widget-featureLayer',
     
      addLayer: function() {
        let urlValue = dom.byId('url').value;
        if (urlValue != ''){
          let layer = new FeatureLayer(urlValue);
          this.map.addLayer(layer);
        }
      }
    });
  });