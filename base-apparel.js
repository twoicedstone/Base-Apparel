const form = document.querySelector("form")
const errorMessage = document.querySelector(".error-message")
const submit = document.getElementById("arrow")
const errorIcon = document.getElementById("error")
const input = document.querySelector("input")
    

form.addEventListener("submit", validate)
submit.addEventListener("click", validate)

    
function validate(e) {
      e.preventDefault()

      const inputValue = input.value

      if(!isEmail(inputValue)) {
        errorMessage.style.display = "block"
        errorIcon.style.display = "inline-block"
        input.style.borderColor = "red"
		input.style.borderWidth = "2px"
      }

      else {
        errorMessage.style.display = "none"
        errorIcon.style.display = "none"
      }
    }

    function isEmail(input) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
    }