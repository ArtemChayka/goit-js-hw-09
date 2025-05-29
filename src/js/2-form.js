const form = document.querySelector('.feedback-form')
const inpEmail = document.querySelector('[name="email"]')
const textarea = document.querySelector('[name="message"]')

const formData = {
    email: "",
    message: "",
}
form.addEventListener('input', (event) => {
    event.preventDefault()
    formData.email = inpEmail.value.trim()
    formData.message = textarea.value.trim()
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
})

if (localStorage.getItem("feedback-form-state")) {
    inpEmail.value = (JSON.parse(localStorage.getItem("feedback-form-state"))).email
    textarea.value = (JSON.parse(localStorage.getItem("feedback-form-state"))).message
}

formData.email = inpEmail.value
formData.message = textarea.value


form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (inpEmail.value === "" || textarea.value === "") {
        console.log('Fill please all fields')
        return
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state")
    form.reset()
})
// console.log(formData);
