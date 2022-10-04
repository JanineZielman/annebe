import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

const AfbeeldingTekst = ({ slice }) => {
  return(
    <section className='afbeelding-tekst'>
      <div className="container flex">
        <div className='image'>
          <img src={slice.primary.afbeelding?.url}/>
        </div>
        <div className='text'>
          <h1>{slice.primary.titel}</h1>
          <PrismicRichText field={slice.primary.tekst}/>
          {slice.primary.link &&
            <div className="read-more">
              <PrismicLink field={slice.primary.link}>
                <div className='bg'></div>
                {slice.primary.link_label}
              </PrismicLink>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default AfbeeldingTekst