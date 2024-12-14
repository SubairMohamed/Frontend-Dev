// wn dhameenaya incha allah

// const JSX = <h1>Hello JSX!</h1>;

// const JSX = <div>
//   {/* begin website */}
//   <h1>hello react</h1>
//   <p>this is react</p>
//   <ul>
//     <li>tea</li>
//     <li>coffee</li>
//     <li>well</li>
//   </ul>
// </div>;

// const JSX = (
//     <div id="challenge-node">
//       <h1>Add a class to this div</h1>
//     </div>
//   );
// ReactDOM.render(JSX, document.getElementById('challenge-node'));

// const JSX = (
//     <div className="myDiv">
//       <h1>Add a class to this div</h1>
//     </div>
//   );
  
// const JSX = (
//     <div>
//       <h2>Welcome to React!</h2> <br />
//       <p>Be sure to close all tags!</p>
//       <hr />
//     </div>
//   );

// const MyComponent = function() {
//      return (
//        <div className="customComponent">hello</div>
//      );
//   }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // Change code below this line

//      return (
//        <div>
//        <h1>Hello React!</h1>
//        </div>
//      )

//     // Change code above this line
//   }
// };

// component composition
// const ChildComponent = () => {
//   return (
//     <div>
//       <p>I am the child</p>
//     </div>
//   );
// };

// class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>I am the parent</h1>
//         { /* Change code below this line */ }
//         <ChildComponent />

//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// there are many different ways you can compose components with React
// const TypesOfFruit = () => {
//   return (
//     <div>
//       <h2>Fruits:</h2>
//       <ul>
//         <li>Apples</li>
//         <li>Blueberries</li>
//         <li>Strawberries</li>
//         <li>Bananas</li>
//       </ul>
//     </div>
//   );
// };

// const Fruits = () => {
//   return (
//     <div>
//       { /* Change code below this line */ }
//      <TypesOfFruit />
//       { /* Change code above this line */ }
//     </div>
//   );
// };

// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         { /* Change code below this line */ }  
//         <Fruits />

//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

//Compose React Components
//  class Fruits extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h2>Fruits:</h2>
//         { /* Change code below this line */ }
//   <NonCitrus />
//   <Citrus />
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// class TypesOfFood extends React.Component {
//   constructor(props) {
//      super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         { /* Change code below this line */ }
//         <Fruits />
//         { /* Change code above this line */ }
//         <Vegetables />
//       </div>
//     );
//   }
// };

//Render a Class Component to the DOM
// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
 
//     <Fruits />
//     <Vegetables />
        
//       </div>
//     );
//   }
// };

// // Change code below this line
// ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

// Write a React Component from Scratch
// class MyComponent extends React.Component {

//   constructor (props) {
//     super (props);
//   }

//   render () {
//     return (
//     <div>
//       <h1>My First React Component!</h1>
//     </div>
//     );
//   }
// }

// ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));

// const CurrentDate = (props) => {
//   return (
//     <div>
//       { /* Change code below this line */ }
//       <p>The current date is: {props.date}</p>
//       { /* Change code above this line */ }
//     </div>
//   );
// };

// Pass Props to a Stateless Functional Component
// class Calendar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>What date is it?</h3>
//         { /* Change code below this line */ }
//          <CurrentDate date={Date()} />
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// Pass an Array props
// const List = (props) => {
//   { /* Change code below this line */ }
//   return <p>{props.tasks.join(", ")}</p>;
//   { /* Change code above this line */ }
// };

// class ToDo extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>To Do Lists</h1>
//         <h2>Today</h2>
//         { /* Change code below this line */ }
//          <List tasks={["Walk", "Cook", "Bake"]} />
//         <h2>Tomorrow</h2>
//         <List tasks={["Study", "Code", "Eat"]} />
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// Use Default Props
// const ShoppingCart = (props) => {
//   return (
//     <div>
//       <h1>Shopping Cart Component</h1>
//     </div>
//   )
// };
// // Change code below this line
// ShoppingCart.defaultProps = {
//   items: 0
// };

// Override Default Props
// const Items = (props) => {
//   return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
// }

// Items.defaultProps = {
//   quantity: 0
// }

// class ShoppingCart extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     { /* Change code below this line */ }
//     return <Items quantity={10}/>
//     { /* Change code above this line */ }
//   }
// };

// Use PropTypes to Define the Props You Expect
// const Items = (props) => {
//   return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
// };

// // Change code below this line
// Items.propTypes = {
//   quantity: PropTypes.number.isRequired
// };
// // Change code above this line

// Items.defaultProps = {
//   quantity: 0
// };

// class ShoppingCart extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <Items />
//   }
// };

// Access Props Using this.props
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//         <div>
//             { /* Change code below this line */ }
//             <Welcome name="Welcome"/>
//             { /* Change code above this line */ }

//         </div>
//     );
//   }
// };

// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//         <div>
//           { /* Change code below this line */ }
//           <p>Hello, <strong>{this.props.name}</strong>!</p>
//           { /* Change code above this line */ }
//         </div>
//     );
//   }
// };

// Review Using Props with Stateless Functional Components
// class CampSite extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <Camper/>
//       </div>
//     );
//   }
// };
// // Change code below this line
// const Camper = props => <p>{props.name}</p>;

// Camper.defaultProps = {
//   name: "CamperBot"
// };

// Camper.propTypes = {
//   name: PropTypes.string.isRequired
// };

// Create a Stateful Component
// class StatefulComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // Only change code below this line
//     this.state = {
//       firstName : "Name"
//     }
//     // Only change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.firstName}</h1>
//       </div>
//     );
//   }
// };

// Render State in the User Interface
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'freeCodeCamp'
//     }
//   }
//   render() {
//     return (
//       <div>
//         { /* Change code below this line */ }
//    <h1>{this.state.name}</h1>
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// Render State in the User Interface Another Way
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'freeCodeCamp'
//     }
//   }
//   render() {
//     // Change code below this line
// const name = this.state.name;
//     // Change code above this line
//     return (
//       <div>
//         { /* Change code below this line */ }
//         <h1>{name}</h1>
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// Set State with this.setState
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Initial State'
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     // Change code below this line
// this.setState({
//       name: 'React Rocks!'
//     });
//     // Change code above this line
//   }
//   render() {
//     return (
//        <div>
//         <button onClick={this.handleClick}>Click Me</button>
//         <h1>{this.state.name}</h1>
//       </div>
//     );
//   }
// };

// Bind 'this' to a Class Method
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "Hello"
//     };
//     // Change code below this line
//  this.handleClick = this.handleClick.bind(this);
//     // Change code above this line
//   }
//   handleClick() {
//     this.setState({
//       text: "You clicked!"
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick = {this.handleClick}>Click Me</button>
//         <h1>{this.state.text}</h1>
//       </div>
//     );
//   }
// };

// Use State to Toggle an Element
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
//   toggleVisibility() {
//     this.setState(state => {
//       if (state.visibility === true) {
//          return { visibility: false };
//        } else {
//          return { visibility: true };
//       }
//     });
//   }
//   // change code above this line
//   render() {
//     if (this.state.visibility) {
//       return (
//         <div>
//           <button onClick={this.toggleVisibility}>Click Me</button>
//           <h1>Now you see me!</h1>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <button onClick={this.toggleVisibility}>Click Me</button>
//         </div>
//       );
//     }
//   }
// };

// Write a Simple Counter
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
  
// this.increment = this.increment.bind(this);
// this.decrement = this.decrement.bind(this);
// this.reset = this.reset.bind(this);
//   }
// reset() {
//     this.setState({
//       count: 0
//     });
//   }
//   increment() {
//     this.setState(state => ({
//       count: state.count + 1
//     }));
//   }
//   decrement() {
//     this.setState(state => ({
//       count: state.count - 1
//     }));
//   }
//   // Change code above this line
//   render() {
//     return (
//       <div>
//         <button className='inc' onClick={this.increment}>Increment!</button>
//         <button className='dec' onClick={this.decrement}>Decrement!</button>
//         <button className='reset' onClick={this.reset}>Reset</button>
//         <h1>Current Count: {this.state.count}</h1>
//       </div>
//     );
//   }
// };

// Create a Controlled Input
// class ControlledInput extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//     // Change code below this line
//     this.handleChange = this.handleChange.bind(this);
//     // Change code above this line
//   }
//   // Change code below this line
//   handleChange (event) {
//     this.setState({
//       input: event.target.value
//     })
//   }
//   // Change code above this line
//   render() {
//     return (
//       <div>
//         { /* Change code below this line */}
//         <input value={this.state.input} onChange={this.handleChange} />
//         { /* Change code above this line */}
//         <h4>Controlled Input:</h4>
//         <p>{this.state.input}</p>
//       </div>
//     );
//   }
// };
