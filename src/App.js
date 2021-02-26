// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayoks = [
    'Anwar', 'Salman Shah', 'Jafor', 'Alomgir', 'Siam', 'Sakib'
  ];
  const products = [
    {name:'Photoshop', price:'$99.9'},
    {name: 'Premiere Pro', price: '$110.9'},
    {name: 'After Effects', price: '$99.9'}
  ];

  // const productNames = products.map(product => product.name)
  // const nayokNames = nayoks.map(nayok => <li>{nayok}</li>);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        {/* list of nayok */}
        <ul> 
          {nayoks.map(nayok => <li>{nayok}</li>)} 
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        
        {
          products.map(pd => <Product product={pd}></Product>)
        }  

        {
          nayoks.map(nayok => <Person name={nayok}></Person>)
        }

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        <Person name={nayoks[0]} nayika="Moushumi"      food="Fuska"></Person>
        <Person name={nayoks[3]} nayika="Shabana"></Person>
        <Person name='Bappa Raj' nayika="Cheka"></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'300px',
    width:'500px',
    margin:'10px',
    color:'black'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h2>Name:{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  const personStyle = {
    border: '2px solid red',
    boxShadow: '5px 5px 20px black',
    width: '70%',
    margin: '15px',
    padding: '10px 45px',
    color: 'white'
  }
  const h3 = {
    color: 'greenyellow'
  }
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3 style = {h3}>Hero of {props.nayika}</h3>
  </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1)
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
