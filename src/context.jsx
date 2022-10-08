import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState(null)

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    meal = meals.find((meal) => meal.idMeal === idMeal);
    setSelectedMeal(meal);
    setShowModal(true);
  }

  const fetchMeals = async (url) => {
    setLoading(true)
    try {
      const { data } = await axios.get(url)
      setMeals(data.meals)
      console.log('meals =' + data.meals);
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl)
  }

  const closeModal = () =>{
    setShowModal(false)
  }

  useEffect(() => {
    fetchMeals(allMealsUrl)
  }, [])

  useEffect(() => {
    if (!searchTerm) return
    fetchMeals(`${allMealsUrl}${searchTerm}`)
  }, [searchTerm])

  return (
    <AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomMeal, showModal, selectedMeal, closeModal }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }