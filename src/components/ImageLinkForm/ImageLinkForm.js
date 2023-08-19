import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f2 bg-white p-l'>
        {'The image analyzer can detect faces in your photos.   ENTER A URL'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-dark-blue'
            onClick={onButtonSubmit}
          >D E T E C T</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;