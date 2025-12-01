import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main(){

    const [ingredients, setIngredients] = React.useState(["all main spices", "ground beef", "pasta", "tomato paste"])

    const [recipeShown, setRecipeShown] = React.useState(false)

    function getRecipe(){
        setRecipeShown(true)
    }

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
    }

    return (
    <main>
        <form action={addIngredient} className="add-ingredient-form">
            <input 
                type="text" 
                aria-label="Add ingredient" 
                placeholder="e.g. oregano"
                name="ingredient"
            />
            <button>Add ingredient</button>
        </form>
        {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
        {recipeShown && <ClaudeRecipe/>}
    </main>
    )
}