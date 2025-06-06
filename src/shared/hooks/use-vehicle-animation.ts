import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import * as THREE from 'three'
import { maxTileIndex, minTileIndex, tileSize } from "../constants";


export default function useVehicleAnimation(
    ref: RefObject<THREE.Group | null>,
    direction: boolean,
    speed: number
) {
    useFrame((state, delta) => {
        if (!ref?.current) return
        const vehicle = ref?.current

        const beginningOfRow = (minTileIndex - 2) * tileSize
        const endOfRow = (maxTileIndex)  * tileSize


        if (direction) {
            vehicle.position.x =
                vehicle.position.x > endOfRow
                    ? beginningOfRow
                    : vehicle.position.x + speed * delta
        }

        else {
            vehicle.position.x =
                vehicle.position.x < beginningOfRow
                    ? endOfRow
                    : vehicle.position.x - speed * delta
        }
    })
}