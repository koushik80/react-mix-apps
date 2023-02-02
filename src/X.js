import React from 'react'

const X = () => {
  const name = 'Koushik';
  const age = 42;
  const inputType = 'number';
  const minValue = 5;
  const maxValue = 10;

  return (
    <>
    <input type={inputType} min={minValue} max={maxValue} list={[1,2,3]} style={{color: 'teal', fontWeight:'bold', border:'3px solid red'}} />
    <div>
        <h2>{new Date().toLocaleTimeString()}</h2>
        <h2>My name is {name} and I am {age} years old.</h2>
        <textarea autoFocus={true} />
        <input maxLength="5" spellCheck style={{ padding: '5px' }} />
         <input placeholder="hi there" />
    </div>
    </>
  )
}

export default X