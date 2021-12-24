import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Order.css';
import FoodOrderComponent from '../FoodOrderComponent';
import FoodListComponent from '../FoodListComponent';

export default function Order() {

  const [foodName, setFoodName] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [newFoodName, setNewFoodName] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    // Axios request to get db to front-end
    Axios.get('https://mern-lefood.herokuapp.com/read')
    .then((response) => {
      //console.log(response);
      setFoodList(response.data);
    })
  }, [foodList]);

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
  };

  function updateFood(id) {
    if (newFoodName) {
      Axios.put("https://mern-lefood.herokuapp.com/update", {
        newFoodName: newFoodName,
        id: id
      })
    }
  };

  function deleteFood(id) {
    Axios.delete(`https://mern-lefood.herokuapp.com/delete/${id}`)
  };

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
        setNewFoodName={setNewFoodName}
        updateFood={updateFood}
        deleteFood={deleteFood}
      />
    </div>
  )
}

