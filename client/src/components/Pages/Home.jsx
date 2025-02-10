import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import './css/Home.scss';
import Navigation from "../fragment/Navigation";
import MobileTopNavigation from "../fragment/MobileTopNavigation";
import SideBar from "../fragment/SideBar";
import FooterMusicPlayer from "../fragment/FooterMusicPlayer";
import BottomNavigationMobile from "../fragment/BottomNavigationMobile";
import MusicCardContainer from "../fragment/MusicCardContainer";
import Profile from "./Profile";
import AddMusic from "../fragment/AddMusic";
import FooterSelectMusic from "../fragment/FooterSelectMusic";
import CurrentPlayingLarge from "../fragment/CurrentPlayingLarge";
import Search from "./Search";
import About from "./About";
import Playlist from "../fragment/Playlist";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../api/Theme";

const Home = () => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currMusic, setCurrMusic] = useState(null);

    const useStyle = useContext(ThemeContext);
    const { playing, bannerOpen } = useSelector((state) => state.musicReducer);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setCurrMusic(playing);
    }, [playing]);

    return (
        <div style={useStyle.component} className={"home-container"}>
            {screenSize <= 970 ? <MobileTopNavigation /> : <Navigation />}
            <section className={"home-music-container"}>
                <div className="sidebar-home">
                    <SideBar />
                </div>
                <div className="main-home">
                    <Routes>
                        <Route path="/" element={<MusicCardContainer />} />
                        <Route path="search" element={<Search />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="add" element={<AddMusic />} />
                        <Route path="about" element={<About />} />
                        <Route path="playlist/:id" element={<Playlist />} />
                    </Routes>
                </div>
            </section>
            {bannerOpen && (
                <section className="current-large-banner">
                    <CurrentPlayingLarge />
                </section>
            )}
            <React.Fragment>
                {currMusic ? (
                    <FooterMusicPlayer music={currMusic} />
                ) : (
                    <FooterSelectMusic />
                )}
                {screenSize <= 970 && <BottomNavigationMobile />}
            </React.Fragment>
        </div>
    );
};

export default Home;
