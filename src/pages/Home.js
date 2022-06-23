import React from 'react'
import './Home.css'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'


const Home = () => {
  return (
    <div className='home_container'>
      <Banner />
      <Categories />
    </div>
  )
}

export default Home