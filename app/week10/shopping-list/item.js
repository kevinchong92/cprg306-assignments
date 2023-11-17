export default function Item({ name, quantity, category, onSelect }) {
    return (
        <div className="px-2 py-4 m-4 bg-gray-800 hover:bg-white hover:text-black cursor-pointer" onClick={onSelect}>
            <h1 className=" text-2xl font-bold">{name}</h1>
            <p>Buy {quantity} in {category}</p>
        </div>
    )
}