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
                    // alert('Thank you for completing the survey. To read and sign our petition advocating for the continuation of virtual interviews, please visit the "Sign our Petition" tab. Note that if you choose to sign the petition, you will have the option to include your mitigated emissions after your name. If you would like to include that value, please note the calculated number before leaving this page.')

                    // year
                    let yearSpecifier = "";
                    if ($("#select-1644994922881-0:checked").length > 0) { // 2021-2022
                        yearSpecifier = `2021-2022 `
                    } else if ($("#select-1644994922881-1:checked").length > 0) { // 2020-2021
                        yearSpecifier = `2020-2021 `
                    }

                    // type of applicant
                    let applicantType = "";
                    if ($("#select-1644994963652-0:checked").length > 0) { // 2021-2022
                        applicantType = `medical school `
                    } else if ($("#select-1644994963652-1:checked").length > 0) { // 2020-2021
                        applicantType = `residency `
                    } else if ($("#select-1644994963652-2:checked").length > 0) { // 2020-2021
                        applicantType = `fellowship `
                    }

                    let additionalInfo = "";
                    if (yearSpecifier !== "" || applicantType !== "") {
                        additionalInfo = ` during the ${yearSpecifier}${applicantType}application cycle`
                    }

                    $("#modalEmissions").html(map.emissionsInMetricTons() + ` metric tons of CO&#8322; saved${additionalInfo}`)
                    $('#postResponseModal').modal('show');
                }
            }, false)
    })
})()