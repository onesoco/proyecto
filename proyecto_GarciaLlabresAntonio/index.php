<?php $page_title = "Inicio"; ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Inicio</title>
  <!-- bootstrap CSS -->
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <!-- custom CSS -->
  <link href="app/assets/css/style.css" rel="stylesheet" />
</head>

<body>
  <?php include_once 'navigation.php'; ?>
  <div class="jumbotron jumbotron-fluid mx-auto" style="width: 90%;">
    <div class="container">
      <h1 class="display-5">Bienvenid@s!</h1>
      <br>
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <!-- Que es una retransmisión en directo -->
          <p class="lead">La retransmisión en directo (en inglés streaming),
            es la distribución digital de contenido multimedia a través de una red de computadoras, de manera que el
            usuario utiliza el producto a la vez que se descarga.</p>
          <p>En otras palabras, cada canal de streaming, es como un programa de television (muy resumido).</p>
          <p>Hay diferentes páginas para ver estos directos, como pueden ser:</p>
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <a href="https://www.twitch.tv/" target="_blank"><img src="http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/icons/twitch.png" width="90%"></a>
              </div>
              <div class="col-sm">
                <a href="https://www.youtube.com/live?gl=ES&hl=es" target="_blank"><img src="http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/icons/youtube.png" width="90%"></a>
              </div>
              <div class="col-sm">
                <a href="https://es-la.facebook.com/FacebookGaming/" target="_blank"><img src="http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/icons/facebookgaming.png" width="90%"></a>
              </div>
              <div class="col-sm">
                <a href="https://mixer.com/" target="_blank"><img src="http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/icons/mixer.png" width="90%"></a>
              </div>
            </div>
          </div>
          <br>
          <!-- Que ofrecemos es nuestra pagina? -->
          <p><b>Que ofrecemos es nuestra pagina?</b><br>Basicamente ofrecemos "overlay".</p>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="mx-auto" style="width: 100%;">
            <img src="http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/1.png" width="90%">
          </div>
          <br>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="mx-auto" style="width: 100%;">
            <img src="http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/2.png" width="90%">
          </div>
          <br>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <!-- Y que es un overlay? -->
          <p><b>Y que es un overlay?</b><br>Los overlays son capas superpuestas conseguidas en nuestra fase de edición con un programa de edición de imagenes.
            Nos permiten agregar detalles como:
            reflejos, luces, lluvia, nieve o burbujas, e incluso desperfectos en la pared o rotos en los cristales.</p>
          <!-- Y esto para que sirve? -->
          <p><b>Y esto para que sirve?</b><br>Si entras en muchos de los directos de cualquier plataforma, te daras cuenta
            enseguida de que por ejemplo, en la camara el "streamer" tiene un marco con algún logotipo o que tienen algun tipo de animación,
            cuando alguien le da ha seguir.<br>Esto es lo que ofrecemos aquí.</p>
        </div>
      </div>
    </div>
  </div>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <!-- jQuery library -->
  <script src="app/assets/js/jquery.js"></script>
  <!-- bootstrap JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <!-- app js script -->
  <script src="app/app.js"></script>

  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>

</html>