import React from "react";

function Food(props) {
  return (
    <div>
      <h2>I like {props.name}!!!</h2>
      <img src={props.pic}></img>
    </div>
  );
}
let FoodList = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Chicken",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2019/06/Coke_Chicken_18-.jpg"
  },
  {
    name: "Hot Noodle",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2019/05/Soy-Bean-Sprout-Chewy-Noodles_01-.jpg"
  },
  {
    name: "BibimBob",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  }
];
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      {FoodList.map(dish => (
        <Food name={dish.name} pic={dish.image} />
      ))}
    </div>
  );
}

export default App;
