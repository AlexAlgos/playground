import React, { useState } from 'react';
import { useDarkMode } from './dark-mode';
import './Static/App.css';

const DynamicArrayVisualizer = () => {
    const initialCapacity = 2; // Initial array size
    const maxCapacity = 8; // Maximum array size
    const [array, setArray] = useState(new Array(initialCapacity).fill(null));
    const [inputValue, setInputValue] = useState('');
    const { isDarkMode } = useDarkMode();

    const handleInsert = () => {
        if (inputValue.trim() === '') {
            window.alert('Please enter a valid value from 0-999!');
            return;
        }
        const nullCount = array.filter((element) => element === null).length;
        if (nullCount === 0) {
            if (array.length < maxCapacity) {
                const newArray = new Array(array.length * 2).fill(null);
                for (let i = 0; i < array.length; i++) {
                    newArray[i] = array[i];
                }
                newArray[array.length] = inputValue;
                setArray(newArray);
            } else {
                window.alert('Array size has reached the maximum capacity of 8!');
            }
        } else {
            const newArray = [...array];
            const emptyIndex = newArray.findIndex((element) => element === null);
            newArray[emptyIndex] = inputValue;
            setArray(newArray);
        }
    }
    const handleRemove = () => {
        const lastFilledIndex = array.reduce((acc, _, index) => (array[index] ? index : acc), -1);
        if (lastFilledIndex !== -1) {
            const newArray = [...array];
            newArray[lastFilledIndex] = null; // Remove the last inserted element
            setArray(newArray);
            // Reduce the array size if it's larger than the minimum capacity
            if (array.length > initialCapacity) {
                if (array.length / 2 >= initialCapacity) {
                    setArray(newArray.slice(0, array.length / 2));
                } else {
                    setArray(newArray.slice(0, initialCapacity));
                }
            } else {
                setArray(newArray);
            }
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
                            <div
                                className="array-cell"
                                key={index}
                                style={{ backgroundColor: element ? '#3EB489' : 'white' }}
                            >
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

export default DynamicArrayVisualizer

