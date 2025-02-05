import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center  mt-3 pb-4
         border-[#f3f3f3] border-b-2'>
             <h1 className='text-4xl font-bold font-Exo'>Knowledge Cafe</h1>
             <img src={Profile} alt=""  />
        </div>
    );
};

export default Header;