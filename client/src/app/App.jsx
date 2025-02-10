// import React, {useEffect} from "react";
// import './App.scss';
// import Home from "../components/Pages/Home";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// // import Login from "../components/Pages/Login";
// import Navbar from '../components/Navbar';  
// import Footer from '../components/Footer';  
// import LoginPage from '../pages/Auth/LoginPage';  
// import SignupPage from "../pages/Auth/SingupPage";
// import {ThemeContext, themes} from "../api/Theme";
// import musicDB from "../db/music";
// import {useDispatch, useSelector} from "react-redux";
// import {setPlaylist} from "../actions/actions";

// const App = () => {

//     const {language} = useSelector(state => state.musicReducer);

//     const dispatch = useDispatch();
//     useEffect(()=>{
//         if (language === null || language.includes("any")){
//             dispatch(setPlaylist(musicDB))
//         }
//         else if (language.includes('Tamil')){
//             alert("No Tamil tracks available")
//         } else {
//             let x = musicDB.filter((item)=>(
//                 item.lang && language.includes(item.lang.toLowerCase())
//             ))
//             dispatch(setPlaylist(x))
//         }
//     },[dispatch, language]);

//     return (
//         <ThemeContext.Provider value={themes.light}>
//             <>
//                 <Router>
//                     <Switch>
//                         {/* <Route path="/" exact component={Login}/> */}
//                          <Route path="/login" element={<LoginPage />} />
//                         <Route path="/signup" element={<SignupPage />} />
//                         <Route path="/home" component={Home}/>
//                     </Switch>
//                 </Router>
//             </>
//         </ThemeContext.Provider>
//     );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
// import Navbar from '../components/Navbar';  
// import Footer from '../components/Footer';  
// import LoginPage from '../pages/Auth/LoginPage';  
// import SignupPage from "../pages/Auth/SingupPage";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes> {/* Use Routes instead of Switch */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         {/* Add other routes here */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


//=================================//

// import React, { useEffect } from "react";
// import './App.scss';
// import Home from "../components/Pages/Home";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from '../components/Navbar';  
// import Footer from '../components/Footer';  
// import LoginPage from '../pages/Auth/LoginPage';  
// import SignupPage from "../pages/Auth/SingupPage";
// import { ThemeContext, themes } from "../api/Theme";
// import musicDB from "../db/music";
// import Login from "../components/Pages/Login";
// import { useDispatch, useSelector } from "react-redux";
// import { setPlaylist } from "../actions/actions";
// import Search from "../components/Pages/Search";
// import About from "../components/Pages/About";
// import Playlist from "../components/fragment/Playlist";


// const App = () => {

//     const { language } = useSelector(state => state.musicReducer);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (language === null || language.includes("any")) {
//             dispatch(setPlaylist(musicDB));
//         } else if (language.includes('Tamil')) {
//             alert("No Tamil tracks available");
//         } else {
//             let filteredPlaylist = musicDB.filter((item) =>
//                 item.lang && language.includes(item.lang.toLowerCase())
//             );
//             dispatch(setPlaylist(filteredPlaylist));
//         }
//     }, [dispatch, language]);

//     return (
//         <ThemeContext.Provider value={themes.light}>
//             <Router>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/signup" element={<SignupPage />} />
//                      <Route path="/" exact component={Login}/>
//                     <Route path="/home" element={<Home />} />
//                     {/* <Route path="/home/search" element={<Search />} />
//                     <Route path="/home/About" element={<About />} />
//                     <Route path="/home/Playlist" element={<Playlist />} /> */}
//                 </Routes>
//                 <Footer />
//             </Router>
//         </ThemeContext.Provider>
//     );
// }

// export default App;


// import React, { useEffect } from "react";
// import './App.scss';
// import Home from "../components/Pages/Home";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from "../components/Pages/Login";
// import { ThemeContext, themes } from "../api/Theme";
// import musicDB from "../db/music";
// import { useDispatch, useSelector } from "react-redux";
// import { setPlaylist } from "../actions/actions";
// import LoginPage from "../pages/Auth/LoginPage";
// import SignupPage from "../pages/Auth/SingupPage";
// import Navbar from "../components/Navbar";
// import { Search } from "@material-ui/icons";

// const App = () => {
//     const { language } = useSelector(state => state.musicReducer);

//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (language === null || language.includes("any")) {
//             dispatch(setPlaylist(musicDB));
//         } else if (language.includes('hindi')) {
//             alert("No Hindi tracks available");
//         } else {
//             const filteredPlaylist = musicDB.filter(item =>
//                 item.lang && language.includes(item.lang.toLowerCase())
//             );
//             dispatch(setPlaylist(filteredPlaylist));
//         }
//     }, [dispatch, language]);

//     return (
//         <ThemeContext.Provider value={themes.light}>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Navbar />} />
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/singup" element={<SignupPage />} />
//                     <Route path="/welcome" element={<Login />} />
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/home/search" element={<Search />} />
//                 </Routes>
//             </Router>
//         </ThemeContext.Provider>
//     );
// }

// export default App;

// import React, { useEffect } from "react";
// import './App.scss';
// import Home from "../components/Pages/Home";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from "../components/Pages/Login";
// import { ThemeContext, themes } from "../api/Theme";
// import musicDB from "../db/music";
// import { useDispatch, useSelector } from "react-redux";
// import { setPlaylist } from "../actions/actions";
// import { Search } from "@material-ui/icons";
// import About from "../components/Pages/About";
// import Playlist from "../components/fragment/Playlist";

// const App = () => {
//     const { language } = useSelector(state => state.musicReducer);

//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (language === null || language.includes("any")) {
//             dispatch(setPlaylist(musicDB));
//         } else if (language.includes('hindi')) {
//             alert("No Hindi tracks available");
//         } else {
//             const filteredPlaylist = musicDB.filter(item =>
//                 item.lang && language.includes(item.lang.toLowerCase())
//             );
//             dispatch(setPlaylist(filteredPlaylist));
//         }
//     }, [dispatch, language]);

//     return (
//         <ThemeContext.Provider value={themes.light}>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Login />} />
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/home/search" element={<Search/>} />
//                     <Route path="/home/About" element={<About/>} />
//                     <Route path="/home/playlist/" element={<Playlist />} />
//                 </Routes>
//             </Router>
//         </ThemeContext.Provider>
//     );
// }

// export default App;


//export
import React, { useEffect } from "react";
import './App.scss';
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import LoginPage from "../pages/Auth/LoginPage";
import SignupPage from '../pages/Auth/SingupPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeContext, themes } from "../api/Theme";
import musicDB from "../db/music";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../actions/actions";

const App = () => {
    const { language } = useSelector((state) => state.musicReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (language === null || language.includes("any")) {
            dispatch(setPlaylist(musicDB));
        } else if (language.includes('hindi')) {
            alert("No hindi tracks available");
        } else {
            let filteredMusic = musicDB.filter((item) =>
                item.lang && language.includes(item.lang.toLowerCase())
            );
            dispatch(setPlaylist(filteredMusic));
        }
    }, [dispatch, language]);

    return (
        <ThemeContext.Provider value={themes.light}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/home/*" element={<Home />} />
                </Routes>
            </Router>
        </ThemeContext.Provider>
    );
};

export default App;