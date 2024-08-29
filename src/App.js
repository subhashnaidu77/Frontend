import styled, { ThemeProvider } from "styled-components"
import './App.css';
import { Menu } from './components/Menu';
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Video } from "./pages/Video";
import { SignIn } from "./pages/SignIn";
import Search from "./pages/Search";
import { ProfilePage } from "./components/ProfilePage";
import React from 'react';

const Container = styled.div`
display: flex;
`;
const Main =styled.div`
flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper =styled.div`
  padding: 22px 96px;
`;
function App() {
const [darkMode,setDarkMode] = useState(true)


  return (
    <ThemeProvider theme={darkMode?  darkTheme : lightTheme}>
    <Container>
    <BrowserRouter>
     <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
     <Main>
<Navbar/>
<Wrapper>
<Routes>
  <Route path="/" />
  <Route index element={<Home type="random" />} />
   <Route path="trends" element={<Home type="trend" />} />

   <Route path="signin" element={<SignIn/>} />

  <Route path="subscriptions" element={<Home type="sub" />} />                
  <Route path="search" element={<Search/>} />

  <Route path="/profile" element={<ProfilePage />} />

  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
</Routes>

</Wrapper>
     </Main>
     </BrowserRouter>
      </Container>
      </ThemeProvider>
  );
}

export default App;
