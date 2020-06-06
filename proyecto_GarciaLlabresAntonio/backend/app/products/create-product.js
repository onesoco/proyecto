$(document).ready(function () {

    // show html form when 'create product' button was clicked
    $(document).on('click', '.create-product-button', function () {
        // categories api call will be here
        var create_product_html = `

        <div class="container">
            <div class="row">
            <div class="col-sm">
            <div id='msg'></div>
        </div>
                <div class="col-sm">
                    <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
                        <span class='glyphicon glyphicon-list'></span> Read Products
                    </div>
                </div>
            </div>
        </div>

<br>

<form id='create-product-form' action='#' method='post' border='0'>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="name" required>
    </div>

    <div class="form-group">
        <label for="title">Title</label>
        <input type="text" name="title" class="form-control" id="exampleFormControlInput1" placeholder="title" required>
    </div>

    <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <div class="form-group">
    <label for="active">active</label>
    <input type="text" name="active" class="form-control" id="exampleFormControlInput1" placeholder="active" required>
</div>

<div class="form-group">
<label for="destacado">destacado</label>
<input type="text" name="destacado" class="form-control" id="exampleFormControlInput1" placeholder="destacado" required>
</div>

    <!-- button to submit form -->
    <button type='submit' class='btn btn-primary'>
        <span class='glyphicon glyphicon-plus'></span> Create Product
    </button>
</form>
        `;

        // inject html to 'page-content' of our app
        $("#page-content").html(create_product_html);

        // chage page title
        changePageTitle("Añadir producto");

    });

    // will run if create product form was submitted
    $(document).on('submit', '#create-product-form', function () {
        // get form data
        var form_data = JSON.stringify($(this).serializeObject());
        // submit form data to api
        $.ajax({
            url: "http://localhost/proyecto_GarciaLlabresAntonio/backend/api/product/create.php",
            type: "POST",
            contentType: 'application/json',
            data: form_data,
            success: function (result) {

                //La imagen se ha añadido.

                //El .zip se ha añadido
                console.log(form_data);
                showProductsFirstPage();
            },
            error: function (xhr, resp, text) {

                // show error to console
                console.log(xhr, resp, text);

                // Mensaje de que no se ha podido añadir el producto.
                $("#msg").html(`<div class="alert alert-danger" role="alert">
                No se ha podido añadir el nuevo producto.
              </div>`);

            }
        });

        return false;
    });
});


