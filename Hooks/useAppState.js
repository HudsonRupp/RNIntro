import React, { useState, useEffect } from 'react';
import { AppState } from 'react-native';
export function useAppState() {
    const [appState, setAppState] = useState(AppState.currentState)

    handleStateChange = nextState => {
        setAppState(nextState)
    }

    useEffect(() => {
        this.appStateSubscription = AppState.addEventListener('change', this.handleStateChange)
        return () => {
            this.appStateSubscription.remove()
        }
    })

    return appState
}