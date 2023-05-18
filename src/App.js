import './App.css';
import React, { Fragment, useState } from 'react';

const List = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <Fragment>
      <div>
        <h2>Selected Items:</h2>
        {selectedItems.map((selectedItem) => (
          <span key={selectedItem.name} className="SelectedItems__item">
            {selectedItem.name}
          </span>
        ))}
      </div>
      <ul className="List">
        {items.map((item) => (
          <li
            key={item.name}
            className={`List__item List__item--${item.color} ${
              selectedItems.includes(item) ? 'List__item--selected' : ''
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

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