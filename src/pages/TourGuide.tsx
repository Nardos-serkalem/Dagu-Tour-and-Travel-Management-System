import React, { useState } from 'react';

interface Privileges {
  viewDestinations: boolean;
  viewTourPlaces: boolean;
  viewPackageDetails: boolean;
}

interface TourGuide {
  id: string;
  name: string;
  role: 'TourGuide';
  privileges: Privileges;
}

interface Destination {
  id: string;
  name: string;
  description: string;
  country: string;
}

interface TourPlace {
  id: string;
  name: string;
  location: string;
  description: string;
}

interface TourPackage {
  id: string;
  name: string;
  price: number;
  destinations: Destination[];
  tourPlaces: TourPlace[];
  available: boolean;
}

const TourManagement: React.FC = () => {
  const [tourGuide, setTourGuide] = useState<TourGuide>({
    id: '1',
    name: 'Nardos Serkalem',
    role: 'TourGuide',
    privileges: {
      viewDestinations: true,
      viewTourPlaces: true,
      viewPackageDetails: true,
    },
  });

  const [destinations, setDestinations] = useState<Destination[]>([
    { id: '1', name: 'Lalibela', description: 'A UNESCO World Heritage site known for its rock-hewn churches', country: 'Ethiopia' },
    { id: '2', name: 'Axum', description: 'Ancient city, home to the ruins of the Aksumite Empire', country: 'Ethiopia' },
    { id: '3', name: 'Simien Mountains', description: 'A national park with dramatic landscapes and wildlife', country: 'Ethiopia' },
    { id: '4', name: 'Bale Mountains', description: 'Famous for its biodiversity and mountainous terrain', country: 'Ethiopia' },
    { id: '5', name: 'Harar', description: 'An ancient walled city with rich culture and history', country: 'Ethiopia' },
    { id: '6', name: 'Erta-ale', description: 'a low level area in the world', country: 'Ethiopia'},
  ]);

  const [tourPlaces, setTourPlaces] = useState<TourPlace[]>([
    { id: '1', name: 'Blue Nile Falls', location: 'Bahar Dar, Amhara', description: 'A powerful waterfall on the Blue Nile River' },
    { id: '2', name: 'Debre Damo Monastery', location: 'Tigray', description: 'An ancient monastery located on a plateau, accessible by rope' },
    { id: '3', name: 'Addis Ababa National Museum', location: 'Addis Ababa', description: 'Museum showcasing Ethiopia’s rich history and culture, including Lucy (the fossil)' },
    { id: '4', name: 'Fasil Ghebbi', location: 'Gondar', description: 'A royal enclosure with castles in the historical city of Gondar' },
    { id: '5', name: 'Lake Tana', location: 'Bahar Dar', description: 'The largest lake in Ethiopia, home to historic monasteries' },
  ]);

  const [tourPackages, setTourPackages] = useState<TourPackage[]>([
    {
      id: '1',
      name: 'Historical Ethiopia Tour',
      price: 800,
      destinations: [destinations[0], destinations[1], destinations[4]],
      tourPlaces: [tourPlaces[0], tourPlaces[3], tourPlaces[2]],
      available: true,
    },
    {
      id: '2',
      name: 'Nature and Adventure Tour',
      price: 900,
      destinations: [destinations[2], destinations[3]],
      tourPlaces: [tourPlaces[1], tourPlaces[4]],
      available: true,
    },
    {
      id: '3',
      name: 'Cultural Ethiopia Tour',
      price: 700,
      destinations: [destinations[4], destinations[0]],
      tourPlaces: [tourPlaces[2], tourPlaces[0]],
      available: true,
    },
  ]);

  return (
    <div>
      <h1>Tour Management System</h1>
      
      {/* View Destinations Section */}
      {tourGuide.privileges.viewDestinations && (
        <section>
          <h2>Destinations</h2>
          {destinations.map((destination) => (
            <div key={destination.id}>
              <p><strong>{destination.name}</strong></p>
              <p>{destination.description}</p>
              <p>Country: {destination.country}</p>
            </div>
          ))}
        </section>
      )}

      {/* View Tour Places Section */}
      {tourGuide.privileges.viewTourPlaces && (
        <section>
          <h2>Tour Places</h2>
          {tourPlaces.map((place) => (
            <div key={place.id}>
              <p><strong>{place.name}</strong></p>
              <p>{place.description}</p>
              <p>Location: {place.location}</p>
            </div>
          ))}
        </section>
      )}

      {/* View Tour Packages Section */}
      {tourGuide.privileges.viewPackageDetails && (
        <section>
          <h2>Tour Packages</h2>
          {tourPackages.map((packageItem) => (
            <div key={packageItem.id}>
              <p><strong>{packageItem.name}</strong></p>
              <p>Price: ${packageItem.price}</p>
              <p>Available: {packageItem.available ? 'Yes' : 'No'}</p>
              <div>
                <strong>Destinations:</strong>
                <ul>
                  {packageItem.destinations.map((dest) => (
                    <li key={dest.id}>{dest.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Tour Places:</strong>
                <ul>
                  {packageItem.tourPlaces.map((place) => (
                    <li key={place.id}>{place.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default TourManagement;
