import test from "ava";
import { dtss, LEVEL } from "../lib";
import { onceNum, twiNum } from "./utils";

test("rebase year", (t) => {
    t.is(new dtss("y").y(twiNum()), twiNum());
    t.not(new dtss("y").M(twiNum()), twiNum());
    t.not(new dtss("y").d(twiNum()), twiNum());
    t.not(new dtss("y").h(twiNum()), twiNum());
    t.not(new dtss("y").m(twiNum()), twiNum());
    t.not(new dtss("y").s(twiNum()), twiNum());
    t.not(new dtss("y").ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss("y").M(onceNum()), NaN);
    t.not(new dtss("y").d(onceNum()), NaN);
    t.not(new dtss("y").h(onceNum()), NaN);
    t.not(new dtss("y").m(twiNum()), twiNum());
    t.not(new dtss("y").s(onceNum()), NaN);
    t.not(new dtss("y").ms(onceNum()), NaN);

    t.is(new dtss().setLevel(LEVEL.y).y(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.y).M(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.y).d(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.y).h(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.y).m(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.y).s(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.y).ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss().setLevel(LEVEL.y).M(twiNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.y).d(twiNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.y).h(twiNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.y).m(twiNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.y).s(twiNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.y).ms(twiNum()), NaN);
});

test("rebase mouth", (t) => {
    t.is(new dtss("M").y(twiNum()), twiNum() * 12);
    t.is(new dtss("M").M(twiNum()), twiNum());
    t.not(new dtss("M").d(twiNum()), twiNum());
    t.not(new dtss("M").h(twiNum()), twiNum());
    t.not(new dtss("M").m(twiNum()), twiNum());
    t.not(new dtss("M").s(twiNum()), twiNum());
    t.not(new dtss("M").ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss("M").d(onceNum()), NaN);
    t.not(new dtss("M").h(onceNum()), NaN);
    t.not(new dtss("M").m(onceNum()), NaN);
    t.not(new dtss("M").s(onceNum()), NaN);
    t.not(new dtss("M").ms(onceNum()), NaN);

    t.is(new dtss().setLevel(LEVEL.M).y(twiNum()), twiNum() * 12);
    t.is(new dtss().setLevel(LEVEL.M).M(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.M).d(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.M).h(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.M).m(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.M).s(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.M).ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss().setLevel(LEVEL.M).d(onceNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.M).h(onceNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.M).m(onceNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.M).s(onceNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.M).ms(onceNum()), NaN);
});

test("rebase day", (t) => {
    t.is(new dtss("d").y(twiNum()), twiNum() * 365);
    t.is(new dtss("d").M(twiNum()), twiNum() * 30);
    t.is(new dtss("d").d(twiNum()), twiNum());
    t.not(new dtss("d").h(twiNum()), twiNum());
    t.not(new dtss("d").m(twiNum()), twiNum());
    t.not(new dtss("d").s(twiNum()), twiNum());
    t.not(new dtss("d").ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss("d").h(onceNum()), NaN);
    t.not(new dtss("d").m(onceNum()), NaN);
    t.not(new dtss("d").s(onceNum()), NaN);
    t.not(new dtss("d").ms(onceNum()), NaN);

    t.is(new dtss().setLevel(LEVEL.d).y(twiNum()), twiNum() * 365);
    t.is(new dtss().setLevel(LEVEL.d).M(twiNum()), twiNum() * 30);
    t.is(new dtss().setLevel(LEVEL.d).d(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.d).h(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.d).m(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.d).s(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.d).ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss().setLevel(LEVEL.d).h(onceNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.d).m(onceNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.d).s(onceNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.d).ms(onceNum()), NaN);
});

test("rebase hour", (t) => {
    t.is(new dtss("h").y(twiNum()), twiNum() * 365 * 24);
    t.is(new dtss("h").M(twiNum()), twiNum() * 30 * 24);
    t.is(new dtss("h").d(twiNum()), twiNum() * 24);
    t.is(new dtss("h").h(twiNum()), twiNum());
    t.not(new dtss("h").m(twiNum()), twiNum());
    t.not(new dtss("h").s(twiNum()), twiNum());
    t.not(new dtss("h").ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss("h").m(onceNum()), NaN);
    t.not(new dtss("h").s(onceNum()), NaN);
    t.not(new dtss("h").ms(onceNum()), NaN);

    t.is(new dtss().setLevel(LEVEL.h).y(twiNum()), twiNum() * 365 * 24);
    t.is(new dtss().setLevel(LEVEL.h).M(twiNum()), twiNum() * 30 * 24);
    t.is(new dtss().setLevel(LEVEL.h).d(twiNum()), twiNum() * 24);
    t.is(new dtss().setLevel(LEVEL.h).h(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.h).m(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.h).s(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.h).ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss().setLevel(LEVEL.h).m(onceNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.h).s(onceNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.h).ms(onceNum()), NaN);
});

test("rebase mintue", (t) => {
    t.is(new dtss("m").y(twiNum()), twiNum() * 365 * 24 * 60);
    t.is(new dtss("m").M(twiNum()), twiNum() * 30 * 24 * 60);
    t.is(new dtss("m").d(twiNum()), twiNum() * 24 * 60);
    t.is(new dtss("m").h(twiNum()), twiNum() * 60);
    t.is(new dtss("m").m(twiNum()), twiNum());
    t.not(new dtss("m").s(twiNum()), twiNum());
    t.not(new dtss("m").ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss("m").s(onceNum()), NaN);
    t.not(new dtss("m").ms(onceNum()), NaN);

    t.is(new dtss().setLevel(LEVEL.m).y(twiNum()), twiNum() * 365 * 24 * 60);
    t.is(new dtss().setLevel(LEVEL.m).M(twiNum()), twiNum() * 30 * 24 * 60);
    t.is(new dtss().setLevel(LEVEL.m).d(twiNum()), twiNum() * 24 * 60);
    t.is(new dtss().setLevel(LEVEL.m).h(twiNum()), twiNum() * 60);
    t.is(new dtss().setLevel(LEVEL.m).m(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.m).s(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.m).ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss().setLevel(LEVEL.m).s(onceNum()), NaN);
    t.not(new dtss().setLevel(LEVEL.m).ms(onceNum()), NaN);
});

test("rebase second", (t) => {
    t.is(new dtss("s").y(twiNum()), twiNum() * 365 * 24 * 60 * 60);
    t.is(new dtss("s").M(twiNum()), twiNum() * 30 * 24 * 60 * 60);
    t.is(new dtss("s").d(twiNum()), twiNum() * 24 * 60 * 60);
    t.is(new dtss("s").h(twiNum()), twiNum() * 60 * 60);
    t.is(new dtss("s").m(twiNum()), twiNum() * 60);
    t.is(new dtss("s").s(twiNum()), twiNum());
    t.not(new dtss("s").ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss("s").ms(onceNum()), NaN);

    t.is(
        new dtss().setLevel(LEVEL.s).y(twiNum()),
        twiNum() * 365 * 24 * 60 * 60
    );
    t.is(
        new dtss().setLevel(LEVEL.s).M(twiNum()),
        twiNum() * 30 * 24 * 60 * 60
    );
    t.is(new dtss().setLevel(LEVEL.s).d(twiNum()), twiNum() * 24 * 60 * 60);
    t.is(new dtss().setLevel(LEVEL.s).h(twiNum()), twiNum() * 60 * 60);
    t.is(new dtss().setLevel(LEVEL.s).m(twiNum()), twiNum() * 60);
    t.is(new dtss().setLevel(LEVEL.s).s(twiNum()), twiNum());
    t.not(new dtss().setLevel(LEVEL.s).ms(twiNum()), twiNum());
    // Old Api
    t.not(new dtss().setLevel(LEVEL.s).ms(onceNum()), NaN);
});

test("rebase ms", (t) => {
    t.is(new dtss("ms").y(twiNum()), twiNum() * 365 * 24 * 60 * 60 * 1000);
    t.is(new dtss("ms").M(twiNum()), twiNum() * 30 * 24 * 60 * 60 * 1000);
    t.is(new dtss("ms").d(twiNum()), twiNum() * 24 * 60 * 60 * 1000);
    t.is(new dtss("ms").h(twiNum()), twiNum() * 60 * 60 * 1000);
    t.is(new dtss("ms").m(twiNum()), twiNum() * 60 * 1000);
    t.is(new dtss("ms").s(twiNum()), twiNum() * 1000);
    t.is(new dtss("ms").ms(twiNum()), twiNum());

    t.is(
        new dtss().setLevel(LEVEL.ms).y(twiNum()),
        twiNum() * 365 * 24 * 60 * 60 * 1000
    );
    t.is(
        new dtss().setLevel(LEVEL.ms).M(twiNum()),
        twiNum() * 30 * 24 * 60 * 60 * 1000
    );
    t.is(
        new dtss().setLevel(LEVEL.ms).d(twiNum()),
        twiNum() * 24 * 60 * 60 * 1000
    );
    t.is(new dtss().setLevel(LEVEL.ms).h(twiNum()), twiNum() * 60 * 60 * 1000);
    t.is(new dtss().setLevel(LEVEL.ms).m(twiNum()), twiNum() * 60 * 1000);
    t.is(new dtss().setLevel(LEVEL.ms).s(twiNum()), twiNum() * 1000);
    t.is(new dtss().setLevel(LEVEL.ms).ms(twiNum()), twiNum());
});
