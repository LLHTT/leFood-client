import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../style/Order.css'
import FoodOrderComponent from '../components/FoodOrderComponent'
import FoodListComponent from '../components/FoodListComponent'

export default function Order() {

  const [foodName, setFoodName] = useState("")
  const [day, setDay] = useState("")
  const [time, setTime] = useState("")
  const [specialRequest, setSpecialRequest] = useState("")
  const [foodList, setFoodList] = useState([])

  useEffect(() => {
    // Axios request to get db to front-end
    Axios.get('https://mern-lefood.herokuapp.com/read')
    .then((response) => {
      //console.log(response);
      setFoodList(response.data)
    })
  }, [foodList])

  const addToList = (event) => {
    event.preventDefault()
    // Axios request to insert db/ send data to back-end
    Axios.post("https://mern-lefood.herokuapp.com/insert", {
      foodName: foodName,
      day: day,
      time: time,
      specialRequest: specialRequest
    })
    .then((response) => {
      alert('Thank you! Your order was successfully submitted')
      setFoodName("")
      setDay("")
      setTime("")
      setSpecialRequest("")
    })
    .catch((err) => {
      console.log('There was an Error: {err}')
    })
  }

  

  return (
    <div className="orderPage">
      <FoodOrderComponent 
        setFoodName={setFoodName}
        setDay={setDay}
        setTime={setTime}
        setSpecialRequest={setSpecialRequest}
        addToList={addToList}
        foodName={foodName}
        day={day}
        time={time}
        specialRequest={specialRequest}
      />
      <FoodListComponent 
        foodList={foodList}
      />
    </div>
  )
}

