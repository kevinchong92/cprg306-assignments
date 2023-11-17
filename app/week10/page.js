'use client';

import { useUserAuth } from './_utils/auth-context';
import Link from 'next/link';

export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    function handleSignIn() {
        gitHubSignIn();
    }

    function handleSignOut() {
        firebaseSignOut();
    }

    return (
        <>
            <div>
                <h1 className="text-3xl mb-8">Shopping List App</h1>
                <p className="text-xl">You are currently signed in as {user?.email}</p>
                <button className="block bg-orange-400 m-4 p-2 w-60 hover:bg-orange-600" onClick={handleSignIn}>Sign in with GitHub</button>
                <button className="block bg-orange-400 m-4 p-2 w-60 hover:bg-orange-600" onClick={handleSignOut}>Sign out</button>
            </div>
            {user && <div>
                <h1 className="text-3xl mb-4">Shopping List</h1>
                <Link href="/week10/shopping-list">
                    <p className=' block m-4 p-2 bg-orange-400 w-60 hover:bg-orange-600'>Continue to the shopping list</p>
                </Link>
            </div>}
        </>
    )
}