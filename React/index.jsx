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

