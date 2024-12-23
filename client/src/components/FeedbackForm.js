// client/src/components/FeedbackForm.js

import React, { useState } from 'react';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [providerId, setProviderId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const feedback = { rating, comment, providerId };
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      </label>
      <label>
        Comment:
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <label>
        Provider ID:
        <input type="text" value={providerId} onChange={(e) => setProviderId(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;