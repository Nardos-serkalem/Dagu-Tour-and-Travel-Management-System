import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const TourManagementContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f4f4f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #444;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 1rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.p`
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  margin: 0;
`;

const CardText = styled.p`
  color: #555;
  margin: 0.5rem 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
`;

const ListItem = styled.li`
  font-size: 0.9rem;
  color: #777;
`;

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
  const [tourGuide] = useState<TourGuide>({
    id: '1',
    name: 'Nardos Serkalem',
    role: 'TourGuide',
    privileges: {
      viewDestinations: true,
      viewTourPlaces: true,
      viewPackageDetails: true,
    },
  });

  const [destinations] = useState<Destination[]>([
    { id: '1', name: 'Lalibela', description: 'A UNESCO World Heritage site known for its rock-hewn churches', country: 'Ethiopia' },
    { id: '2', name: 'Axum', description: 'Ancient city, home to the ruins of the Aksumite Empire', country: 'Ethiopia' },
    { id: '3', name: 'Simien Mountains', description: 'A national park with dramatic landscapes and wildlife', country: 'Ethiopia' },
    { id: '4', name: 'Bale Mountains', description: 'Famous for its biodiversity and mountainous terrain', country: 'Ethiopia' },
    { id: '5', name: 'Harar', description: 'An ancient walled city with rich culture and history', country: 'Ethiopia' },
    { id: '6', name: 'Erta-ale', description: 'A low level area in the world', country: 'Ethiopia' },
  ]);

  const [tourPlaces] = useState<TourPlace[]>([
    { id: '1', name: 'Blue Nile Falls', location: 'Bahar Dar, Amhara', description: 'A powerful waterfall on the Blue Nile River' },
    { id: '2', name: 'Debre Damo Monastery', location: 'Tigray', description: 'An ancient monastery located on a plateau, accessible by rope' },
    { id: '3', name: 'Addis Ababa National Museum', location: 'Addis Ababa', description: 'Museum showcasing Ethiopia’s rich history and culture, including Lucy (the fossil)' },
    { id: '4', name: 'Fasil Ghebbi', location: 'Gondar', description: 'A royal enclosure with castles in the historical city of Gondar' },
    { id: '5', name: 'Lake Tana', location: 'Bahar Dar', description: 'The largest lake in Ethiopia, home to historic monasteries' },
  ]);

  const [tourPackages] = useState<TourPackage[]>([
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
    <TourManagementContainer>
      <Title>Tour Guide</Title>

      {tourGuide.privileges.viewDestinations && (
        <Section>
          <SectionTitle>Destinations</SectionTitle>
          <CardContainer>
            {destinations.map((destination) => (
              <Card key={destination.id}>
                <CardTitle>{destination.name}</CardTitle>
                <CardText>{destination.description}</CardText>
                <CardText><strong>Country:</strong> {destination.country}</CardText>
              </Card>
            ))}
          </CardContainer>
        </Section>
      )}

      {tourGuide.privileges.viewTourPlaces && (
        <Section>
          <SectionTitle>Tour Places</SectionTitle>
          <CardContainer>
            {tourPlaces.map((place) => (
              <Card key={place.id}>
                <CardTitle>{place.name}</CardTitle>
                <CardText>{place.description}</CardText>
                <CardText><strong>Location:</strong> {place.location}</CardText>
              </Card>
            ))}
          </CardContainer>
        </Section>
      )}

      {tourGuide.privileges.viewPackageDetails && (
        <Section>
          <SectionTitle>Tour Packages Details </SectionTitle>
          <CardContainer>
            {tourPackages.map((packageItem) => (
              <Card key={packageItem.id}>
                <CardTitle>{packageItem.name}</CardTitle>
                <CardText><strong>Price:</strong> ${packageItem.price}</CardText>
                <CardText><strong>Available:</strong> {packageItem.available ? 'Yes' : 'No'}</CardText>
                <div>
                  <strong>Destinations:</strong>
                  <List>
                    {packageItem.destinations.map((dest) => (
                      <ListItem key={dest.id}>{dest.name}</ListItem>
                    ))}
                  </List>
                </div>
                <div>
                  <strong>Tour Places:</strong>
                  <List>
                    {packageItem.tourPlaces.map((place) => (
                      <ListItem key={place.id}>{place.name}</ListItem>
                    ))}
                  </List>
                </div>
              </Card>
            ))}
          </CardContainer>
        </Section>
      )}
    </TourManagementContainer>
  );
};

export default TourGuide;
