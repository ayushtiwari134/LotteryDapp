import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className='text-white flex  justify-evenly px-20 py-[1.5rem] text-xl absolute top-0 left-0 w-full'>
      <div className=' w-full md:flex hidden justify-between'>
        <div className="logo font-bold text-2xl">
          <Link to='/'>LotteryDapp</Link>
        </div>
        <div className="items">
          <ul className='flex justify-center items-center gap-7'>
            <li><Link to="./">Home</Link></li>
            <li><Link to="./manager">Manager</Link></li>
            <li><Link to="./player">Player</Link></li>
          </ul>
        </div>
      </div>
      <div onClick={() => setClicked(!clicked)} className=" md:hidden icons absolute right-10">
        {clicked ? <AiOutlineClose /> :
          <AiOutlineMenu />}
      </div>
      {clicked && <div onClick={() => setClicked(!clicked)} className=" md:hidden mobile-icons justify-center items-center glass rounded-md p-20  right-14 absolute  top-10 flex flex-col gap-10 h-[70vh] w-[70%]">

        <div className="logo font-bold text-2xl">
          <Link to='/'>LotteryDapp</Link>
        </div>
        <div className="items">
          <ul className='flex flex-col justify-center items-center gap-7'>
            <li><Link to="./">Home</Link></li>
            <li><Link to="./manager">Manager</Link></li>
            <li><Link to="./player">Player</Link></li>
          </ul>
        </div>

      </div>}

    </div>
  );
}

export default Navbar;
