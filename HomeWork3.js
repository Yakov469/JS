// Функція для виведення інформації про користувача
// Визначаємо об'єкт
const user = {
    "id": "0009",
    "name": "Yakiv Myronchuk",
    "address": {
        "street": "Topoleva St",
        "city": "Rokytne"
    },
    "hobbies": [
        "Bike",
        "Fishing"
    ]
}

// Виводимо всю інформацію об'єкта
console.log(user);


// Виводимо останнє хобі
console.log(user.hobbies[1]);

// Виводимо адресу в форматованому вигляді
console.log(`Address: ${user.address.street}, ${user.address.city}`);
