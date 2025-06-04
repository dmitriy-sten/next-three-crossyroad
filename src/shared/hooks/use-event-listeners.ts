import { useEffect } from "react";
import { queueMove } from "../stores/player";

export default function useEventListeners() {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowUp": {
                    event.preventDefault()
                    queueMove('forward')
                    break
                }

                case "ArrowDown": {
                    event.preventDefault()
                    queueMove('backward')
                    break
                }

                case "ArrowLeft": {
                    event.preventDefault()
                    queueMove('left')
                    break
                }

                case "ArrowRight": {
                    event.preventDefault()
                    queueMove('right')
                    break
                }

                default: break
            }




        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }

    }, [])
}