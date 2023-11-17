import StudentInfo from './StudentInfo/page'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=' m-40'>
      <h1 className=' text-4xl'>CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <StudentInfo />
        <Link href="/week2">
          <p>Week2</p>
        </Link>
        <Link href="/week3">
          <p>Week3</p>
        </Link>
        <Link href="/week4">
          <p>Week4</p>
        </Link>
        <Link href="/week5">
          <p>Week5</p>
        </Link>
        <Link href="/week6">
          <p>Week6</p>
        </Link>
        <Link href="/week7">
          <p>Week7</p>
        </Link>
        <Link href="/week8">
          <p>Week8</p>
        </Link>
        <Link href="/week10">
          <p>Week10</p>
        </Link>
      </div>
    </main >
  )
}
