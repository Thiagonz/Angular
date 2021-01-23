/**
 * @decsription limpa máscara
 */
export const clearMask = (v) => {
    return v.replace(/[^\d]+/g, "");
}