import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

const Aanbod = ({ slice }) => {
  return(
    <section className='aanbod'>
      <div className='container'>
        <h1>{slice.primary.titel}</h1>
        <div className='flex'>
          {slice.items?.map((item, i) => {
            return(
              <div className='item' key={`item-${i}`}>
                <img src={item.afbeelding?.url}/>
                <h2>{item.titel}</h2>
                <span>{item.onder_titel}</span>
                 {item.link &&
                    <div className="read-more">
                      <PrismicLink field={item.link}>
                        <div className='bg'></div>
                        {item.link_label}
                      </PrismicLink>
                    </div>
                  }
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Aanbod