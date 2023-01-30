
import React from 'react';
import { Box,  styled } from '@mui/material';
// import MclPhoto01 from '../Assets/Images/mcl_photo_01.png';
import homepageimg from '../assets/homepageimg.png';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
    
`;

const Image = styled('img')({
    width: '80%',
    height: '850px',
});

const HomePage = () => {

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: "url(bggif.gif)",
            backgroundSize: "cover",
        }}>
            <Image src={homepageimg}/>
        </div>
        
    )
}

export default HomePage;