import './App.css';
import List from './List';
import React from 'react';

const App = () => {
  const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
  const colors = [
    'navy',
    'blue',
    'aqua',
    'teal',
    'olive',
    'green',
    'lime',
    'yellow',
    'orange',
    'red',
    'maroon',
    'fuchsia',
    'purple',
    'silver',
    'gray',
    'black',
  ];
  const fruits = [
    'apple',
    'banana',
    'watermelon',
    'orange',
    'peach',
    'tangerine',
    'pear',
    'kiwi',
    'mango',
    'pineapple',
  ];

  const items = sizes.reduce(
    (items, size) => [
      ...items,
      ...fruits.reduce(
        (acc, fruit) => [
          ...acc,
          ...colors.reduce(
            (acc, color) => [
              ...acc,
              {
                name: `${size} ${color} ${fruit}`,
                color,
              },
            ],
            [],
          ),
        ],
        [],
      ),
    ],
    [],
  );

  return (
    <div className="App">
      <List items={items} />
    </div>
  );
};

export default App;