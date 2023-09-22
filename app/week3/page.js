import ItemList from './item-list.js'

export default function Page() {
    return (
        <main className=' bg-black min-h-screen p-5 text-white'>
            <div className=' text-gray-400 font-bold text-4xl'>
                <h1>Shopping List</h1>
            </div>
            <div>
                <ItemList />
            </div>
        </main>
    )
}