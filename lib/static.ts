import { dtss, levelStr } from "./dtss";

export const ms = (time: number, baseLevel: levelStr = "ms") => {
    return new dtss(baseLevel).ms(time);
};
export const s = (time: number, baseLevel: levelStr = "ms") => {
    return new dtss(baseLevel).s(time);
};
export const m = (time: number, baseLevel: levelStr = "ms") => {
    return new dtss(baseLevel).m(time);
};
export const h = (time: number, baseLevel: levelStr = "ms") => {
    return new dtss(baseLevel).h(time);
};
export const d = (time: number, baseLevel: levelStr = "ms") => {
    return new dtss(baseLevel).d(time);
};
export const M = (time: number, baseLevel: levelStr = "ms") => {
    return new dtss(baseLevel).M(time);
};
export const y = (time: number, baseLevel: levelStr = "ms") => {
    return new dtss(baseLevel).y(time);
};
