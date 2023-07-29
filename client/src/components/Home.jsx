import React from 'react'
import { Link } from 'react-router-dom'
const Home = ({ currentAccount, connectWallet, owner }) => {
    console.log(currentAccount, owner)
    return (
        <div className='text-white font-bold cube flex flex-col gap-5 min-h-[50%]  md:w-[50%] w-[85vw] justify-center items-center border p-10'>
            <div className="connected_account sm:text-xl md:text-2xl font-light md:flex md:flex-row flex flex-col justify-center gap-5 items-center mb-5">
                <button className='border py-1 px-2 rounded-md hover:bg-[#6CB4EE] hover:border-transparent ' onClick={connectWallet}>{!currentAccount ? "Connect Wallet" : "Change Account"}</button>
                {currentAccount && <p className='text-xl text-center'>Account Connected : {currentAccount.toString() == owner.toString() ? `${currentAccount.slice(0, 4) + "..." + currentAccount.slice(currentAccount.length - 3)} (owner)` : `${currentAccount.slice(0, 4) + "..." + currentAccount.slice(currentAccount.length - 3)}`}</p>}
            </div>
            <div className="top-text  sm:text-3xl md:text-5xl text-xl">
                Play as:
            </div>
            <div className="bottom mt-5 sm:text-xl md:text-2xl text-center p-3">
                <Link to='./manager'><div className="manager w-[200px] mb-6 border border-transparent px-3 py-2 rounded-md bg-[red] hover:bg-transparent hover:border hover:border-white">Manager</div></Link>
                <Link to='./player'><div className="player mt-6 border px-3 py-2 rounded-md hover:bg-[#6CB4EE] hover:border-transparent">Player</div></Link>
            </div>

        </div>
    )
}

export default Home