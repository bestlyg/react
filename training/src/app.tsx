import React from 'react';

export default function App() {
  React.useEffect(() => {
    console.log('11');
  }, []);
  return <div>app</div>;
}
