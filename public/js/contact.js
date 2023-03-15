(() => {
    let form         = document.querySelector('#contact-form'),
        submitBtn        = form.querySelector('.btn-large');

    function showLightbox(){
        lightBox.classList.add('show-lb');
    }

    // code from https://www.sitepoint.com/instant-validation/
    //add event construct for modern browsers or IE
    //which fires the callback with a pre-converted target reference
    function addEvent(node, type, callback) {
        if (node.addEventListener) {
        node.addEventListener(
            type,
            function(e) {
            callback(e, e.target);
            },
            false
        );
        } else if (node.attachEvent) {
        node.attachEvent("on" + type, function(e) {
            callback(e, e.srcElement);
        });
        }
    }

    function addErrorMsg(field){
        let fieldSib = field.nextSibling,
            inputErrorCon = field.parentNode,
            errorMsg = field.dataset.errorMsg,
            errorMsgText = document.createTextNode(errorMsg); // create text for p tag

        var errorExists = inputErrorCon.querySelector('.input-error');

        if (errorExists){
            return;
        }else{
            var errorMsgElement = document.createElement('p'); //create error message p tag
                errorMsgElement.appendChild(errorMsgText); // add the text node to the newly created p tag
                errorMsgElement.classList.add('input-error');// add styling class

            if (fieldSib){
                // if the input field has another element following it, insert before that following element
                inputErrorCon.insertBefore(errorMsgElement, fieldSib);
            } else{
                // otherwise, append to the end of the div
                inputErrorCon.appendChild(errorMsgElement);
            }
        }
    }
    
    //identify whether a field should be validated
    //ie. true if the field is neither readonly nor disabled,
    //and has either "pattern", "required" or "aria-invalid"
    function shouldBeValidated(field) {
        return (
        !(field.getAttribute("readonly") || field.readonly) &&
        !(field.getAttribute("disabled") || field.disabled) &&
        (field.getAttribute("pattern") || field.getAttribute("required"))
        );
    }
    
    //field testing and validation function
    function instantValidation(field) {
        //if the field should be validated
        if (shouldBeValidated(field)) {
        //the field is invalid if:
        //it's required but the value is empty
        //it has a pattern but the (non-empty) value doesn't pass
        var fieldValue = field.value.trim(), //prevents user from submitting only whitespace
            invalid =
            (field.getAttribute("required") && !fieldValue) ||
            (field.getAttribute("pattern") && fieldValue && !new RegExp(field.getAttribute("pattern")).test(fieldValue)),        
            inputErrorCon = field.parentNode,
            errorMsg = inputErrorCon.querySelector('.input-error');

        //add or remove the attribute is indicated by
        //the invalid flag and the current attribute state
        if (!invalid && field.getAttribute("aria-invalid")) {
            field.removeAttribute("aria-invalid");
            errorMsg.remove();
        } else if (invalid && !field.getAttribute("aria-invalid")) {
            field.setAttribute("aria-invalid", "true");
            addErrorMsg(field);
            return false;
        }
        }
    }
    
    //now bind a change event to each applicable for field
    //works even in Internet Explorer <= 8//

    var inputFields = document.getElementsByTagName("input"),
    textareaFields = document.getElementsByTagName("textarea"),
    allFields = [...inputFields, ...textareaFields];
    
    for (var a = allFields.length, i = 0; i < a; i++) {
        if ((allFields[i].type == 'text') || allFields[i].name == 'message'){
            addEvent(allFields[i], "keyup", function(e, target) {
                instantValidation(target);
            });
        }else{
            addEvent(allFields[i], "change", function(e, target) {
                instantValidation(target);
            });
        }
    }

    // for (var a = inputFields.length, i = 0; i < a; i++) {
    //     addEvent(inputFields[i], "change", function(e, target) {
    //         console.log('fires on change');
    //         instantValidation(target);
    //     });
    // }

    // for (var a = textareaFields.length, i = 0; i < a; i++) {
    //     addEvent(textareaFields[i], "keyup", function(e, target) {
    //         instantValidation(target);
    //     });
    // }

    function onVisibleForm(element, callback) {
        new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0){
              callback(element);
              observer.disconnect();
            }
          });
        },         
        {
            rootMargin: "0px",
            threshold: 0.3,
        }).observe(element);
      }
  
      onVisibleForm(textareaFields[0], () => {
          var recaptchaScript = document.createElement('script'),
                head = document.getElementsByTagName('head')[0];

          recaptchaScript.src = 'https://www.google.com/recaptcha/api.js?hl=en';
          recaptchaScript.defer = true;
          head.appendChild(recaptchaScript);
      });

    submitBtn.addEventListener('click', showLightbox);
})();