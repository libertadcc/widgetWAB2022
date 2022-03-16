define(['dojo/_base/declare', 'jimu/BaseWidget', 
"esri/layers/WMSLayerInfo", "esri/layers/WMSLayer", "esri/geometry/Extent",
'dojo/dom', 'dojo/on'],
  function(declare, BaseWidget, WMSLayerInfo, WMSLayer, Extent, dom, on) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-WMSLoader',
      name: "WMSLoader",
      onOpen: function() {
        console.log('this',this.map)
      },
      addWMS: function(){
        if(this.wmsTextBox.value != '') {
          var layerInfo = new WMSLayerInfo({
            name: this.config.nombre_capa,
            title: this.config.titulo_capa
          });

          var resourceInfo = {
            extent: new Extent(-4.416832, 41.765378,-0.198082, 43.225400, {wkid:4326}), 
            layerInfos: [layerInfo]
          };

          var wmsLayer = new WMSLayer(this.wmsTextBox.value, {
            resourceInfo: resourceInfo,
            visibleLayers: [this.config.nombre_capa]
          });
          
          this.map.addLayer(wmsLayer);
      
          var extent = wmsLayer.fullExtent;

          this.map.setExtent(extent);    
        }
      }      
    });
  });