$(document).ready(function () {
    const ERROR = 'Error';

//1

    $('#userAgeGet').bind('blur', function () {
        let age = $('#userAgeGet').val();
        if (isNaN(age) || age > 100 || age < 1) {
            $('#userAgeGet')
                .css('backgroundColor', 'red')
                .val(ERROR);
        }
    })


//2 - GET

$('#saveGet').bind('click', function () {
    let age = $('#userAgeGet').val();
    if(age !== ERROR) {
        let formData = {
            formFirstname: validationByGet($('#userFirstnameGet').val()),
            formSurname: validationByGet($('#userSurnameGet').val()),
            formAge: validationByGet($('#userAgeGet').val()),
            formResidence: validationByGet($('#userResidenceGet').val())
        };
        let urlToGet = 'http://localhost:3005/' +
            'userGet?userFirstname=' + formData.formFirstname +
            '&userSurname=' + formData.formSurname +
            '&userAge=' + formData.formAge +
            '&userResidence=' + formData.formResidence;

        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: urlToGet,
            success: function (data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        })
    } else {
        alert('Bad GET request');
    }
});


function validationByGet(value) {
    return value + 'ValidatedByGET';
}

//3 - Post

    $('#userAgePost').bind('blur', function () {
        let age = $('#userAgePost').val();
        if (isNaN(age) || age > 100 || age < 1) {
            $('#userAgePost')
                .css('backgroundColor', 'red')
                .val(ERROR);
        }
    })

    $('#savePost').bind('click', function () {
        let age = $('#userAgePost').val();
        if(age !== ERROR) {
            let formData = {
                formFirstname: validationByPost($('#userFirstnamePost').val()),
                formSurname: validationByPost($('#userSurnamePost').val()),
                formAge: validationByPost($('#userAgePost').val()),
                formResidence: validationByPost($('#userResidencePost').val())
            };

            $.ajax({
                type: 'POST',
                data: JSON.stringify(formData),
                contentType: 'application/json',
                url: 'http://localhost:3005/userPost',
                success: function (data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            })

        } else {
            alert('Bad POST request');
        }
    });

    function validationByPost(value) {
        return value + 'ValidatedByPOST';
    }
});


