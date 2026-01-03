import { useState, useEffect } from 'react';

export const useTypingEffect = (
    texts,
    typingSpeed = 60,
    deletingSpeed = 30,
    pauseDuration = 2000
) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullText = texts[currentTextIndex];

        const timeout = setTimeout(() => {
            if (isDeleting) {
                setDisplayedText(currentFullText.substring(0, currentCharIndex - 1));
                setCurrentCharIndex(prev => prev - 1);
            } else {
                setDisplayedText(currentFullText.substring(0, currentCharIndex + 1));
                setCurrentCharIndex(prev => prev + 1);
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        // Check if finished typing current text
        if (!isDeleting && currentCharIndex === currentFullText.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
        }

        // Check if finished deleting
        if (isDeleting && currentCharIndex === 0) {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [currentCharIndex, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return displayedText;
};
