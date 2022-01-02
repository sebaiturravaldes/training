const users = [
  "Consu", //Posición 0
  "Tefa", //Posición 1
  "Seba", //Posición 2
];

for (let index = 0; index <= 3; index++) {
  console.log(
    `El usuario correspondiente al índice ${index}, es ${users[index]}`
  );
}

let index = 0;

while (index < users.length) {
  console.log(
    `El usuario correspondiente al índice ${index}, es ${users[index]}`
  );
  index++;
}

index = 0;

do {
  console.log("Soy el usuario", users[index]);
  index++;
} while (index < users.length);
