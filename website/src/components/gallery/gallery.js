import React from 'react';

import GalleryItem from './galleryItem/galleryItem';

import styles from './gallery.module.css';

import Image from '../../images/5.jpg';
const images = [];
images.push(Image, Image, Image, Image, Image, Image, Image, Image, Image, Image);

const Gallery = props => (
    <React.Fragment>
        <h1 className={styles.title}>Work</h1>
        <div className={styles.gallery}>
            {/*need to map through all the GalleryItems here */}
            {images.map(img => {
                return (<GalleryItem 
                    img={img}
                    key={img} />)
            })}
        </div>
    </React.Fragment>
)

export default Gallery;