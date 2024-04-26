import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory === 'all' ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="all">All</option>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        {/* Add other category options as needed */}
      </select>
      <ul>
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
