import React, { useState } from 'react';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [clientId, setClientId] = useState('');
  const [providerId, setProviderId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const booking = { date, time, clientId, providerId };
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <label>
        Client ID:
        <input type="text" value={clientId} onChange={(e) => setClientId(e.target.value)} />
      </label>
      <label>
        Provider ID:
        <input type="text" value={providerId} onChange={(e) => setProviderId(e.target.value)} />
      </label>
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;