import MealSearchInput from "./components/MealSearchInput";
import Style from './meals.module.css';



const MealsPage = async ({ searchParams }) => {
    const query = await searchParams.search || '';

    const fetchMeals = async () => {
        try {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + query);
            const data = await res.json();
            return data.meals;
        }
        catch (error) {
            console.error("Error fetching meals:", error);
            return [];
        }
    }

    const meals = await fetchMeals();

    return (
        <div>
            <div className='p-4'>
                <MealSearchInput></MealSearchInput>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                {meals.map((meal) => (
                    <div key={meal.idMeal} className={`p-4 border-b mb-2 border-gray-200 ${Style.testing}`}>
                        <h2 className='text-xl font-bold'>{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className='w-full h-auto' />
                        <p className='text-gray-500'>{meal.strInstructions.slice(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealsPage;