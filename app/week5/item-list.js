"use client";
import { useState } from "react";
import Item from "./item.js";
import items from "./item.json";

export default function ItemList() {

    const [sortBy, setSortBy] = useState('name');
    const category = items.map((item) => (item.category));
    const uniCategory = category.reduce((accumulator, current) => {
        if (!accumulator.includes(current)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []).sort((a, b) => a.localeCompare(b));

    let sortedItem;
    let selectedItem;

    if (sortBy === 'name' || sortBy === 'groupedCategory') {
        sortedItem = items.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === 'category') {
        sortedItem = items.sort((a, b) => a.category.localeCompare(b.category));
    }

    function display() {
        if (sortBy === 'groupedCategory') {
            const displayElement = [];
            for (const cat of uniCategory) {
                selectedItem = sortedItem.filter((item) => item.category === cat);
                displayElement.push(
                    <div key={cat}>
                        <h2 className=" capitalize text-lg">{cat}</h2>
                        <ul>
                            {selectedItem.map((item) => (
                                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                            ))}
                        </ul>
                    </div>
                )
            }
            return displayElement;
        }
        else {
            return (
                <ul>
                    {items.map((sortedItem) => (
                        <Item key={sortedItem.id} name={sortedItem.name} quantity={sortedItem.quantity} category={sortedItem.category} />
                    ))}
                </ul>
            )
        }
    }


    return (
        <>
            <div className=" flex items-center">
                <p>Sort by:</p>
                <button className=" block bg-orange-400 m-4 p-2 w-40" onClick={(event) => (setSortBy('name'))}>Name</button>
                <button className=" block bg-orange-500 m-4 p-2 w-40" onClick={(event) => (setSortBy('category'))}>Category</button>
                <button className=" block bg-orange-600 m-4 p-2 w-40" onClick={(event) => (setSortBy('groupedCategory'))}>Grouped Category</button>
            </div>
            <div>
                {display()}
            </div>
        </>
    );
}
