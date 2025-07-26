import Image from "next/image";

const fetchSingleMeal = async (id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        return data.meals;
    }
    catch (error) {
        console.error("Error fetching meals:", error);
        return [];
    }
}


export async function generateMetadata({ params }) {
    const id = await params.id

    // fetch data
    const meals = await fetchSingleMeal(id);
    const singleMeal = meals[0];
    // console.log(singleMeal);

    return {
        title: singleMeal?.strMeal,
        description: singleMeal?.strInstructions,
    }
}






const MealsPage = async ({ params }) => {
    const p = await params;



    const SignleMeal = await fetchSingleMeal(p?.id);
    // console.log(SignleMeal);

    return (
        <div>
            <div className='max-w-2xl mx-auto flex items-center justify-center min-h-screen'>
                <div className='p-4 bg-gray-700'>
                    <h1 className='text-2xl font-bold mb-2'>{SignleMeal[0].strMeal}</h1>
                    <Image width={641} height={641} src={SignleMeal[0].strMealThumb} alt={SignleMeal[0].strMeal} className='w-full h-auto mb-4' />
                    <p className='text-gray-400 mb-4'>{SignleMeal[0].strInstructions}</p>
                    <p className='text-gray-300 font-bold'>Meal ID: {p.id}</p>
                </div>
            </div>
        </div>
    );
};

export default MealsPage;