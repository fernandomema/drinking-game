// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }

    interface Array<T> {
        shuffle(): T[]
    }

    interface String {
        spintax(): string
        bold(): string
        underline(): string
    }
    
    interface Window {
        CrazyGames: {
            SDK: {
                init: () => void;
                game: {
                    gameplayStart: () => void;
                    gameplayStop: () => void;
                },
                ad: {
                    requestAd: (type: string) => void;
                }
            }
        }
    }
}

export {};
