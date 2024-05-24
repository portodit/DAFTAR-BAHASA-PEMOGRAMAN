import React from 'react';
import Link from 'next/link';

interface CardProps {
  name: string;
  rank: number;
  imageUrl: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ name, rank, imageUrl, link }) => {
  return (
    <Link href={link} passHref>
      <a>
        <div className="card cursor-pointer hover:shadow-lg transition-shadow duration-200">
          <img src={imageUrl} alt={`${name} logo`} className="card-img" />
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="card-subtitle">Peringkat: {rank}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
