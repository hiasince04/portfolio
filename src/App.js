import React from 'react';
import ProfileCard from './components/ProfileCard';
import AboutCard from './components/AboutCard';

function App() {
    return (
        <div
            style={{
                backgroundColor: '#f9f9f9',
                minHeight: '100vh',
                padding: '30px',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <h1 style={{ marginBottom: '10px' }}>Profile.</h1>

            <hr style={{ border: '1px solid black', marginBottom: '30px' }} />

            <div
                style={{
                    display: 'flex',
                    gap: '20px',
                }}
            >
                <ProfileCard />
                <AboutCard />
            </div>
        </div>
    );
}

export default App;
