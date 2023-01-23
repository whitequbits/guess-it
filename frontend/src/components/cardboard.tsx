import { IPeople, people } from '@/data/people'
import Card from './card'

  export default function CardBoard() {
    return (
        <div className='flex space-y-8 space-x-8 justify-center flex-wrap mx-4 my-4'>
            {
                people.map((person: IPeople) => (
                    <Card className='flex-auto' key={person.name} name={person.name} image={person.image}/>
                ))
            }
        </div>
    )
  }