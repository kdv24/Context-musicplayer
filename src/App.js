import React from 'react';

import './App.css';
import { MusicPlayerProvider } from './MusicPlayerContext';
import TrackList from './TrackList';
import PlayerControls from './PlayerControls';

const App = () => {
    return (
        <MusicPlayerProvider>
            <div className="App">
                <header className="App-header">
                    <h1>Context Music Player</h1>
                </header>
                <div className="radio">
                    <TrackList />
                    <PlayerControls />
                </div>
            </div>
        </MusicPlayerProvider>
    );
};

export default App;
