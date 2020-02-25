import React from "react";

function Food(props) {
  return (
    <div>
      <h2>I like {props.name}!!!</h2>
      <img src={props.pic} alt={props.name}></img>
    </div>
  );
}
let FoodList = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Chicken",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2019/06/Coke_Chicken_18-.jpg"
  },
  {
    id: 3,
    name: "Hot Noodle",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2019/05/Soy-Bean-Sprout-Chewy-Noodles_01-.jpg"
  },
  {
    id: 4,
    name: "BibimBob",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  }
];
function renderFood(dish) {
  //console.log(dish);
  return <Food key={dish.id} name={dish.name} pic={dish.image} />;
}
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      {FoodList.map(renderFood)}
    </div>
  );
}

export default App;
