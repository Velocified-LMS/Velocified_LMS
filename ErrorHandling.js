import { useEffect, useState } from 'react';

const ActivityWindow = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/activity'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    // Handle and display the error within the component
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // Render your activity window with the data
  return (
    <div>
      {/* Render your activity window content using the 'data' */}
    </div>
  );
};

export default ActivityWindow;
