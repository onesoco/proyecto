$(document).ready(function () {

    // handle 'read one' button click
    $(document).on('click', '.read-one-product-button', function () {

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

        // get product id
        var id = $(this).attr('data-id');

        // read product record based on given ID
        $.getJSON("http://localhost/proyecto_GarciaLlabresAntonio/backend/api/product/read_one.php?id=" + id, function (data) {

            var result = doesFileExist(`http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/products/` + data.name + `.png`);

            if (result == true) {
                var url = `http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/products/` + data.name + `.png`;
            } else {
                var url = `http://localhost/proyecto_GarciaLlabresAntonio/backend/app/assets/img/products/default.png`;
            }
            // read products button will be here
            // start html
            var read_one_product_html = `
 
<!-- when clicked, it will show the product's list -->
<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
    <span class='glyphicon glyphicon-list'></span> Productos
</div>
<!-- product data will be shown in this table -->
<table class='table table-bordered table-hover'>

    <!-- product name -->
    <tr>
        <td class='w-30-pct'>Name</td>
        <td class='w-70-pct'>` + data.name + `</td>
    </tr>
 
    <!-- product title -->
    <tr>
        <td>Title</td>
        <td>` + data.title + `</td>
    </tr>
 
    <!-- product description -->
    <tr>
        <td>Description</td>
        <td>` + data.description + `</td>
    </tr>

    <!-- product img -->
    <tr>
        <td><img src='` + url + `' width='120'></td>
        <td></td>
    </tr>
  
</table>`;

// inject html to 'page-content' of our app
$("#page-content").html(read_one_product_html);
 
// chage page title
//changePageTitle("Producto #"+data.id);
        });
    });

});