import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
    const [isMatches, setIsMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        setIsMatches(mediaQuery.matches);

        const handleMediaQueryChange = (e) => {
            setIsMatches(e.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [query]);
    
    return isMatches;
}