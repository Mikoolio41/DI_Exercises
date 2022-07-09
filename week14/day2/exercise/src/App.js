import "./App.css";
import Exercise4 from "./Components/Exercise4";
// import UserFavoriteColors from "./Components/UserFavoriteColors";

// const myelement = <h1>I Love JSX!</h1>;
// const sum = 5 + 5;

// const user = {
//   first_name: "Bob",
//   last_name: "Dylan",
//   fav_animals: ["Horse", "Turtle", "Elephant", "Monkey"],
// };

function App() {
  return (
    <div>
      {/* <h1>I do not use jsx</h1>
      <h2>Hello world</h2>
      <h3>{myelement}</h3>
      <h4>React is {sum} times better with JSX</h4>

      <h3>{user.first_name}</h3>
      <h3>{user.last_name}</h3>
      <UserFavoriteColors animals={user.fav_animals} /> */}
      <Exercise4 />
    </div>
  );
}

export default App;
