import Link from "next/link";

export default function Page() {
    return (
        <main className="">
            <h1 className="">My Name: Yuen Chong (Kevin)</h1>
            <h2>Course section: CPRG 306 C</h2>
            <Link href="https://github.com/kevinchong92/cprg306-assignments">
                <p>https://github.com</p>
            </Link>
        </main>
    )
}