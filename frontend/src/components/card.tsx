import Image from 'next/image'
  
  export default function Card(props: any) {
    return <div className="group max-w-sm overflow-hidden shadow-lg">
            <Image className="w-full" src={props.image} alt="" width={100}
            height={100} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{props.name}</div>
                <button className="my-2 hidden group-hover:block text-white font-bold py-2 px-4 w-full rounded bg-green-500 hover:bg-green-700">Choose</button>
                <button className="my-2 hidden group-hover:block text-white font-bold py-2 px-4 w-full rounded bg-blue-500 hover:bg-blue-700">Flip</button>
            </div>
        </div>
  }