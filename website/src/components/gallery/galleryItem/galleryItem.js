import React from 'react';
import Img from 'gatsby-image';

const GalleryItem = props => (
    <div className="galleryItem">
        {/* <Img src={Image} /> */}
        <img src={props.img} />
    </div>
)

export default GalleryItem;