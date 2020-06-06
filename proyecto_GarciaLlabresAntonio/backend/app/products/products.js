// product list html
function readProductsTemplate(data, keywords) {

    var read_products_html = `
        <!-- when clicked, it will load the create product form -->
        <div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>
            <span class='glyphicon glyphicon-plus'></span> Crear producto
        </div>
 
        <!-- start table -->
        <table class='table table-bordered table-hover'>
 
            <!-- creating our table heading -->
            <tr>
                <th class='w-10-pct'>Name</th>
                <th class='w-10-pct'>Title</th>
                <th class='w-5-pct text-center'><span class='glyphicon glyphicon-eye-open'></span></th>
                <th class='w-5-pct text-center'><span class='glyphicon glyphicon-star'></span>
                <th class='w-25-pct text-align-center'>Action</th>
            </tr>`;


    // loop through returned list of data
    $.each(data.records, function (key, val) {

        // creating new table row per record
        read_products_html += `<tr>
            <td>` + val.name + `</td>
            <td>` + val.title + `</td>
            <td class='text-center'>` + val.active + `</td>
            <td class='text-center'>` + val.destacado + `</td>
 
            <!-- 'action' buttons -->
            <td>
                <!-- read product button -->
                <button class='btn btn-primary m-r-10px read-one-product-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-eye-open'></span>
                </button>
 
                <!-- edit button -->
                <button class='btn btn-info m-r-10px update-product-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-edit'></span>
                </button>
 
                <!-- delete button -->
                <button class='btn btn-danger delete-product-button' data-id-del='` + val.id + `'>
                    <span class='glyphicon glyphicon-remove'></span>
                </button>
            </td>
        </tr>`;
    });

    // end table
    read_products_html += `</table>`;

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