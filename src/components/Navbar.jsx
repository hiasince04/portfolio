import { Link } from 'react-router-dom';

const navButtonStyle = {
    padding: '8px 16px',
    border: '2px solid #999',
    borderRadius: '10px',
    backgroundColor: '#f8f8f8',
    fontFamily: "'DM Serif Display', serif",
    textDecoration: 'none',
    color: '#578CA9',
    fontWeight: 'bold',
    fontSize: '15px',
    transition: 'all 0.2s ease-in-out',
};

function Navbar() {
    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '12px',
                padding: '6px 20px',
                borderBottom: '1px solid #ccc',
                backgroundColor: '#CCDAE0',
            }}
        >
            <Link to="/" style={navButtonStyle}>
                MAIN
            </Link>
            <Link to="/write" style={navButtonStyle}>
                MEMO
            </Link>
            <Link to="/list" style={navButtonStyle}>
                LISTS
            </Link>

            <Link to="/login" style={navButtonStyle}>
                LOGIN
            </Link>
            <Link to="/signup" style={navButtonStyle}>
                SIGNUP
            </Link>
        </nav>
    );
}

export default Navbar;
