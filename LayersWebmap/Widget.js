define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-layerList',
      postCreate: function() {
        console.log('postCreate', this.map);
        this.informacionMapa = this.map.itemInfo.item;
        this.capas = this.map.itemInfo.itemData.operationalLayers;
      },
  
      startup: function() {
        this.titulo.innerHTML = this.map.itemInfo.item.title;

        this.tablaInformacionMapa.innerHTML += "<tr><td><p>Identificador: " + this.map.itemId + "</p></td></tr>";
        this.tablaInformacionMapa.innerHTML += "<tr><td><p>Tipo: " + this.informacionMapa.type + "</p></td></tr>";
        this.tablaInformacionMapa.innerHTML += "<tr><td><p>Acceso: " + this.informacionMapa.access + "</p></td></tr>";
        this.tablaInformacionMapa.innerHTML += "<tr><td><p>Etiquetas: " + this.informacionMapa.tags + "</p></td></tr>";

        for(let i = 0; i<this.capas.length; i++){
          this.tablaListadoCapas.innerHTML += '<tr><td><p>' + this.capas[i].title + '</p></td><td><p>' + this.capas[i].id + '</p></td></tr>';
        }

      },
    });
  });


  // capas = this.map.itemInfo.itemData.operationalLayers;
  
  //       this.titulo.innerHTML = this.informacionMapa.title;
  
  //       this.tablaInformacionMapa.innerHTML += "<tr><td><p>Identificador: " + this.informacionMapa.id + "</p></td></tr>"
  //       this.tablaInformacionMapa.innerHTML += "<tr><td><p>Tipo: " + this.informacionMapa.type + "</p></td></tr>"
  //       this.tablaInformacionMapa.innerHTML += "<tr><td><p>Acceso: " + this.informacionMapa.access + "</p></td></tr>"
  //       this.tablaInformacionMapa.innerHTML += "<tr><td><p>Etiquetas: " + this.informacionMapa.tags + "</p></td></tr>"
  
  //       if(capas.length != 0) {
  //         for (let i = 0; i < capas.length; i++) {
  //           this.tablaListadoCapas.innerHTML += "<tr><td>" + capas[i].title +"</td><td>" + capas[i].id + "</td></tr>"
  //         }
  //       } else {
  //         this.tablaListadoCapas.innerHTML = "El mapa no contiene capas";
  //       }