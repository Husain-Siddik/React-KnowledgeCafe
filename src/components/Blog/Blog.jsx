import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookMarks ,handleReadingTime }) => {

    const { cover_pic, title, author_img, author_name, reading_time, hashtags } = blog




    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl mb-4 border-b-2">
                <div>
                    <img className='w-full rounded-t-xl'
                        src={cover_pic}
                        alt="Blogs imges" />
                </div>
                {/* profile part */}
                <div className=''>
                    <div className='flex justify-between m-4'>
                        <div className=' flex items-center gap-4'>
                            <img className='w-14 rounded-full' src={author_img} alt="Author Image" />
                            <p className='text-2xl font-extrabold  font-Exo'>{author_name}</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p> {reading_time} min to read</p>
                            <p className='text-3xl' onClick={() => handleBookMarks(title)}><CiBookmark /> </p>
                        </div>
                    </div>
                    <div className="m-4">
                        <h2 className="text-4xl font-extrabold font-Exo">{title}</h2>
                        <p className='mt-4'>
                            {
                                hashtags.map((tags, idx) => <span className='ml-2' key={idx} >{tags}</span>)
                            }
                        </p>
                        <div className="">
                            <button
                           className="btn btn-link ml-[-15px]"
                           onClick={() => handleReadingTime(reading_time)}
                            >Mark As Read</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarks:PropTypes.func,
    handleReadingTime : PropTypes.func
}


export default Blog;