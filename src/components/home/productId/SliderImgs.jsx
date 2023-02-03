import React, { useState } from 'react'

const SliderImgs = ({product}) => {

    const [indexImg, setIndexImg] = useState(0)

    const handlePrev = () => {
        if(indexImg -1 < 0){
            setIndexImg(product.productImgs.length-1)}
        else {
            setIndexImg(indexImg - 1)
        }
    }
    const handleNext = () => {
        if(indexImg +1 > product.productImgs.length-1){
            setIndexImg(0)}
        else {
            setIndexImg(indexImg + 1)
        }
    }

  return (
    <div className='slider'>
        <button onClick={handlePrev} className='slider_prev'><i className='bx bx-left-arrow-alt'></i></button>
        <div className='slider_static'>
            <div style={{transform: `translateX(calc(-${indexImg}/3 * 100%))`}} className='slider_move'>
                {
                    product.productImgs.map(url => (
                        <div key={url} className='slider_img_container'>
                            <img  className='slider__img' src={url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
        <button onClick={handleNext} className='slider_next'><i className='bx bx-right-arrow-alt'></i></button>
    </div>
  )
}

export default SliderImgs