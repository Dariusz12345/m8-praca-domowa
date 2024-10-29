// {
//     "name": "Mango", //"name" jest kluczem, a jego wartość "Mango" jest typu string
//     "age": 3, // "age" jest kluczem, a jego wartość 3 jest typu number
//     "isHappy": true // "isHappy" jest kluczem, a jego wartość true jest typu boolean
//   }

const json = '{"name":"Mango","age":3,"isHappy":true}';
const obj = JSON.parse(json);
console.log(obj);




const invalidJson = '{"name":"Mango","age":3,"isHappy":true,'; // Nieprawidłowy JSON

try {
  const obj = JSON.parse(invalidJson);
  console.log(obj);
} catch (error) {
  console.error("Błąd parsowania JSON:");
  console.error("Rodzaj błędu:", error.name); 
  console.error("Wiadomość błędu:", error.message);
}
