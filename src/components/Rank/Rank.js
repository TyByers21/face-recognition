import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f2'>
        {`${name}, you've currently analyzed ${entries} photos`}
      </div>
      <div className='white f1'>
       
      </div>
    </div>
  );
}

export default Rank;