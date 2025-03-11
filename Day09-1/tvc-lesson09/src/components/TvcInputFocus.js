import React, { useRef, useEffect, useState }  from 'react'

export default function TvcInputFocus() {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const prevValue = useRef("");
  
    useEffect(() => {
      inputRef.current.focus();
    }, []);
  
    useEffect(() => {
      prevValue.current = inputValue;
    }, [inputValue]);
  
    return (
      <div className='alert alert-info'>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>Giá trị trước đó: {prevValue.current}</p>
      </div>
    );
}
