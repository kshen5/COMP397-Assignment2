module config {
    export enum ActionEnum {
        Up,
        Down,
        Right,
        Left,
        Shoot
    }

    export const INPUT_KEY:string[][] = [
        [ // Player 1
            "KeyW",         // Forward
            "KeyS",         // Backward
            "KeyD",         // Right
            "KeyA",         // Left
            "KeyE"          // shoot
        ]
    ]
}