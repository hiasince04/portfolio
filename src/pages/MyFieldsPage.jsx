import React from 'react';
import sheworks from '../assets/sheworks.png';

function MyFieldsPage() {
    return (
        <div
            style={{
                backgroundColor: '#fefefe',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px',
                boxSizing: 'border-box',
            }}
        >
            <img
                src={sheworks}
                alt="sheworks"
                style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                }}
            />
        </div>
    );
}

export default MyFieldsPage;
