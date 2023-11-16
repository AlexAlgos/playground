import React, { useState } from 'react';
import { useDarkMode } from './dark-mode';
import './Static/App.css';

const ArrayVisualizer = () => {
  const [array, setArray] = useState(new Array(10).fill(null)); // Initialize array with 10 null elements
  const [inputValue, setInputValue] = useState('');
  const {isDarkMode} = useDarkMode(); // Dark mode state

  const handleInsert = () => {
    // Create a shallow copy of the original array using the spread operator
    const newArray = [...array];
    // Find the index of the first element in the copied array that is null
    const emptyIndex = newArray.findIndex((element) => element === null);

    if (emptyIndex !== -1) {
        const trimmedValue = inputValue.trim(); // Trim whitespace
        if (trimmedValue === '') { // Throw error when user try to insert an empty space into an empty array cell
            window.alert('Please enter a valid integer value!');
        } else {
            newArray[emptyIndex] = inputValue; // Insert the trimmed value into the first empty cell
            setArray(newArray);
        }
    } else {
        window.alert('All array cells are filled!');
    }
  }

  const handleRemove = () => {
    // Find the index of the last filled (non-null) element in the array, or -1 if the array is empty.
    const lastFilledIndex = array.reduce((acc, _, index) => (array[index] ? index : acc), -1);
    if (lastFilledIndex !== -1) {
      const newArray = [...array];
      newArray[lastFilledIndex] = null; // Remove the last inserted element
      setArray(newArray);
    } else {
      window.alert('There are no more elements left to remove!');
    }
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <div className="button-input-container">
        <input
          className="form-control-me-2"
          type="number"
          value={inputValue}
          placeholder="Insert here!"
          min="0"
          max="999"
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d{0,3}$/.test(value)) {
              setInputValue(e.target.value);
            }
          }}
        />
        <button className="insert-button" onClick={handleInsert}>
          Insert
        </button>
        <button className="remove-button" onClick={handleRemove}>
          Remove
        </button>
      </div>
      <div class="wrapper">
        <div class="array-wrapper">
          <div className="array-container">
            {array.map((element, index) => (
              <div className="array-cell" key={index} style={{ backgroundColor: element ? '#3EB489' : 'white' }}>
                {element}
                <span className="cell-index">{index}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrayVisualizer;
