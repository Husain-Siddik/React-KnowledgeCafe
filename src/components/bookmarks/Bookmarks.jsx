import PropTypes from "prop-types";


const Bookmarks = ({ bookmarks, }) => {




    return (
        <>


            <div className= "rounded-xl bg-[#f3f3f3] p-4">



                {/* here is swings bookmarks   */}

                <div >
                    {
                        bookmarks.map((blog, idx) => <div className="font-Exo text-2xl font-bold bg-white p-4  rounded-xl mb-4" key={idx}>{blog}</div>

                        )
                    }

                </div>
            </div>

        </>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;