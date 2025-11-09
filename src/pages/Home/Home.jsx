import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Explore-menu/Exploremenu'
import Fooddisplay from '../../components/fooddisplay/Fooddisplay'
import App from '../../App'
import Appdownload from '../../Appdownload/Appdownload'
const Home = () => {
  const [category,setCategory]=useState("all")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
