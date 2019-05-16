import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import useMusicPlayer from './useMusicPlayer';

const TrackList = () => {
    const {
        trackList,
        currentTrackName,
        playTrack,
        isPlaying,
    } = useMusicPlayer();
    return (
        <>
            <div>
                {trackList.map((track, index) => (
                    <div className="box" key={index}>
                        <button
                            className="button"
                            onClick={() => playTrack(index)}
                        >
                            {currentTrackName === track.name && isPlaying ? (
                                <FontAwesomeIcon icon={faPause} />
                            ) : (
                                <FontAwesomeIcon icon={faPlay} />
                            )}
                        </button>
                        <div className="song-title">{track.name}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TrackList;
