$(document).ready(function () {

    // handle 'read one' button click
    $(document).on('click', '.read-one-user-button', function () {
        // get user id
        var id = $(this).attr('data-id');

        // read user record based on given ID
        $.getJSON("http://localhost/proyecto_GarciaLlabresAntonio/backend/api/user/read_one.php?id=" + id, function (data) {
            // read users button will be here
            // start html
            var read_one_user_html = `
 
<!-- when clicked, it will show the user's list -->
<div id='read-users' class='btn btn-primary pull-right m-b-15px read-users-button'>
    <span class='glyphicon glyphicon-list'></span> Read Users
</div>
<!-- user data will be shown in this table -->
<table class='table table-bordered table-hover'>
 
    <!-- user firstname -->
    <tr>
        <td class='w-30-pct'>Firstname</td>
        <td class='w-70-pct'>` + data.firstname + `</td>
    </tr>
 
    <!-- user lastname -->
    <tr>
        <td>Lastname</td>
        <td>` + data.lastname + `</td>
    </tr>
 
    <!-- user email -->
    <tr>
        <td>Email</td>
        <td>` + data.email + `</td>
    </tr>

    <!-- user contact_number -->
    <tr>
        <td>Contact number</td>
        <td>` + data.contact_number + `</td>
    </tr>
 
 
</table>`;

// inject html to 'page-content' of our app
$("#page-content").html(read_one_user_html);
 
// chage page title
changePageTitle("Create User");
        });
    });

});