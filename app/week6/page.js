"use client";

import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './item.json';
import { useState } from 'react';


export default function Page() {
    const [items, setItems] = useState(itemsData);

    function handleSubmit(item) {
        setItems((itemsData) => [...itemsData, item]);
    }

    return (
        <main className=' bg-black min-h-screen p-5 text-white'>
            <div className=' text-gray-400 font-bold text-4xl'>
                <h1>Shopping List</h1>
            </div>
            <div>
                <NewItem onSubmit={(newItem => handleSubmit(newItem))} />
                <ItemList items={items} />
            </div>
        </main>
    )
}