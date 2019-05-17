import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faPause,
    faPlay,
    faStepBackward,
    faStepForward,
} from '@fortawesome/free-solid-svg-icons';
import useMusicPlayer from './useMusicPlayer';

const PlayerControls = () => {
    const {
        isPlaying,
        currentTrackName,
        togglePlay,
        playPreviousTrack,
        playNextTrack,
    } = useMusicPlayer();
    return (
        <div>
            {/* <audio
                src={`${currentTrackName}`}
                controls
                loop
            > */}
            <div className="currently-playing">
                {currentTrackName}
                {/* </audio> */}
                <div className="currently-playing-controls">
                    <button
                        onClick={playPreviousTrack}
                        disabled={!currentTrackName}
                    >
                        <FontAwesomeIcon icon={faStepBackward} />
                    </button>
                    <button onClick={togglePlay} disabled={!currentTrackName}>
                        {isPlaying ? (
                            <FontAwesomeIcon icon={faPause} />
                        ) : (
                            <FontAwesomeIcon icon={faPlay} />
                        )}
                    </button>
                    <button
                        onClick={playNextTrack}
                        disabled={!currentTrackName}
                    >
                        <FontAwesomeIcon icon={faStepForward} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerControls;
