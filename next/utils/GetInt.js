"use client";

import React, { useState } from 'react';

function GetInt(props) {
  const [int, setInt] = useState(props.init);

  const flexSubmit = (event) => {
    event.preventDefault();
    console.log('int:', int);
    props.callBack(int);
  };

  return (
    <div id="config_id">
      <form style={{ display: 'flex' }} onSubmit={flexSubmit}>
        <div>{props.title}&nbsp;</div>
        <input
          style={{
            width: props.width || '80px',
            border: '1px solid #999',
            borderRadius: '4px',
            padding: '2px 6px',
            background: '#fff',
            color: '#000',
            outline: 'none',
          }}
          type={props.type}
          pattern={props.pattern}
          name={props.title}
          required={props.required}
          placeholder={props.init}
          onChange={(e) =>
            setInt((v) => (e.target.validity.valid ? e.target.value : v))
          }
        />
        <button
          style={{ width: '60px', background: '#f2ed8f' }}
          type="submit"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default GetInt;