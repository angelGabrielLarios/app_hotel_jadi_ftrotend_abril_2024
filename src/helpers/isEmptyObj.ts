export function isEmptyObject(obj: unknown): boolean {
    // Verifica si el objeto es nulo o no es un objeto
    if (obj === null || typeof obj !== 'object') {
        return true;
    }

    const valIsEmptyObject = Object.values(obj).length > 0


    return valIsEmptyObject; // Si no se encontraron propiedades, el objeto está vacío
}