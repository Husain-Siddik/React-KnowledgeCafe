
import PropTypes from "prop-types";
const ReadingTime = ({readingTime}) => {
    return (
        <div>
              <div className=" text-center mb-4">
             <p className="border rounded-2xl text-2xl font-bold font-Exo text-blue-500 p-4 bg-[#efecfd]">Spend Time on read : {readingTime} min</p>

            </div>
        </div>
    );
};
ReadingTime.propTypes = {
   
    readingTime: PropTypes.number
}


export default ReadingTime;