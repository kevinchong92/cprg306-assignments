import StudentInfo from './StudentInfo/page'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=' m-40'>
      <h1 className=' text-4xl'>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">
        <p>Week2</p>
      </Link>
    </main>
  )
}
