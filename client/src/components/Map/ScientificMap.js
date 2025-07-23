import { DeckGL, GeoJsonLayer } from 'deck.gl';
import { useEffect, useState } from 'react';

export default function ScientificMap() {
  const [algaeData, setAlgaeData] = useState(null);

  useEffect(() => {
    // Fetch data from backend API
    fetch('/api/data?type=algae')
      .then(res => res.json())
      .then(data => setAlgaeData(data));
  }, []);

  const layers = [
    new GeoJsonLayer({
      id: 'algae-blooms',
      data: algaeData,
      getFillColor: d => [0, d.value * 255, 0, 150], // Green gradient
      getRadius: d => d.value * 1000,
      opacity: 0.8
    })
  ];

  return <DeckGL layers={layers} />;
}
