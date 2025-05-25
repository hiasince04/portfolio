import AboutCard from '../components/AboutCard';
import ProfileCard from '../components/ProfileCard';

function MainPage() {
    return (
        <div style={{ padding: '20px', fontFamily: "'DM Serif Display', serif", color: '#578CA9' }}>
            <h1>JUYEONINE BLOG🍓</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <ProfileCard />
                <AboutCard />
            </div>
        </div>
    );
}

export default MainPage;
