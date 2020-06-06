<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="http://localhost/proyecto_GarciaLlabresAntonio/"><span class="svg-image"><img class="svg" src="http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/icons/overCuack001.svg" width="20"></span> overCuack!</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" <?php echo $page_title == "Inicio" ? "class='active'" : ""; ?>>
        <a class="nav-link" href="http://localhost/proyecto_GarciaLlabresAntonio/">Inicio</a>
      </li>
      <li class="nav-item" <?php echo $page_title == "Productos" ? "class='active'" : ""; ?>>
        <a class="nav-link" href="http://localhost/proyecto_GarciaLlabresAntonio/products/">Productos</a>
      </li>
    </ul>
  </div>
</nav>