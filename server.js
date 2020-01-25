const mongoose = require("mongoose");
const Cat = require("./models/Cat.model");

mongoose
  .connect("mongodb://localhost/cats-app-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

//create a cat
Cat.create({
    name: "Fuzzy",
    age: 7,
    color: "orange"
  })
  .then(newlyCreatedCat =>
    console.log(`Cat successfully created! ---> ${newlyCreatedCat}`)
  )
  .catch(err => console.log(`Error while cerating a cat: ${err}`));

//************************other way of creating a cat**********************
// const lisa = new Cat({
//     name: 'Lisa',
//     age: 10
// })/*  */
// lisa.save()
// .then(newCat => console.log(`New cat created: ${newCat}`))
// .catch(error => console.log(`Error: ${error}`));

//read
Cat.find()
  .then(responseFromDB => console.log("[][]][[]", responseFromDB))
  .catch(err => console.log(err));

console.log("+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_")