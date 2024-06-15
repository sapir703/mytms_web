$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: "Please supply customer's first name"
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: "Please supply customer's last name"
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: "Please supply customer's email address"
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: "Please supply customer's phone number"
                    },
                    phone: {
                        country: 'IL',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: "Please supply customer's street address"
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: "Please supply customer's city"
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: "Please supply customer's zip code"
                    },
                    zipCode: {
                        country: 'IL',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            floor: {
                validators: {
                    notEmpty: {
                        message: "Please supply customer's floor"
                    }
                  }
                },
            elevator: {
                validators: {
                    notEmpty: {
                        message: "Please select whether there is an elevator or not"
                    }
                  }
                }
            }
        
    })
        .on('success.form.bv', function(e) {
            
            // Prevent form submission
            e.preventDefault();
            
           // document.getElementById("success_message").style.display=" ";
           
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

function formSubmit(){
     //setTimeout(() => {}, 2000000000);
     document.getElementById("success_message").style.display=" ";
     $('#success_message').slideDown({ opacity: "show" }, "slow")
       
}

