// tslint:disable:class-name
// tslint:disable:object-literal-sort-keys

export enum LEVEL {
    ms, s, m, h, d, M, y
}

export type levelStr = "ms" | "s" | "m" | "h" | "d" | "M" | "y";

const Levels = ["ms", "s", "m", "h", "d", "M", "y"];

const LevelMap = {
    "ms-s": {
        value: 1E3
    },
    "s-m": {
        value: 60
    },
    "m-h": {
        value: 60
    },
    "h-d": {
        value: 24
    },
    "d-M": {
        value: 30
    },
    "M-y": {
        value: 12
    },
    "d-y": {
        value: 365
    },
};

export class dtss {

    public static LEVEL = LEVEL;
    private levelStr = LEVEL.ms;

    constructor(baseLevel?: levelStr) {
        if (baseLevel && typeof LEVEL[baseLevel] === "number") {
            this.setLevel(LEVEL[baseLevel]);
        }
    }

    public setLevel(level: LEVEL) {
        this.levelStr = level;
        return this;
    }

    public getLevel() {
        return this.levelStr;
    }

    public getLevelString() {
        return LEVEL[this.getLevel()];
    }

    public ms(time: number) {
        return this.cal(time, LEVEL.ms);
    }

    public s(time: number) {
        return this.cal(time, LEVEL.s);
    }

    public m(time: number) {
        return this.cal(time, LEVEL.m);
    }

    public h(time: number) {
        return this.cal(time, LEVEL.h);
    }

    public d(time: number) {
        return this.cal(time, LEVEL.d);
    }

    public M(time: number) {
        return this.cal(time, LEVEL.M);
    }

    public y(time: number) {
        return this.cal(time, LEVEL.y);
    }

    private cal(time: number, level: LEVEL) {
        if (level === this.getLevel() || time === 0) {
            return time;
        }
        const points = [
            Levels.indexOf(LEVEL[level]), Levels.indexOf(LEVEL[this.getLevel()])
        ];
        const [sLevelPoint, eLevelPoint] = points;

        const isUpLevel = sLevelPoint < eLevelPoint;
        const levelQueue = Levels.slice(Math.min(...points), Math.max(...points) + 1);
        if (levelQueue.indexOf("y") !== -1 && levelQueue.indexOf("d") !== -1) {
            levelQueue.splice(levelQueue.indexOf("M"), 1);
        }
        levelQueue.forEach((_, index) => {
            const key = `${levelQueue[index]}-${levelQueue[index + 1]}`;
            if (!LevelMap[key]) {
                return;
            }
            const { value } = LevelMap[key];
            if (isUpLevel) {
                time /= value;
            } else {
                time *= value;
            }
        });
        return time;
    }

}
