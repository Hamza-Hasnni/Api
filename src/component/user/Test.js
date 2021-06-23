import React from 'react'
import "./UserStyle.css"

const User = ({user}) => {
    return (
        <ul class="cards">
        
        <li>
          <a href="" class="card">
            <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
            <div class="card__overlay">        
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">{user.name}</h3>
                  <span class="card__status">{user.username}</span>
                </div>
              </div>
              <p class="card__description">{user.email}</p>
            </div>
          </a>
        </li>
           
      </ul>
    )
}

export default User
