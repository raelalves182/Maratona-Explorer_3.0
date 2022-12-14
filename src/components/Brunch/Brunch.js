import React from 'react'

export default function Brunch() {
  return (
    <section className='brunch'>
      <h2>Brunch</h2>

      <ul>
        <li>
          <div className='details'>
            <h3 className='details__title'>WAFFLE DOCE</h3>
            <p className='details__description'>Lorem ipsum dolor site amet, adipsicing elit.</p>
          </div>

          <strong className='price'>
            R$37.70
          </strong>
        </li>

        <li>
          <div className='details'>
            <h3 className='details__title'>ARROZ DOCE</h3>
            <p className='details__description'>Lorem ipsum dolor site amet, adipsicing elit.</p>
          </div>

          <strong className='price'>
            R$37.70
          </strong>
        </li>

        <li>
          <div className='details'>
            <h3 className='details__title'>MAÇA DOCE</h3>
            <p className='details__description'>Lorem ipsum dolor site amet, adipsicing elit.</p>
          </div>

          <strong className='price'>
            R$37.70
          </strong>
        </li>
      </ul>
    </section>
  )
}
