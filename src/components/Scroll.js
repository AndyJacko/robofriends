import React from 'react';


const Scroll = (props) => {
  return (
    <div style={{margin: '10px', padding: '10px', overflowY: 'scroll', border: '2px solid #000', height: '70vh'}}>
      {props.children}
    </div>
  );
};

export default Scroll;