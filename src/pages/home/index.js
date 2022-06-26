import React from 'react'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../assets/images/carousel_img_1.jpeg'
import img2 from '../../assets/images/carousel_img_2.jpeg'
import img3 from '../../assets/images/carousel_img_3.jpeg'

import Product from '../../components/product'

import { productList } from '../../service/productsList'

const Home = () => {
  const images = [
    {
      key: 'img1',
      src: img1
    },
    {
      key: 'img2',
      src: img2
    },
    {
      key: 'img3',
      src: img3
    },
  ]

  return (
    <>
      <div style={{ width: '100%', marginBottom: 50 }}>
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 44, fontWeight: 600 }}> Pão de céu </div>
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 14, fontWeight: 300 }}> Levando alegria em forma de code pro seu dia a dia </div>
      </div>
      <div style={{ boxShadow: "-5px 5px 5px rgba(0, 0, 0, 0.2)" }}>
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={10000}>
          {images.map(({ src, key }) => (
            <div key={key}>
              <img src={src} alt={key} style={{ height: '45vh', objectFit: 'cover' }} />
            </div>
          ))}
        </Carousel>
      </div>

      <div style={{ marginTop: 40 }}>
        <div style={{ fontSize: 28, fontWeight: 500, marginBottom: 24 }}>Produtos em destaque</div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          {productList.map(product => <Product product={product} />)}
        </div>
      </div>
    </>
  )
}

export default Home