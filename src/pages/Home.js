import React from 'react'
import '../style/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <div className="home_hello">
          <h1>Привет добро пожаловать!!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio officia, quisquam doloremque harum, porro itaque veniam praesentium qui repudiandae explicabo modi rem cum vero laudantium? Adipisci quos atque quod tenetur officia?</p>
        </div>
        <div className="home_btn">
          <Link to={'/captcha'}>
          
            Пройти каптчу d
          
          </Link>
        </div>
    </div>
  )
}

export default Home
