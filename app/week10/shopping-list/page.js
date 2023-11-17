"use client";

import ItemList from './item-list.js';
import NewItem from './new-item.js';
import { useState } from 'react';
import MealIdeas from './meal-ideas.js';
import { useUserAuth } from '../_utils/auth-context';
import Link from 'next/link';
import { getItems, addItem } from '../_services/shopping-list-service.js';
import { useEffect } from 'react';

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');

    async function handleAddItem(item) {
        const newItemId = await addItem(user.uid, item);
        const newItem = { ...item, id: newItemId };
        setItems(itemsData => [...itemsData, newItem]);
    }

    function handleItemSelect(item) {
        let clearedName = item.name.split(",", 1)[0].trim();
        clearedName = clearedName.replace(/[^a-zA-Z ]/g, "").trim();
        setSelectedItemName(clearedName);
    }

    function handleSignOut() {
        firebaseSignOut();
    }

    async function loadItems() {
        const items = await getItems(user.uid);
        setItems(items);
    }

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    if (!user) {
        return (
            <div>
                <h1 className="text-3xl">You have to login</h1>
                <Link href="/week8">
                    <p className=' block m-4 p-2 bg-orange-400 w-60 hover:bg-orange-600 text-center'>Back to Login Page</p>
                </Link>
            </div>
        )
    }


    return (
        <main className=' bg-black min-h-screen p-5 text-white'>
            <div className=' text-gray-400 font-bold text-4xl flex'>
                <h1>Shopping List</h1>
                <button className="text-white text-lg bg-orange-400 ml-8 w-40 hover:bg-orange-600" onClick={handleSignOut}>Sign out</button>
            </div>
            <div className=' flex'>
                <div className=' flex-1'>
                    <NewItem onSubmit={(newItem => handleAddItem(newItem))} />
                    <ItemList items={items} onItemSelect={selectedItem => handleItemSelect(selectedItem)} />
                </div>
                <div className=' flex-1'>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    )
}