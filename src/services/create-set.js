export const createSet = (url, img_width) => {
    let set = [];

    switch (img_width) {
        case 100:
            set = [640, 768, 1024, 1366, 1600, 1920];
            break;
        case 75:
            set = [480, 576, 768, 1025, 1200, 1440];
            break;
        case 50:
            set = [320, 384, 512, 683, 800, 960];
            break;
        case 33:
            set = [213, 256, 341, 455, 533, 640];
            break;
        default:
            set = [640, 768, 1024, 1366, 1600, 1920];
        }

    for (let i = 0; i < set.length; i++) {
        set[i] = `${url}?tr=w-${set[i]} ${set[i]}w`;
    }
    return set.join(', ')

}