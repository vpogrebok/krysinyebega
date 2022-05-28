import * as React from "react"
import classNames from "classnames"

import Button from "../button/button"
import Slider from "../slider/slider";


import "../style.scss"


const Products = ({data}) => {

  return (
    <section className="product">
        <div className="container">
          {data.map((item, index) => (
            
            <div 
              key={index} 
              className={classNames('product__block',{'product__block--reverse' : item.isActive})}
              id={item.id}
            >

              <div className="product__content">
                  <h1 className="product__title">{item.title}</h1>
                  <div className="product__subtitle" dangerouslySetInnerHTML={{__html: item.block}}></div>
                  <div className="product__description">{item.info}</div>
                  <div className="product__data">
                      <div className="product__price">{item.price}</div>
                      <Button />
                  </div>
              </div>
  
              <div className="product__slide">

                <Slider item={item} />
                
                
              </div>
            </div>
          ))}
        </div>
      </section>
    
  )
  
}

export default Products