// import React from "react"
// import '../assets/scss/MusicCardContainer.scss';
// import MusicCard from "./MusicCard";
// import {useSelector} from "react-redux";
// import Container from "./Container";

// function MusicCardContainer() {
//     const {playlists} = useSelector(state => state.musicReducer);
//     return (
//         <Container>
//             <div className={"music-card-container"}>
//                 {
//                     playlists.map(item => (
//                         <MusicCard key={item.id} music={item}/>
//                     ))
                    
//                 }
//             </div>
//         </Container>
//     );
// }

// export default MusicCardContainer;

import React from "react";
import "../assets/scss/MusicCardContainer.scss";
import MusicCard from "./MusicCard";
import { useSelector } from "react-redux";
import Container from "./Container";

function MusicCardContainer() {
    const { playlists } = useSelector((state) => state.musicReducer);

    const handleAddMusic = () => {
        console.log("Add music button clicked!");
        // Implement logic for adding music
    };

    return (
        <Container>
            <div className="music-card-container">
                {playlists.map((item) => (
                    <MusicCard key={item.id} music={item} />
                ))}
                {/* Add Music Button */}
                <button
                    onClick={handleAddMusic}
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        padding: "10px 15px",
                        marginTop: "10px",
                        cursor: "pointer",
                        fontSize: "14px",
                        textTransform: "uppercase",
                    }}
                >
                    Add Music
                </button>
            </div>
        </Container>
    );
}

export default MusicCardContainer;
