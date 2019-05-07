import React from 'react';

import GalleryItem from './galleryItem/galleryItem';
import styles from './gallery.module.css';

import bookCovers from '../../images/book-mockup-into-the-air.png';
import Image2 from '../../images/laptop-NOLA.png';
import Image3 from '../../images/zion-pro-bono-front.jpg';
import Image4 from '../../images/home-hero.png';
import Image7 from '../../images/uno-box-meals.png';
import Image6 from '../../images/Benny-ad-1.png';
import Image5 from '../../images/dm-poster.png';

const images = [];
images.push(bookCovers, Image2, Image3, Image4, Image5, Image6, Image7);

const Gallery = props => (
    <React.Fragment>
        <h1 className={styles.title}>Work</h1>
        <div className={styles.gallery}>
            {images.map(img => {
                return (<GalleryItem 
                    img={img}
                    key={img}
                    to={`/work/`} 
                    state={{ image: img }}/>)
            })}
        </div>
    </React.Fragment>
)

export default Gallery;