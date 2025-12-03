import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromChefClaude } from "../ai"

export default function Main(){

    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState('')
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current != null ){
            recipeSection.current.scrollIntoView({behavior:"smooth"})
        }
    }, [recipe])

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
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
        {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} ref={recipeSection}/>}
        {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
    )
}