//Funcion para comprobar que un archivo existe o no, esto es para las imagenes y los .zip de los productos.
function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();

    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}

// product list html
function readProductsTemplate(data, keywords) {

    var read_products_html = ` 
        <div class='row'>`;


    // loop through returned list of data
    $.each(data.records, function (key, val) {

        var result = doesFileExist(`http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/products/` + val.name + `.png`);

        if (result == true) {
            var url = `http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/products/` + val.name + `.png`;
        } else {
            var url = `http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/products/default.png`;
        }


        // creating new table row per record
        read_products_html += `
        
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="`+ url + `" alt="" width='100px'>
              <div class="card-body">
                <h4 class="card-title">
                  `+ val.title + `
                </h4>
                <p class="card-text">`+ val.description.substr(0,50) + `...</p>
              </div>
              <div class="card-footer">
              <!-- read product button -->
              <button class='btn btn-primary m-r-10px read-one-product-button' data-id='` + val.id + `'>
                  <span class='glyphicon glyphicon-eye-open'></span> Ver producto
              </button>
              </div>
            </div>
          </div>`;

    });

    // end div row
    read_products_html += `</div>`;

    // pagination
    if (data.paging) {
        read_products_html += "<ul class='pagination justify-content-center'>";

        // first page
        if (data.paging.first != "") {
            read_products_html += "<li><a data-page='" + data.paging.first + "'>««</a></li>";
        }

        // loop through pages
        $.each(data.paging.pages, function (key, val) {
            var active_page = val.current_page == "yes" ? "class='active'" : "";
            read_products_html += "<li " + active_page + "><a data-page='" + val.url + "'>" + val.page + "</a></li>";
        });

        // last page
        if (data.paging.last != "") {
            read_products_html += "<li><a data-page='" + data.paging.last + "'>»»</a></li>";
        }
        read_products_html += "</ul>";
    }

    // inject to 'page-content' of our app
    $("#page-content").html(read_products_html);
}