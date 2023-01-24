import CardBoard from '@/components/cardboard'

function GameContainer(props: any) {
    return (
    <div className='flex flex-col gap-4'>
        <div id='player-2-cardboard' className='bg-red-100 px-4 py-4 rotate-180 justify-center items-center justify-center m-auto my-32'>
            <CardBoard />
        </div>
        <span className="h-1 w-full bg-gray-600 lg:w-1/3"></span>
        <div id='player-1-cardboard' className='bg-green-100 px-4 py-4 justify-center items-center justify-center m-auto my-32'>
            <CardBoard />
        </div>
    </div>
    )
}

export default GameContainer;