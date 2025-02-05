import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleBookMarks,handleReadingTime}) => {

  const [blogs,setBlogs] = useState([])

    useEffect(
        () => {
            fetch('blogs.json')
                .then(res => res.json())
                .then(data => setBlogs(data))
              
        }
        , [])



    return (
        <div className=" col-span-2">
            

            {
                blogs.map(blog => <Blog key={blog.id} blog = {blog}
                    handleBookMarks ={handleBookMarks}
                    handleReadingTime = {handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleBookMarks :PropTypes.func,
    handleReadingTime :PropTypes.func
}
export default Blogs;