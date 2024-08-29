import React from 'react'
import styled from "styled-components"
import Vri from '../img/LOGO.jpg'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from '../redux/userSlice';



const Container = styled.div`


  flex: 1;
   
  background-color: ${({ theme }) => theme.bgLighter};
  height: 150vh;
 color: ${({ theme }) => theme.text};

  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
const Button1 = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  gap: 5px;
`;


export const Menu = ({ darkMode, setDarkMode }) => {

  const navigate = useNavigate(); 
  
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())

      localStorage.removeItem("accessToken");

    
      sessionStorage.removeItem("accessToken"); 
      document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 

      navigate("/signin"); 
  };



   const { currentUser } = useSelector((state) => state.user);
  return (
   <Container>
<Wrapper>
<Link to="/" style={{textDecoration:"none", color:"inherit"}}>
  
 
  <Logo>
    <Img src={Vri} />
    Vrittant
  </Logo>
  </Link>
  <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
  <Item>
 
    <HomeIcon/>
    
    Home
    
  </Item>
  </Link>
  <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>

          <Item>
          
            <ExploreOutlinedIcon />
            Explore
          </Item>
   
       </Link>
       <Link to="subscriptions" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
          </Link>
        <Hr />
        <Link to="subscriptions" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        </Link>
       
        <Hr />
        { !currentUser &&
          <>
        <Login>
              Sign in to like videos, comment, and subscribe.
              <Link to="signin" style={{ textDecoration: "none" }}>
                <Button>
                  <AccountCircleOutlinedIcon />
                  SIGN IN
                </Button>
              </Link>
            </Login>
          
          
            <Hr />
            
          </>}

        <Title>BEST OF Vrittant</Title>
        <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <LibraryMusicOutlinedIcon  />
          Music
        </Item>
</a>
<a href="https://www.hindustantimes.com/sports" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <SportsBasketballOutlinedIcon  />
         
          Sports
        
        </Item>
        </a>
        <a href="https://www.crazygames.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        </a>
        <a href="https://edu.ibomma.games/telugu-movies/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
       </a>
       <a href="https://www.moneycontrol.com/author/moneycontrol-news-7285/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
       </a>
        <Hr />
       
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
         
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        <Item>
        <Button1 onClick={handleLogout} style={{ textDecoration: "none", color: "inherit",  border:"none" }} >
        <LogoutIcon/>
       Logout</Button1>
        </Item>
</Wrapper>
   </Container>
  )
}
