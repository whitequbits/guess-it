import React, { useState } from "react"
import ReactCardFlip from 'react-card-flip';
import Image from "next/image";

function FrontCard(props: any) {
    return (
      <div className="w-36 overflow-hidden shadow-lg h-52 text-xs bg-white" onClick={() => props.setIsFlipped(!props.isFlipped)} >
          <Image className="w-full h-36" priority src={props.image} alt="" width={100}
          height={100} />
          <div className="px-6 py-4 h-12">
              <div className="font-bold text-center text-black text-sm">{props.name}</div>
          </div>
      </div>
    )
}

function BackCard(props: any) {
    return (
      <div className="w-36 overflow-hidden shadow-lg h-52 content-center text-xs bg-white" onClick={() => props.setIsFlipped(!props.isFlipped)}>
        <Image className="w-full my-8" priority src='/cards/back-card.png' alt="" width={100}
          height={100} />
      </div>
    )
}

function Card(props: any) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <FrontCard name={props.name} image={props.image} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
            <BackCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
        </ReactCardFlip>
    );
}

export default Card;
