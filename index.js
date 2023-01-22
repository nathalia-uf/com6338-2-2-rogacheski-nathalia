function greet(){
    var Name = prompt('What is your name?')
    if (Name) {
        alert('Hello, ' + Name)
    } else {
        alert('Hello')
    }
    var age = prompt('How old are you?')
    var userAge = parseInt(age)
    if (!userAge) Number
    var birthday = confirm('Have you had your birthday this year?')
    if (birthday) {
        alert(new Date().getFullYear() - userAge)
    } else {
        alert(new Date().getFullYear() - userAge - 1)
    }
}

greet ()