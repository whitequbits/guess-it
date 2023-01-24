import { IPeople, people } from '@/data/people'
import { useState } from 'react';
import Card from './card'

  export default function CardShuffler() {
    const randomizePosition = (array: any[]) => {
        return Math.round(Math.random() * (array.length - 1));
    }

    const [shuffledCardPosition, runShuffler] = useState(0);

    return (
        <div className='card-shuffler h-auto flex flex-col justify-center gap-2 my-4'>
            <Card key={people[shuffledCardPosition].name} name={people[shuffledCardPosition].name} image={people[shuffledCardPosition].image}/>
            <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white'onClick={() => runShuffler(randomizePosition(people))}>Shuffle</button>
        </div>
    )
  }