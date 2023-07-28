import React, { useState } from 'react'

const Manager = ({ selectWinner, owner, winner, sendMoney }) => {

    return (
        <div className='text-white cube flex flex-col gap-4 md:w-[50%] w-[85vw] h-[60%] items-center justify-center  border p-10'>
            <div className="manager flex items-center gap-5">
                <p className='text-2xl font-bold'>Owner:</p>
                <p className='text-2xl'>{owner.slice(0, 10) + "..." + owner.slice(owner.length - 3)}</p>
            </div>
            <div className="pick-winner text-center p-2 w-full">
                <button className='border p-3 md:w-[30%] w-[200px] m-5 rounded-md hover:bg-[#268bdf] hover:border-transparent' onClick={() => selectWinner()}>Pick winner</button>
                {winner &&
                    <div className='flex flex-col gap-5 items-center'>
                        <div className="winner mt-5 flex items-center justify-center gap-10">
                            <p className='text-xl'>Winner is :</p>
                            <p className=' p-3 border '>{winner.slice(0, 10) + "..." + winner.slice(winner.length - 3)}</p>
                        </div>
                        <button className='border p-3 w-[30%] m-5 rounded-md hover:bg-[red] hover:border-transparent' onClick={() => sendMoney()}>Send Money</button>
                    </div>}
            </div>
        </div>
    )
}

export default Manager