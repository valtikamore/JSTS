import React from 'react';

import './App.css';

function App() {
  const names = ['Valentine','Natalia','mamam','gegeeg']
  const users = [
    {name:'Valentine', age:24,id:1},
    {name:'Natasha', age:22,id:2},
    {name:'Grisha', age:444,id:3},
    {name:'Vitya', age:333,id:4},
    {name:'Denis', age:22,id:5},
  ]
  const mapNames = names.map(n => {
    return <li>{n}</li>
  })
  const usersInformation = users.map(u =><div key={u.id}>{`Hello, my name is ${u.name} and my age is ${u.age}`}</div> )

  return (
    <div className="App">
      <ul>
        {mapNames}
      </ul>
      <div>
        {usersInformation}
      </div>

    </div>
  );
}

export default App;
