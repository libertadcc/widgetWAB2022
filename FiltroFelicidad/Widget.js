define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function (declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      baseClass: 'filtro-felicidad',
      startup: function () {
        console.log(this.map)
        layer = this.map.getLayer("Felicidad_2016_1798");
      },

      filtrarPais() {
        texto = this.inputFiltrar.value;
        layer.setDefinitionExpression("Country = '" + texto + "'"); //`Country = '${texto}'`
      },
      filtrarRanking: function() {
        position = this.inputRanking.value;
        layer.setDefinitionExpression("Happiness_Rank = " + position)
      },
      restore() {
        layer.setDefinitionExpression(layer.defaultDefinitionExpression);
      }
    });

  });






