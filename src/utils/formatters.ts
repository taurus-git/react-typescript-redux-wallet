// These functions are overkill in production — used only for string transformation practice.

export const capitalize = ( word: string ) => {
    return word.charAt( 0 ).toUpperCase() + word.slice( 1 ).toLowerCase();
}

export const capitalizedString = ( str: string | null ) => {
    if ( str === null ) return;
    let trimmed = str.trim();

    if ( trimmed.includes( "-" ) ) {
        return trimmed
            .split("-")
            .map(capitalize)
            .join("");
    }

    return capitalize( trimmed );
}
