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
        PlayPreviousTrack,
        playNextTrack,
    } = useMusicPlayer();
    return (
        <>
            <div>
                <div>{currentTrackName}</div>
                <div>
                    <button
                        onClick={PlayPreviousTrack}
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
        </>
    );
};

export default PlayerControls;
