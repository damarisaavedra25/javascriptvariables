//create an object person with several attributes

const person = {
    firstName: "John",
    lastName: "Doe",
    say() {
        console.log(`last name ${this.lastName}`); //you can also access properties that are functions
    }
}

person.say();