import React from 'react'; 


const UnsplashImage = ({url}) => (
    <div className="image-item">
       <img src={url} alt="unsplash-item" />
    </div>
)

export default UnsplashImage;