function infoCar(manu, model) {
  return (car = {
    name: "Car",
    price: "1244.00",
    rating: "2.00",
    rating_text: "0.00",
    mafacturer: manu,
    modelName: model,
  });
}

const cars = infoCar("Toyota", "Xli");
console.log(cars);
