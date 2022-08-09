import React from 'react'

export default function Drinks() {
  return (
    <section className='drinks'>
      <h2>Bebidas</h2>

      <ul>
        <li>
          <div className='details'>
            <h3 className='details__title'>Vinho Suave</h3>
            <p className='details__description'>Lorem ipsum dolor site amet, adipsicing elit.</p>
          </div>

          <strong className='price'>
            R$37.70
          </strong>
        </li>

        <li>
          <div className='details'>
            <h3 className='details__title'>Vinho Tinto</h3>
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
