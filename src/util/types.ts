export const assertIsNotNull = <T>(value: T | null | undefined, customMessage?: string): T => {
    if (value == null) {
        throw new Error(customMessage ?? 'Value should not be null');
    }
    return value;
}