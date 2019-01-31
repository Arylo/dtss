import { dtss, levelStr } from "./dtss";

export function ms(time: number, baseLevel: levelStr = "ms") {
    return new dtss(baseLevel).ms(time);
}
export function s(time: number, baseLevel: levelStr = "ms") {
    return new dtss(baseLevel).s(time);
}
export function m(time: number, baseLevel: levelStr = "ms") {
    return new dtss(baseLevel).m(time);
}
export function h(time: number, baseLevel: levelStr = "ms") {
    return new dtss(baseLevel).h(time);
}
export function d(time: number, baseLevel: levelStr = "ms") {
    return new dtss(baseLevel).d(time);
}
export function M(time: number, baseLevel: levelStr = "ms") {
    return new dtss(baseLevel).M(time);
}
export function y(time: number, baseLevel: levelStr = "ms") {
    return new dtss(baseLevel).y(time);
}
