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
        file,
    } = useMusicPlayer();

    console.log('file: ', file);
    return (
        <div>
            <audio src={file} controls loop />
            <div className="currently-playing">
                {currentTrackName}
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
