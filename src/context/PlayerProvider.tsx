import React, { createContext, useContext, useState } from 'react';

const ProfileProviderContext = createContext(null);

const { Provider } = ProfileProviderContext;

export type PlayerStateType = {
    title: string | null,
    isPlaying: boolean,
    audioUrl: string | null,
    fullScreen: boolean,
    image: string | null,
};

const PlayerProvider = ({ children }) => {
    const [playerState, setPlayerState] = useState<PlayerStateType>({
        title: null,
        image: null,
        audioUrl: null,
        isPlaying: false,
        fullScreen: false,
    });

    const updatePlayerState = (state: Partial<PlayerStateType>) => {
        setPlayerState((prev) => ({
            ...prev,
            ...state
        }));
    };

    const resetPlyerState = () => {
        setPlayerState({
            title: null,
            isPlaying: false,
            image: null,
            audioUrl: null,
            fullScreen: false
        });
    };

    return (
        <Provider
            value={{
                playerState,
                updatePlayerState,
                resetPlyerState
            }}
        >
            {children}
        </Provider>
    );
};

export const usePlayerState = () => {
    const { playerState, updatePlayerState, resetPlyerState } = useContext<{
        playerState: PlayerStateType,
        updatePlayerState:(state: Partial<PlayerStateType>) => void,
        resetPlyerState: () => void

    }>(ProfileProviderContext);

    return { playerState, updatePlayerState, resetPlyerState };
};

export default PlayerProvider;
