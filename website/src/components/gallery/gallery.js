import React from 'react';

import GalleryItem from './galleryItem/galleryItem';

import './gallery.css';

import Image from '../../images/5.jpg';

const Gallery = props => (
    <div className="gallery">
        {/*need to map through all the GalleryItems here */}
        <GalleryItem img={Image} />
        <GalleryItem img={Image} />
        <GalleryItem img={Image} />
        <GalleryItem img={Image} />
        <GalleryItem img={Image} />
        <GalleryItem img={Image} />
        <GalleryItem img={Image} />
        <GalleryItem img={Image} />
    </div>
)

export default Gallery;