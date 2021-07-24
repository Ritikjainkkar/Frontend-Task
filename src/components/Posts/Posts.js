import React from 'react'
import './styles.css'
export default function Posts() {
  return (
    <ul class="cards">
      <li class="cards__item">
        <div class="card">
          <div class="card__image card__image--flowers"></div>
          <div class="card__content">
            <div class="card__title">Flex Basis</div>
            <p class="card__text">This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property."</p>
          </div>
        </div>
      </li>
</ul>
  )
}
