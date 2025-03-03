import { page } from '$app/stores';

export class OriginChecker {
    static isDev = (location: string) => {
        if (location.includes('localhost') || location.includes('github.dev') || location.includes('cloudworkstations.dev')) { 
            return true;
        }
        return false;
    }
    
    static isProduction = (location: string) => {
        return !OriginChecker.isDev(location);
    }
    
}