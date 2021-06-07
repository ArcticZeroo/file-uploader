import { customAlphabet } from 'nanoid';

export const dictionary = {
    alphabetUppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    alphabetLowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers:           '0123456789'
};

const defaultNanoidDictionary = [
    dictionary.alphabetUppercase,
    dictionary.alphabetLowercase,
    dictionary.numbers
];

const defaultNanoidSize = 10;

const customNanoid = customAlphabet(defaultNanoidDictionary.join(''), defaultNanoidSize);

export const id = () => customNanoid();