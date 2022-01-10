import React, { useState, useEffect } from "react"
import Axios from "axios"
import RecipeCard from "../components/RecipeCard"
import SearchBar from "../components/SearchBar"
import "../style/Recipes.css"

export default function Recipes() {
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    
    // Function to search for the recipes

    const searchRecipes = async () => {
      if (query !== "") {
        setIsLoading(true)
        const result = await Axios.get(url)
        console.log(result)
        setRecipes(result.data.meals)
        setQuery("")
        setIsLoading(false)
      } 
    }

    useEffect(async () => {
      if (query !== "") {
        const result = await Axios.get(url)
        console.log(result);
        setRecipes(result.data.meals)
      }
    }, [query])

    const onChange = async e => {
      setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        searchRecipes()
    }

    const clearInput = () => {
      setRecipes([])
      setQuery("")
    }

    return (
        <div className="recipes-container">
            <div className="search-box">
              <h1>Your Recipe App</h1>
              <SearchBar
                  handleSubmit={handleSubmit}
                  value={query}
                  name="name"
                  onChange={onChange}
                  isLoading={isLoading}
              />
              {
                query.length !== 0 && 
                  <div className="close-icon" onClick={clearInput}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                  </div>
              }
              <div className="search-result">
                {
                  recipes !== null &&
                    recipes.slice(0, 5).map((val) => {
                      return (
                        <a className="search-item" href={val.strSource} target="_blank" rel="noopener noreferrer">
                          <p>{val.strMeal}</p>
                        </a>
                      )
                    })
                }
              </div>
            </div>
            <div className="recipes">
              {
                recipes ?
                  recipes.map((recipe) => (
                      <RecipeCard 
                          key={recipe.idMeal}
                          recipe={recipe}
                      />
                  ))
                  : "We're sorry! No recipes for such name."
              }
            </div>
        </div>
    )
}