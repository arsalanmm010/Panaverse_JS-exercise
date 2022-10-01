list = ["Tesla", "Elon Musk", "Tarantino"];

for (var i = 0; i < list.length; i++) {
  console.log(`I would like to invite you to dinner ${list[i]}`);
}

console.log(`${list[2]} can't make it`);

list[2] = "Pacino";

for (var i = 0; i < list.length; i++) {
  console.log(`I would like to invite you to dinner ${list[i]}`);
}
