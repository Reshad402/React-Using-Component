import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome to my React Country Api</h1>
            <nav className='navigation'>
                <a href="https://www.youtube.com/watch?v=41hWqnH4kGQ&list=RD41hWqnH4kGQ&start_radio=1&ab_channel=AstroboyMusick">Video 1</a>
                <a href="https://www.youtube.com/watch?v=k0VcX4BvOrc&list=RDk0VcX4BvOrc&start_radio=1&ab_channel=SwevenRecords">Video 2</a>
                <a href="https://www.google.com/search?q=translate+english+to+bangla&oq=&aqs=chrome.4.35i39i362l7j69i59i450...7.191657393j0j7&sourceid=chrome&ie=UTF-8">Translator</a>
            </nav>
        </div>
    );
};

export default Header;