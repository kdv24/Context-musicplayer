import React, { useState } from 'react';
const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = props => {
    const [state, setState] = useState({
        buttonName: 'Click me',
        tracks: [
            { name: 'Story of My Life - One Direction' },
            { name: 'Another One Bites the Dust - Queen' },
            { name: 'Cough Syrup - Young the Giant' },
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
