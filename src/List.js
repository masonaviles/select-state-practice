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

export default List;