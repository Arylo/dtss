export enum LEVEL {
    ms, s, m, h, d, M, y
}

// tslint:disable-next-line:class-name
export class dtss {

    public static LEVEL = LEVEL;
    private level = LEVEL.ms;

    constructor(level?: LEVEL) {
        if (level) {
            this.setLevel(level);
        }
    }

    public setLevel(level: LEVEL) {
        this.level = level;
        return this;
    }

    public getLevel() {
        return this.level;
    }

    public ms(time: number) {
        return time === 0 ? 0 : this.cal(time, LEVEL.ms);
    }

    public s(time: number) {
        return time === 0 ? 0 : this.cal(time, LEVEL.s);
    }

    public m(time: number) {
        return time === 0 ? 0 : this.cal(time, LEVEL.m);
    }

    public h(time: number) {
        return time === 0 ? 0 : this.cal(time, LEVEL.h);
    }

    public d(time: number) {
        return time === 0 ? 0 : this.cal(time, LEVEL.d);
    }

    public M(time: number) {
        return time === 0 ? 0 : this.cal(time, LEVEL.M);
    }

    public y(time: number) {
        return time === 0 ? 0 : this.cal(time, LEVEL.y);
    }

    private cal(time: number, level: LEVEL) {
        if (level === this.level) {
            return time;
        }
        if (level < this.level) {
            return NaN;
        }
        switch (level) {
            case LEVEL.y:
                time *= 12;
            case LEVEL.M:
                if (LEVEL.M === this.level) {
                    break;
                }
                time *= 30;
                if (level === LEVEL.y) {
                    time /= 360;
                    time *= 365;
                }
            case LEVEL.d:
                if (LEVEL.d === this.level) {
                    break;
                }
                time *= 24;
            case LEVEL.h:
                if (LEVEL.h === this.level) {
                    break;
                }
                time *= 60;
            case LEVEL.m:
                if (LEVEL.m === this.level) {
                    break;
                }
                time *= 60;
            case LEVEL.s:
                if (LEVEL.s === this.level) {
                    break;
                }
                time *= 1000;
            case LEVEL.ms:
                time *= 1;
                break;
        }
        return time;
    }

}

export const ms = (time: number) => {
    return new dtss().ms(time);
};
export const s = (time: number) => {
    return new dtss().s(time);
};
export const m = (time: number) => {
    return new dtss().m(time);
};
export const h = (time: number) => {
    return new dtss().h(time);
};
export const d = (time: number) => {
    return new dtss().d(time);
};
export const M = (time: number) => {
    return new dtss().M(time);
};
export const y = (time: number) => {
    return new dtss().y(time);
};
