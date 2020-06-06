// user list html
function readUsersTemplate(data, keywords) {

    var read_users_html = `
        <!-- search users form -->
        <!--<form id='search-user-form' action='#' method='post'>
        <div class='input-group pull-left w-30-pct'>
 
            <input type='text' value='` + keywords + `' name='keywords' class='form-control user-search-keywords' placeholder='Search users...' />
 
            <span class='input-group-btn'>
                <button type='submit' class='btn btn-default' type='button'>
                    <span class='glyphicon glyphicon-search'></span>
                </button>
            </span>
 
        </div>
        </form>-->
 
        <!-- when clicked, it will load the create user form -->
        <div id='create-user' class='btn btn-primary pull-right m-b-15px create-user-button'>
            <span class='glyphicon glyphicon-plus'></span> Create user
        </div>
 
        <!-- start table -->
        <table class='table table-bordered table-hover'>
 
            <!-- creating our table heading -->
            <tr>
                <th class='w-10-pct'>ID</th>
                <th class='w-10-pct'>Firstname</th>
                <th class='w-10-pct'>Lastname</th>
                <th class='w-5-pct text-center'>@</th>
                <th class='w-25-pct text-align-center'>Action</th>
            </tr>`;


    // loop through returned list of data
    $.each(data.records, function (key, val) {

        // creating new table row per record
        read_users_html += `<tr>
 
        <td>` + val.id + `</td>
            <td>` + val.firstname + `</td>
            <td>` + val.lastname + `</td>
            <td class='text-center'>` + val.email + `</td>
 
            <!-- 'action' buttons -->
            <td>
                <!-- read user button -->
                <button class='btn btn-primary m-r-10px read-one-user-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-eye-open'></span>
                </button>
 
                <!-- edit button -->
                <button class='btn btn-info m-r-10px update-user-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-edit'></span>
                </button>
 
                <!-- delete button -->
                <button class='btn btn-danger delete-user-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-remove'></span>
                </button>
            </td>
        </tr>`;
    });

    // end table
    read_users_html += `</table>`;

    // pagination
if(data.paging){
    read_users_html+="<ul class='pagination justify-content-center'>";
 
        // first page
        if(data.paging.first!=""){
            read_users_html+="<li><a data-page='" + data.paging.first + "'>««</a></li>";
        }
 
        // loop through pages
        $.each(data.paging.pages, function(key, val){
            var active_page=val.current_page=="yes" ? "class='active'" : "";
            read_users_html+="<li " + active_page + "><a data-page='" + val.url + "'>" + val.page + "</a></li>";
        });
 
        // last page
        if(data.paging.last!=""){
            read_users_html+="<li><a data-page='" + data.paging.last + "'>»»</a></li>";
        }
    read_users_html+="</ul>";
}

    // inject to 'page-content' of our app
    $("#page-content").html(read_users_html);
}