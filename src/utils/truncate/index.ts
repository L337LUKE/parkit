function truncate(text: string, characterLimit: number) {
    if (text.length < characterLimit) return text.trim();
    return text
        .replace(/\s+/g, ' ')
        .replace(new RegExp('^(.{' + characterLimit + '}[^s]*).*'), '$1');
}

export default truncate;
