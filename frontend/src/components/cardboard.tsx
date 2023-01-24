import { IPeople, people } from '@/data/people'
import Card from './card'

  export default function CardBoard() {
    return (
        <div className='flex space-y-2 space-x-4 justify-center flex-wrap lg:grid lg:grid-cols-6 lg:gap-4'>
            {
                people.map((person: IPeople) => (
                    <Card key={person.name} name={person.name} image={person.image}/>
                ))
            }
        </div>
    )
  }