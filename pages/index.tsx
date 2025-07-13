import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties');
        setProperties(response.data);
      } catch (err) {
        setError('Failed to fetch properties.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Link href={`/property/${property.id}`} key={property.id}>
            <div className="border rounded-lg p-4 cursor-pointer hover:shadow-lg">
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p>{property.location}</p>
              <p>${property.price} / night</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
