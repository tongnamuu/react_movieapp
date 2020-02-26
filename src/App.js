import React from "react";

class App extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
  }
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
    this.setState(current => ({
      count: current.count + 1
    }));
  };
  minus = () => {
    console.log("minus");
    this.setState(abc => ({
      count: abc.count - 1
    }));
  };
  componentDidMount() {
    console.log("ComponentDidMount after render");
  }
  componentDidUpdate() {
    console.log("component just updated");
  }
  componentWillUnmount() {
    console.log("Destroying Component");
  }
  render() {
    console.log("rendering");
    return (
      <div>
        <h1>This is Class Component Counter : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

// const FoodList = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Chicken",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2019/06/Coke_Chicken_18-.jpg",
//     rating: 3
//   },
//   {
//     id: 3,
//     name: "Hot Noodle",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2019/05/Soy-Bean-Sprout-Chewy-Noodles_01-.jpg",
//     rating: 5
//   },
//   {
//     id: 4,
//     name: "BibimBob",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 4
//   }
// ];

// function Food({ name, pic, rating }) {
//   return (
//     <div>
//       <h2>I like {name}!!!</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={pic} alt={name}></img>
//     </div>
//   );
// }
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   pic: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function renderFood(dish) {
//   //console.log(dish);
//   return (
//     <Food
//       key={dish.id}
//       name={dish.name}
//       pic={dish.image}
//       rating={dish.rating}
//     />
//   );
// }

export default App;
