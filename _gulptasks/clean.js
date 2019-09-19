import del from "del";

export const cleanDist = () => {
    return del("dist")
}

export const cleanImage = () => {
    return del("dist/img")
}
export const cleanData = () => {
    return del("dist/data")
}

module.exports = {
    cleanDist,
    cleanImage,
    cleanData
};