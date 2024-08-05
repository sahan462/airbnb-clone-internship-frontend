import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { PropertyCard } from '../components/PropertyCard';

const places = [
  {
    "image": 'src/assets/properties/2.webp',
    "location": "Jog Falls, India",
    "distance": "981 kilometers away",
    "dates": "Aug 5 – 10",
    "price_per_night": 14404,
    "average_rating": null,
    "guest_favorite": false
  },
  {
    "image": 'src/assets/properties/1.webp',
    "location": "Udaipur, India",
    "distance": "2,074 kilometers away",
    "dates": "Aug 17 – 22",
    "price_per_night": 47668,
    "average_rating": 4.82,
    "guest_favorite": true
  },
  {
    "image": 'src/assets/properties/3.webp',
    "location": "Udaipur, India",
    "distance": "2,070 kilometers away",
    "dates": "Aug 5 – 10",
    "price_per_night": 22109,
    "average_rating": 4.94,
    "guest_favorite": false
  },
  {
    "image": 'src/assets/properties/4.webp',
    "location": "Valannoor, India",
    "distance": "665 kilometers away",
    "dates": "Aug 4 – 9",
    "price_per_night": 82190,
    "average_rating": null,
    "guest_favorite": false
  },
  {
    "image": 'src/assets/properties/5.webp',
    "location": "Goa, India",
    "distance": "1,200 kilometers away",
    "dates": "Sep 10 – 15",
    "price_per_night": 15000,
    "average_rating": 4.75,
    "guest_favorite": true
  },
  {
    "image": 'src/assets/properties/6.webp',
    "location": "Shimla, India",
    "distance": "1,500 kilometers away",
    "dates": "Aug 20 – 25",
    "price_per_night": 18000,
    "average_rating": 4.9,
    "guest_favorite": false
  },
  {
    "image": 'src/assets/properties/7.webp',
    "location": "Darjeeling, India",
    "distance": "1,800 kilometers away",
    "dates": "Sep 1 – 6",
    "price_per_night": 20000,
    "average_rating": 4.85,
    "guest_favorite": true
  },
  {
    "image": 'src/assets/properties/8.webp',
    "location": "Manali, India",
    "distance": "2,100 kilometers away",
    "dates": "Aug 15 – 20",
    "price_per_night": 22000,
    "average_rating": 4.8,
    "guest_favorite": false
  },
  {
    "image": 'src/assets/properties/9.webp',
    "location": "Ooty, India",
    "distance": "1,000 kilometers away",
    "dates": "Sep 5 – 10",
    "price_per_night": 25000,
    "average_rating": 4.95,
    "guest_favorite": true
  },
  {
    "image": 'src/assets/properties/10.webp',
    "location": "Mysore, India",
    "distance": "800 kilometers away",
    "dates": "Aug 25 – 30",
    "price_per_night": 17000,
    "average_rating": 4.7,
    "guest_favorite": false
  },
  {
    "image": 'src/assets/properties/11.webp',
    "location": "Kodaikanal, India",
    "distance": "1,200 kilometers away",
    "dates": "Aug 10 – 15",
    "price_per_night": 19000,
    "average_rating": 4.85,
    "guest_favorite": true
  },
  {
    "image": 'src/assets/properties/12.webp',
    "location": "Coorg, India",
    "distance": "1,100 kilometers away",
    "dates": "Sep 12 – 17",
    "price_per_night": 16000,
    "average_rating": 4.8,
    "guest_favorite": false
  },
  {
    "image": 'src/assets/properties/13.webp',
    "location": "Alleppey, India",
    "distance": "900 kilometers away",
    "dates": "Aug 8 – 13",
    "price_per_night": 14000,
    "average_rating": 4.9,
    "guest_favorite": true
  },
  {
    "image": 'src/assets/properties/14.webp',
    "location": "Jaisalmer, India",
    "distance": "2,200 kilometers away",
    "dates": "Sep 20 – 25",
    "price_per_night": 26000,
    "average_rating": 4.75,
    "guest_favorite": false
  },
  {
    "image": 'src/assets/properties/15.webp',
    "location": "Rishikesh, India",
    "distance": "1,600 kilometers away",
    "dates": "Aug 18 – 23",
    "price_per_night": 21000,
    "average_rating": 4.85,
    "guest_favorite": true
  },
  {
    "image": 'src/assets/properties/16.webp',
    "location": "Pondicherry, India",
    "distance": "1,300 kilometers away",
    "dates": "Sep 3 – 8",
    "price_per_night": 17000,
    "average_rating": 4.7,
    "guest_favorite": false
  },
  {
    "image": 'src/assets/properties/17.webp',
    "location": "Gokarna, India",
    "distance": "1,400 kilometers away",
    "dates": "Aug 22 – 27",
    "price_per_night": 18000,
    "average_rating": 4.9,
    "guest_favorite": true
  },
  {
    "image": 'src/assets/properties/18.webp',
    "location": "Mahabalipuram, India",
    "distance": "1,100 kilometers away",
    "dates": "Sep 15 – 20",
    "price_per_night": 16000,
    "average_rating": 4.75,
    "guest_favorite": false
  },
  {
    "image": 'src/assets/properties/19.webp',
    "location": "Munnar, India",
    "distance": "900 kilometers away",
    "dates": "Aug 25 – 30",
    "price_per_night": 15000,
    "average_rating": 4.8,
    "guest_favorite": true
  },
  {
    "image": 'src/assets/properties/20.webp',
    "location": "Hampi, India",
    "distance": "1,700 kilometers away",
    "dates": "Sep 10 – 15",
    "price_per_night": 17000,
    "average_rating": 4.7,
    "guest_favorite": false
  }
];



export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-base-100">
      <main className="w-full  flex flex-col items-center">
        <div className="w-full flex justify-around flex-wrap -mx-1">
          {
            places.map((place, index) => (
                <PropertyCard place={place} />
            ))
          }
        </div>
      </main>
    </div>
  );
};

