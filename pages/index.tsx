import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('AI Property Valuator is ready.');

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>{message}</h1>
      <p>Upload your actual code to make this fully functional.</p>
    </main>
  );
}