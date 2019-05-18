import React, { useState } from 'react';
import HappyRock from './bensound-happyrock.mp3';
import JazzyFrenchy from './bensound-jazzyfrenchy.mp3';
import Ukulele from './bensound-ukulele.mp3';
const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = props => {
    const [state, setState] = useState({
        audioPlayer: new Audio(),
        tracks: [
            { name: 'Happy Rock', file: HappyRock },
            { name: 'Jazzy Frenchy', file: JazzyFrenchy },
            { name: 'Ukulele', file: Ukulele },
        ],
        currentTrackIndex: 0,
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
