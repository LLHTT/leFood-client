export default function RecipeCard({ recipe }) {
    const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

    return (
        <div className="recipe-card">
            <img 
                src={strMealThumb}
                alt={strMeal}
                className="recipe-card-image"
            />
            <div className="recipe-card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank" rel="noreferrer" className="recipe-btn">Recipe</a>
            </div>
        </div>
    )
}