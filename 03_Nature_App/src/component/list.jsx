import React, { useState } from 'react';
import './list.css'


function ListItem({ item, onRemove }) {
  return (
    <li>
      {item.text}
      <button onClick={() => onRemove(item.id)} style={{ marginLeft: '10px' }}>
    remove
      </button>
    </li>
  );
}

function List() {
  const [items, setItems] = useState([
    { id: 1, text: 'Rohit Sharma (MI)' },
    { id: 2, text: 'Virat Kohli(RCB)' },
    { id: 3, text: 'M S Dhoni (CSK)' },
  ]);

  const [note, setNote] = useState('');

  const addItem = () => {
    if (note.trim() === '') return; 
    const newItem = {
      id: Date.now(),
      text: note,
    };
    setItems([...items, newItem]);
    setNote(''); 
  };

  

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2 class="Notes">📝 Notes List</h2>

      <div class="Notes-input" >
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a new note..."
        />
        <button class="add-btn" onClick={addItem}> Add Note</button>
      </div>

      <ul>
        {items.map(item => (
          <ListItem key={item.id} item={item} onRemove={removeItem} />
        ))}
      </ul>
    </div>
  );
}

export default List;
