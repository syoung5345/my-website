import React from 'react';

import GalleryItem from './galleryItem/galleryItem';

import './gallery.css';

import Image from '../../images/5.jpg';
const images = [];
images.push(Image, Image, Image, Image, Image, Image, Image, Image, Image, Image);

const Gallery = props => (
    <div className="gallery">
        {/*need to map through all the GalleryItems here */}
        {images.map(img => {
            return (<GalleryItem 
                img={img}
                key={img} />)
        })}
    </div>
)

export default Gallery;