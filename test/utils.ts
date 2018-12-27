export const onceNum = () => {
    return parseInt(Math.random() * 1000 + "", 10);
};

export const twiNum = (() => {
    let conut = 0;
    let num = -1;
    return () => {
        if (conut === 0) {
            num = onceNum();
        }
        conut++;
        if (conut >= 2) {
            conut = 0;
        }
        return num;
    };
})();
