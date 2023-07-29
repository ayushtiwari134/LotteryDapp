
const Player = ({ getPlayers, createPlayer, players }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        createPlayer();
    }

    return (

        <div className='text-white cube font-bold flex flex-col gap-7 md:w-[50%] w-[85%]  justify-center items-center border p-10'>
            <div className="create text-center w-full">
                <p className='text-5xl'>Participate in the lottery</p>
                <p className='font-light m-4 text-xl'>entry price: 0.1ETH</p>
            </div>
            <form className='w-full text-center flex gap-5 items-center justify-evenly' onSubmit={(e) => handleSubmit(e)}>
                <button type='submit' className='border p-3 rounded-md hover:bg-[red] hover:border-transparent'>Create Player</button>
            </form>
            <p className='text-3xl ml-10'>Player list:</p>
            <div className='player-list flex md:flex-row flex-col w-full items-center justify-center gap-5'>
                <button className='border rounded-md p-3 hover:bg-[#268bdf] hover:border-transparent' onClick={() => getPlayers()}>View players</button>
                {players ? <div className="players p-3">
                    {players.map((item) => {
                        return (
                            <p className='text-white'>{item.slice(0, 12) + "..." + item.slice(item.length - 3)}</p>
                        )
                    })}
                </div> : <p></p>}
            </div>
        </div>
    )
}

export default Player