export const TextService = {
    textLimit(text: string, maxLenght: number): string{
        if (text.length < maxLenght) {
            return text;
        }
        return text.slice(0, maxLenght) + '...';
    }
}
