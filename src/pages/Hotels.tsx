import React, { useState } from 'react';

interface Room {
  id: string;
  type: string;
  price: number;
  available: boolean;
}

interface Booking {
  id: string;
  customerName: string;
  roomType: string;
  date: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
}

const Hotels: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([
    { id: '1', type: 'Single', price: 1000, available: true },
    { id: '2', type: 'Double', price: 1500, available: false },
    { id: '3', type: 'Single', price: 2000, available: true },
    { id: '4', type: 'Double', price: 2500, available: false },
  ]);

  const [bookings, setBookings] = useState<Booking[]>([
    { id: '1', customerName: 'Nardos', roomType: 'Single', date: '2024-04-15', status: 'Pending' },
    { id: '2', customerName: 'Markos', roomType: 'Double', date: '2024-04-16', status: 'Confirmed' },
    { id: '3', customerName: 'Haset', roomType: 'Single', date: '2024-04-15', status: 'Cancelled' },
    { id: '4', customerName: 'Yosef', roomType: 'Double', date: '2024-04-15', status: 'Confirmed' },
  ]);

  const confirmBooking = (id: string) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: 'Confirmed' } : booking
      )
    );
  };

  const cancelBooking = (id: string) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: 'Cancelled' } : booking
      )
    );
  };

  const toggleRoomAvailability = (id: string) => {
    setRooms(
      rooms.map((room) =>
        room.id === id ? { ...room, available: !room.available } : room
      )
    );
  };

  // Explicitly define the style type
  const containerStyle: React.CSSProperties = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: 'auto',
  };

  const sectionHeaderStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    borderBottom: '2px solid #ddd',
    marginBottom: '20px',
    paddingBottom: '5px',
  };

  const cardStyle: React.CSSProperties = {
    background: '#f9f9f9',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#90EE90',  // Light green
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    marginBottom: '5px',
  };

  const availableButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#87CEEB',  // Sky blue
  };

  const unavailableButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#f44336',  // Red for unavailable
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '30px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <h1>Hotel Management</h1>

      {/* Manage Bookings Section */}
      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>Manage Bookings</div>
        {bookings.map((booking) => (
          <div key={booking.id} style={cardStyle}>
            <p><strong>Customer:</strong> {booking.customerName}</p>
            <p><strong>Room Type:</strong> {booking.roomType}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Status:</strong> {booking.status}</p>
            {booking.status === 'Pending' && (
              <>
                <button
                  onClick={() => confirmBooking(booking.id)}
                  style={availableButtonStyle}
                >
                  Confirm
                </button>
                <button
                  onClick={() => cancelBooking(booking.id)}
                  style={unavailableButtonStyle}
                >
                  Cancel
                </button>
              </>
            )}
            {booking.status === 'Confirmed' && (
              <span style={{ color: 'green' }}>Booking Confirmed</span>
            )}
            {booking.status === 'Cancelled' && (
              <span style={{ color: 'red' }}>Booking Cancelled</span>
            )}
          </div>
        ))}
      </section>

      {/* Check Room Availability Section */}
      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>Check Room Availability</div>
        {rooms.map((room) => (
          <div key={room.id} style={cardStyle}>
            <p><strong>Room Type:</strong> {room.type}</p>
            <p><strong>Price:</strong> ${room.price}</p>
            <button
              onClick={() => toggleRoomAvailability(room.id)}
              style={room.available ? availableButtonStyle : unavailableButtonStyle}
            >
              {room.available ? 'Mark as Unavailable' : 'Mark as Available'}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Hotels;
