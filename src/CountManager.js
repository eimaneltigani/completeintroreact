import React, {useState} from 'react';
import Button from './Button';
import CharacterCounter from './CharacterCounter';

function CountManager() {
  const [count, setCount] = useState(0);
  
  const incrementCounter = (value) => {
    setCount(count + value);
  }

  return (
    <>
      <Button clickAction={() => incrementCounter(1)} increment={1}/> 
      <Button clickAction={() => incrementCounter(5)} increment={5}/> 
      <Button clickAction={() => incrementCounter(10)} increment={10}/> 
      <p>{`The count is: ${count}`}</p>
      <CharacterCounter />
    </>
  );
}

export default CountManager;
