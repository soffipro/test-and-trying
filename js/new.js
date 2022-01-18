// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

// Найдите средний символ слова.
// Пользователь собирается ввести слово. Ваша задача - найти средний символ этого слова.
// Если длина слова нечетная - верните средний символ, если длина слова четная - верните 2 средних символа.
// Вы должны проверить пустые значения и значения, содержащие только пробелы, в этом случае покажите сообщение: "Неверное значение".
// Для ввода данных пользователем используйте функцию "prompt". Для отображения результата используйте функцию "alert".

// Примеры:
// Для ввода пользователем "test" должно возвращаться "es"
// Для ввода пользователем "character" должно вернуться "a"
// Для ввода пользователем "B" должно быть возвращено "B"
// Для ввода пользователем "" должно возвращаться "Недопустимое значение"
// Для ввода пользователем " " должно вернуться "Неверное значение"

const word = prompt('input word');
// const wordLength = word.length;

if (word === null || word.trim() === '') {
  alert("Invalid value");
} else {                        
  const wordLength = word.length;
  if (wordLength % 2 === 0) {
    const firstIndex = wordLength / 2 - 1;    //test 1
    const lastIntex = wordLength / 2 + 1;     //0123 3
    
    alert(word.slice(firstIndex, lastIntex));
  } else {
    const firstIndex = ((wordLength + 1) / 2) - 1;
    const lastIntex = (wordLength + 1) / 2;
    alert(word.slice(firstIndex, lastIntex));
  }
}



