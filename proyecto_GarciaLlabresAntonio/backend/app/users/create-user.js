$(document).ready(function () {

    // show html form when 'create user' button was clicked
    $(document).on('click', '.create-user-button', function () {
        // categories api call will be here
        var create_user_html = `
 
    <!-- 'read users' button to show list of users -->
    <div id='read-users' class='btn btn-primary pull-right m-b-15px read-users-button'>
        <span class='glyphicon glyphicon-list'></span> Read users
    </div><!-- 'create user' html form -->
    <form id='create-user-form' action='#' method='post' border='0'>
        <table class='table table-hover table-responsive table-bordered'>
     
            <!-- firstname field -->
            <tr>
                <td>Firstname</td>
                <td><input type='text' name='firstname' class='form-control' required /></td>
            </tr>
     
            <!-- lastname field -->
            <tr>
                <td>Lastname</td>
                <td><input type='text' name='lastname' class='form-control' required /></td>
            </tr>

            <!-- contact_number field -->
            <tr>
                <td>contact_number</td>
                <td><input type='text' name='contact_number' class='form-control' required /></td>
            </tr>

            <!-- email field -->
            <tr>
                <td>Email</td>
                <td><input type='text' name='email' class='form-control' required /></td>
            </tr>

            <!-- password field -->
            <tr>
                <td>Password</td>
                <td><input type='password' name='password' class='form-control' required /></td>
            </tr>
          
            <!-- button to submit form -->
            <tr>
                <td></td>
                <td>
                    <button type='submit' class='btn btn-primary'>
                        <span class='glyphicon glyphicon-plus'></span> Create user
                    </button>
                </td>
            </tr>
     
        </table>
    </form>`;

        // inject html to 'page-content' of our app
        $("#page-content").html(create_user_html);

        // chage page title
        changePageTitle("Create User");

    });

    // 'create user form' handle will be here
    // will run if create user form was submitted
    $(document).on('submit', '#create-user-form', function () {
        // form data will be here
        // get form data
        var form_data = JSON.stringify($(this).serializeObject());
        // submit form data to api
        $.ajax({
            url: "http://localhost/proyecto_GarciaLlabresAntonio/backend/api/user/create.php",
            type: "POST",
            contentType: 'application/json',
            data: form_data,
            success: function (result) {
                // user was created, go back to products list
                showUsers();
            },
            error: function (xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });

        return false;
    });
});