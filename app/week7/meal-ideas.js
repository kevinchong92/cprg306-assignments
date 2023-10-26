"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return (data.meals || []);
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        setMeals(await fetchMealIdeas(ingredient));
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    function display() {
        if (!ingredient) {
            return <p>Select an item to see meal ideas</p>;
        }
        else if (meals.length === 0) {
            return (
                <p>No meal ideas found for {ingredient}</p>
            )
        }
        else {
            return (
                <>
                    <p>Here are some meal ideas using {ingredient}:</p>
                    <ul>
                        {meals.map((meal) => (
                            <li key={meal.idMeal}>{meal.strMeal}</li>
                        ))}
                    </ul>
                </>
            )
        }
    }

    return (
        <div>
            <h2 className=" text-xl font-bold mt-8 ">Meal Ideas</h2>
            {display()}
        </div>
    );
}