
function procesar(url){
  $.ajax({
    type: "GET",
    url: url,
    dataType: "xml",
    success: function (xml) {

      var i = 0;

      $(xml).find('jugadores').children('jugador').each(function () {
        var sFullName = $(this).find('nombre').text() + $(this).find('apellidos').text();
        var edad = $(this).find('edad').text() + " años";
        var imagen = $(this).find('imagen').text();
        $("<h2></h2>").html(sFullName).appendTo("div");
        $("<p></p>").html(edad).appendTo("div");
        $("<img></img>").attr('src', "" + imagen + "").appendTo("div");
        $("<h3></h3>").html("Físico").appendTo("div");
        var altura = $(this).children('fisico').find('altura').text() + " cm";
        var peso = $(this).children('fisico').find('peso').text() + " kg";
        $("<li><li>").html(altura).appendTo("div");
        $("<li><li>").html(peso).appendTo("div");
        $("<h3></h3>").html("Trayectoria").appendTo("div");
        var temporadas = $(this).children('trayectoria').find('temporadas').text() + " temporadas, ";
        var partidos = $(this).children('trayectoria').find('partidos').text() + " partidos, ";
        var puntos = $(this).children('trayectoria').find('puntos').text() + " puntos por partido, ";
        var anillos = $(this).children('trayectoria').find('anillos').text() + " anillos de la NBA y ";
        var mvp = $(this).children('trayectoria').find('mvp').text() + " MVP.";
        $("<p></p>").html(temporadas + partidos + puntos + anillos + mvp).appendTo("div");
        $(this).find('trayectoria').children('equipo').each(function () {
          var equipo = $(this).find('ciudad').text() + $(this).find('franquicia').text();
          var temporadas = $(this).find('temporadas').text();
          var partidos = $(this).find('partidos').text();
          var puntos = $(this).find('puntos').text();
          var anillos = $(this).find('anillos').text();
          var mvp = $(this).find('mvp').text();
          $("<h4></h4>").html(equipo).appendTo("div");
          $("<li><li>").html(temporadas).appendTo("div");
          $("<li><li>").html(partidos).appendTo("div");
          $("<li><li>").html(puntos).appendTo("div");
          $("<li><li>").html(anillos).appendTo("div");
          $("<li><li>").html(mvp).appendTo("div");
        });
        i++;
      });

      var sTotalPersons = i;

      $("<p></p>").html('Total Persons: ' + sTotalPersons).prependTo("#results");

    },
    error: function () {
      $("<p></p>").html('An error occurred while processing XML file.').prependTo("#results");
    }
  });
}