



import React from 'react';
import * as THREE from 'three'
import { useGameStore } from '../stores/game';
import { useFrame } from '@react-three/fiber';
import { state } from '../stores/player';



export function useHitDetection(
    vehicle: React.RefObject<THREE.Group | null>,
    rowIndex: number
) {


    const endGame = useGameStore((state) => state.endGame)

    useFrame(() => {
        if (!vehicle?.current) return
        if (!state.ref) return

        if (
            rowIndex === state.currentRow ||
            rowIndex === state.currentRow + 1 ||
            rowIndex === state.currentRow - 1
        ) {
            const vehicleBoundingBox = new THREE.Box3()
            vehicleBoundingBox.setFromObject(vehicle.current)


            const playerBoundingBox = new THREE.Box3()
            playerBoundingBox.setFromObject(state.ref)


            if (playerBoundingBox.intersectsBox(vehicleBoundingBox)) {
                endGame()
            }
        }
    })

}