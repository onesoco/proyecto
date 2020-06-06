$(document).ready(function () {

    // show html form when 'update user' button was clicked
    $(document).on('click', '.update-user-button', function () {
        // user ID will be here
        // get user id
        var id = $(this).attr('data-id');
        // read one record based on given user id
        $.getJSON("http://localhost/proyecto_GarciaLlabresAntonio/backend/api/user/read_one.php?id=" + id, function (data) {

            // values will be used to fill out our form
            var firstname = data.firstname;
            var lastname = data.lastname;
            var email = data.email;
            var contact_number = data.contact_number;

            var update_user_html = `
            <div id='read-users' class='btn btn-primary pull-right m-b-15px read-users-button'>
                <span class='glyphicon glyphicon-list'></span> Read Users
            </div>
            <!-- build 'update user' html form -->
            <!-- we used the 'required' html5 property to prevent empty fields -->
            <form id='update-user-form' action='#' method='post' border='0'>
                <table class='table table-hover table-responsive table-bordered'>
             
                    <!-- firstname field -->
                    <tr>
                        <td>Firstname</td>
                        <td><input value=\"` + firstname + `\" type='text' name='firstname' class='form-control' required /></td>
                    </tr>
             
                    <!-- lastname field -->
                    <tr>
                        <td>Lastname</td>
                        <td><input value=\"` + lastname + `\" type='text' name='lastname' class='form-control' required /></td>
                    </tr>
             
                    <!-- email field -->
                    <tr>
                        <td>Email</td>
                        <td><input value=\"` + email + `\" type='text' name='email' class='form-control' required /></td>
                    </tr>

                    <!-- contact_number field -->
                    <tr>
                        <td>contact_number</td>
                        <td><input value=\"` + contact_number + `\" type='text' name='contact_number' class='form-control' required /></td>
                    </tr>
             
                    <tr>
             
                        <!-- hidden 'user id' to identify which record to delete -->
                        <td><input value=\"` + id + `\" name='id' type='hidden' /></td>
             
                        <!-- button to submit form -->
                        <td>
                            <button type='submit' class='btn btn-info'>
                                <span class='glyphicon glyphicon-edit'></span> Update User
                            </button>
                        </td>
             
                    </tr>
             
                </table>
            </form>`;

            // inject to 'page-content' of our app
            $("#page-content").html(update_user_html);

            // chage page title
            changePageTitle("Update User");
        });
    });

    // 'update user form' submit handle will be here
    // will run if 'create user' form was submitted
    $(document).on('submit', '#update-user-form', function () {

        // get form data will be here 
        // get form data
        var form_data = JSON.stringify($(this).serializeObject());

        // submit form data to api
        $.ajax({
            url: "http://localhost/proyecto_GarciaLlabresAntonio/backend/api/user/update.php",
            type: "POST",
            contentType: 'application/json',
            data: form_data,
            success: function (result) {
                // user was created, go back to users list
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