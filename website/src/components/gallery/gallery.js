import React from 'react';

import GalleryItem from './galleryItem/galleryItem';
import styles from './gallery.module.css';

import bookCovers from '../../images/book-mockup-into-the-air.png';
import NOLA from '../../images/laptop-NOLA.png';
import Zion from '../../images/zion-pro-bono-front.jpg';
import Cotopaxi from '../../images/home-hero.png';
import BikeSearcy from '../../images/Benny-ad-1.png';
import PSA from '../../images/uno-box-meals.png';

const images = [];
// images.push(bookCovers, Image2, Image3, Image4, Image5, Image6);

images.push({img: bookCovers, title: 'Book Covers'}, {img: NOLA, title: 'Travel Website'}, 
    {img: Zion, title: 'Zion Brochure'}, {img: Cotopaxi, title: 'Cotopaxi Website'},
    {img: BikeSearcy, title: 'Bike Searcy Branding'}, {img: PSA, title: 'PSA Child Hunger'} );

const Gallery = props => (
    <div>
        <h1 className={styles.title}>Work</h1>
        <div className={styles.gallery}>
            {images.map((img, index, images) => {
                return (<GalleryItem 
                            img={img.img}
                            key={img.img}
                            to={`/work${index + 1}`} 
                            title={img.title}/>)
            })}
        </div>
    </div>
)

export default Gallery;