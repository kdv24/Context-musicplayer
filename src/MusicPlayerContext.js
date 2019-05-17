import React, { useState } from 'react';
import HappyRock from './bensound-happyrock.mp3';
import JazzyFrenchy from './bensound-jazzyfrenchy.mp3';
import Ukulele from './bensound-ukulele.mp3';
const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = props => {
    const [state, setState] = useState({
        audioPlayer: new Audio(),
        tracks: [
            { name: 'Story of My Life - One Direction', file: HappyRock },
            { name: 'Another One Bites the Dust - Queen', file: JazzyFrenchy },
            { name: 'Cough Syrup - Young the Giant', file: Ukulele },
        ],
        currentTrackIndex: null,
        isPlaying: false,
    });
    console.log('state: ', state);
    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    );
};

export { MusicPlayerContext, MusicPlayerProvider };
