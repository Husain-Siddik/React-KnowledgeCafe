

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'
import ReadingTime from './components/readingTime/ReadingTime'


function App() {
  // const [count, setCount] = useState(0)

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleBookMarks = (blog) => {
    const newbookmark = [...bookmarks, blog];
    setBookmarks(newbookmark)

  }
  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time)



  }
  return (
    <main className='max-w-7xl mx-auto '>

      <Header />

      <div className='mt-8 grid grid-cols-3 gap-2.5'>
        <Blogs handleBookMarks={handleBookMarks} handleReadingTime={handleReadingTime} ></Blogs>
        <div>
          <ReadingTime readingTime={readingTime} ></ReadingTime>
          <Bookmarks bookmarks={bookmarks} ></Bookmarks>

        </div>
      </div>


    </main>
  )
}

export default App
