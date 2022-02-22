// selects the submit button for the
(function() {
    'use strict'

    let submitBtn = document.querySelector('#button-1644997402759')

    submitBtn.addEventListener('click', function(event) {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function(form) {
                if (!form.checkValidity()) {
                    // TODO: show something else instead
                    alert('Please fill out all required questions.')

                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    alert('Thank you for completing the form. Your response has been recorded.')
                }
            }, false)
    })
})()