$(document).ready(function () {

    // show html form when 'update product' button was clicked
    $(document).on('click', '.update-product-button', function () {
        // product ID will be here
        // get product id
        var id = $(this).attr('data-id');
        // read one record based on given product id
        $.getJSON("http://localhost/proyecto_GarciaLlabresAntonio/backend/api/product/read_one.php?id=" + id, function (data) {

            // values will be used to fill out our form
            var name = data.name;
            var title = data.title;
            var description = data.description;
            var active = data.active;
            var destacado = data.destacado;

            var update_product_html = `
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
            <!-- build 'update product' html form -->
            <!-- we used the 'required' html5 property to prevent empty fields -->
            <form id='update-product-form' action='#' method='post' border='0'>
                <table class='table table-hover table-responsive table-bordered'>
             
                    <!-- name field -->
                    <tr>
                        <td>Name</td>
                        <td><input value=\"` + name + `\" type='text' name='name' class='form-control' required /></td>
                    </tr>
             
                    <!-- price field -->
                    <tr>
                        <td>Title</td>
                        <td><input value=\"` + title + `\" type='text' name='title' class='form-control' required /></td>
                    </tr>
             
                    <!-- description field -->
                    <tr>
                        <td>Description</td>
                        <td><textarea name='description' class='form-control'>` + description + `</textarea></td>
                    </tr>
                    <!-- description field -->
                    <tr>
                        <td>Description</td>
                        <td><input value=\"` + active + `\" type='checkbox' name='active' class='form-control' /></td>
                    </tr>
                    <!-- description field -->
                    <tr>
                        <td>Description</td>
                        <td><input value=\"` + destacado + `\" type='checkbox' name='destacado' class='form-control'/></td>
                    </tr>
             
                    <tr>
             
                        <!-- hidden 'product id' to identify which record to delete -->
                        <td><input value=\"` + id + `\" name='id' type='hidden' /></td>
             
                        <!-- button to submit form -->
                        <td>
                            <button type='submit' class='btn btn-info'>
                                <span class='glyphicon glyphicon-edit'></span> Update Product
                            </button>
                        </td>
             
                    </tr>
             
                </table>
            </form>`;

            // inject to 'page-content' of our app
            $("#page-content").html(update_product_html);

            // chage page title
            changePageTitle("Update Product");
        });
    });

    // 'update product form' submit handle will be here
    // will run if 'create product' form was submitted
    $(document).on('submit', '#update-product-form', function () {

        // get form data will be here 
        // get form data
        var form_data = JSON.stringify($(this).serializeObject());

        // submit form data to api
        $.ajax({
            url: "http://localhost/proyecto_GarciaLlabresAntonio/backend/api/product/update.php",
            type: "POST",
            contentType: 'application/json',
            data: form_data,
            success: function (result) {
                
                //La imagen se ha añadido.
                
                //El .zip se ha añadido

                showProductsFirstPage();
            },
            error: function (xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);

                // msg de que no se ha podido añadir el producto.
                $("#msg").html(`<div class="alert alert-danger" role="alert">
                No se ha podido actualizar el producto.
              </div>`);
              showProducts();
            }
        });

        return false;
    });
});