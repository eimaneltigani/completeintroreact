import React, {useState} from 'react';

const CharacterCounter = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const element = event.target;
        setInputValue(element.value);
    };

    return (
        <div>
            <textarea cols={80} rows={10} value={inputValue} onChange={handleChange}/>
            <div>Count: {inputValue.length}</div>
        </div>
    );
};

export default CharacterCounter;