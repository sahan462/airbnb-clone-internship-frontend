import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <header className="w-full max-w-screen-lg flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Airbnb Clone</h1>
      </header>
      <main className="w-full max-w-screen-lg flex flex-col items-center mt-4">
        <div className="w-full flex items-center bg-white p-2 rounded-md shadow-md">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </div>
        <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mock Data for Featured Properties */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-md shadow-md p-4">
              <img
                src={`https://via.placeholder.com/300?text=Property+${index + 1}`}
                alt={`Property ${index + 1}`}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-xl font-bold">Property {index + 1}</h2>
              <p className="text-gray-700">Location {index + 1}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

