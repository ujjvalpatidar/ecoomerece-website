import React from 'react'

const MyImage = ({ imgs = [{ url: "" }] }) => {
  return (
<>
<div className='img-container'>
  {
    imgs.map((curElem, index) => {
      return (
        <figure>
          <img src={curElem.url}
          alt={curElem.filename}
          key={index}
          />
        </figure>
      );
    })}
</div>
<div className='main-image'>
<img src={imgs[0].url}
alt={imgs[0].filename}
/>
</div>
</>
  )
}

export default MyImage;