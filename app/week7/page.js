"use client";

import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './item.json';
import { useState } from 'react';
import MealIdeas from './meal-ideas.js';


export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    function handleSubmit(item) {
        setItems((itemsData) => [...itemsData, item]);
    }

    function handleItemSelect(item) {
        let clearedName = item.name.split(",", 1)[0].trim();
        clearedName = clearedName.replace(/[^a-zA-Z ]/g, "").trim();
        setSelectedItemName(clearedName);
    }

    return (
        <main className=' bg-black min-h-screen p-5 text-white'>
            <div className=' text-gray-400 font-bold text-4xl'>
                <h1>Shopping List</h1>
            </div>
            <div className=' flex'>
                <div className=' flex-1'>
                    <NewItem onSubmit={(newItem => handleSubmit(newItem))} />
                    <ItemList items={items} onItemSelect={selectedItem => handleItemSelect(selectedItem)} />
                </div>
                <div className=' flex-1'>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    )
}