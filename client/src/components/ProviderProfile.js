// client/src/components/ProviderProfile.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProviderProfile = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const fetchProvider = async () => {
      const response = await fetch(`/api/providers/${id}`);
      const data = await response.json();
      setProvider(data);
    };
    fetchProvider();
  }, [id]);

  if (!provider) return <div>Loading...</div>;

  return (
    <div>
      <h1>{provider.name}</h1>
      <p>Services: {provider.services.join(', ')}</p>
      <p>Ratings: {provider.ratings}</p>
      <p>Contact Info: {provider.contactInfo}</p>
    </div>
  );
};

export default ProviderProfile;