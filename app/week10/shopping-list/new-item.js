"use client";
import { useState } from "react";

export default function NewItem({ onSubmit }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category
        };

        onSubmit(item);

        alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <>
            <h2 className=" text-xl font-bold mt-8 ml-4">Add New Item</h2>
            <main className=" flex text-black w-full">
                <form onSubmit={handleSubmit}
                    className=" p-2 m-4 mt-0 bg-slate-900 max-w-sm w-full">
                    <div className=" mb-2">
                        <label>
                            <input className=" p-2 rounded-md border-2 border-gray-500 w-full"
                                type="text"
                                placeholder="Item name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required>
                            </input>
                        </label>
                    </div>
                    <div className=" mb-2 flex">
                        <label>
                            <input className=" p-2 rounded-md border-2 border-gray-500"
                                type="number"
                                min="1"
                                max="99"
                                value={quantity}
                                onChange={(event) => setQuantity(Number(event.target.value))}
                                required>
                            </input>
                        </label>
                        <div className=" flex-1"></div>
                        <label>
                            <select className=" p-2 rounded-md border-2 border-gray-500"
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                                required>
                                <optgroup label="Category">
                                    <option value="produce">Produce</option>
                                    <option value="dairy">Dairy</option>
                                    <option value="bakery">Bakery</option>
                                    <option value="meat">Meat</option>
                                    <option value="frozen foods">Frozen Foods</option>
                                    <option value="canned goods">Canned Goods</option>
                                    <option value="dry goods">Dry Goods</option>
                                    <option value="beverages">Beverages</option>
                                    <option value="snacks">Snacks</option>
                                    <option value="household">Household</option>
                                    <option value="other">Other</option>
                                </optgroup>
                            </select>
                        </label>
                    </div>
                    <div>
                        <button className=" bg-sky-400 w-full p-2 rounded-md text-white"
                            type="submit">
                            +
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}