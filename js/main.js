var elForm = document.querySelector(".header__form")

var elInput = document.querySelector(".header__input")

var elSelect = document.querySelector(".header__select")

var elSpan = document.querySelector(".header__span")

elForm.addEventListener("submit", function(event){
    event.preventDefault()

    var elInputVAl = elInput.value;
    var elSelectVAl = elSelect.value;
    var conventCourse = elInputVAl * elSelectVAl

elSpan.textContent = (`${conventCourse}`)

})
