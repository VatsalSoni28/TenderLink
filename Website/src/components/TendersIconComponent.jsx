import React, { useEffect, useState } from 'react';
import './TendersIconComponent.css'; // Assume you have some styles here

const TendersIconComponent = () => {
  const [latestTenders, setLatestTenders] = useState([]);
  const [todaysTenders, setTodaysTenders] = useState([]);

  useEffect(() => {
    // Fetch the latest tenders from an API or a service
    // This is just a placeholder for where you'd make the actual data request
    const fetchTenders = async () => {
      // Replace with actual API call
      const tenders = await fetchLatestTenders();
      setLatestTenders(tenders);
    };

    // Fetch today's tenders similarly
    const fetchTodaysTenders = async () => {
      // Replace with actual API call
      const tenders = await fetchTodaysTenders();
      setTodaysTenders(tenders);
    };

    fetchTenders();
    fetchTodaysTenders();
  }, []);

  // Mock data fetching functions (replace with actual API calls)
  const fetchLatestTenders = async () => {
    // Replace with real data fetching logic
    return [
      { id: 1, title: 'Tender 1' },
      { id: 2, title: 'Tender 2' },
      { id: 3, title: 'Tender 3' },
    ];
  };

  const fetchTodaysTenders = async () => {
    // Replace with real data fetching logic
    return [
      { id: 4, title: 'Tender A' },
      { id: 5, title: 'Tender B' },
    ];
  };

  return (
    <div className="tenders-icon-component">
      <div className="brand-icon">
        {/* Brand Icon */}
        <img src="/path/to/brand-icon.png" alt="Brand Icon" />
      </div>
      <div className="tenders-info">
        <h2>Latest Tenders</h2>
        <ul>
          {latestTenders.map((tender) => (
            <li key={tender.id}>{tender.title}</li>
          ))}
        </ul>
        <h2>Today's Open Tenders</h2>
        <ul>
          {todaysTenders.map((tender) => (
            <li key={tender.id}>{tender.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TendersIconComponent;
