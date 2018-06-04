import time, { test } from "ava";
import { dtss, LEVEL } from "../lib";

const onceNum = () => {
    return parseInt(Math.random() * 1000 + "", 10);
};

const twiNum = (() => {
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

test("rebase year", (t) => {
    t.is(new dtss(LEVEL.y).y(twiNum()), twiNum());
    t.is(new dtss(LEVEL.y).M(onceNum()), NaN);
    t.is(new dtss(LEVEL.y).d(onceNum()), NaN);
    t.is(new dtss(LEVEL.y).h(onceNum()), NaN);
    t.is(new dtss(LEVEL.y).m(onceNum()), NaN);
    t.is(new dtss(LEVEL.y).s(onceNum()), NaN);
    t.is(new dtss(LEVEL.y).ss(onceNum()), NaN);

    t.is(new dtss().setLevel(LEVEL.y).y(twiNum()), twiNum());
    t.is(new dtss().setLevel(LEVEL.y).M(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.y).d(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.y).h(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.y).m(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.y).s(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.y).ss(onceNum()), NaN);
});

test("rebase mouth", (t) => {
    t.is(new dtss(LEVEL.M).y(twiNum()), twiNum() * 12);
    t.is(new dtss(LEVEL.M).M(twiNum()), twiNum());
    t.is(new dtss(LEVEL.M).d(onceNum()), NaN);
    t.is(new dtss(LEVEL.M).h(onceNum()), NaN);
    t.is(new dtss(LEVEL.M).m(onceNum()), NaN);
    t.is(new dtss(LEVEL.M).s(onceNum()), NaN);
    t.is(new dtss(LEVEL.M).ss(onceNum()), NaN);

    t.is(new dtss().setLevel(LEVEL.M).y(twiNum()), twiNum() * 12);
    t.is(new dtss().setLevel(LEVEL.M).M(twiNum()), twiNum());
    t.is(new dtss().setLevel(LEVEL.M).d(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.M).h(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.M).m(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.M).s(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.M).ss(onceNum()), NaN);
});

test("rebase day", (t) => {
    t.is(new dtss(LEVEL.d).y(twiNum()), twiNum() * 365);
    t.is(new dtss(LEVEL.d).M(twiNum()), twiNum() * 30);
    t.is(new dtss(LEVEL.d).d(twiNum()), twiNum());
    t.is(new dtss(LEVEL.d).h(onceNum()), NaN);
    t.is(new dtss(LEVEL.d).m(onceNum()), NaN);
    t.is(new dtss(LEVEL.d).s(onceNum()), NaN);
    t.is(new dtss(LEVEL.d).ss(onceNum()), NaN);

    t.is(new dtss().setLevel(LEVEL.d).y(twiNum()), twiNum() * 365);
    t.is(new dtss().setLevel(LEVEL.d).M(twiNum()), twiNum() * 30);
    t.is(new dtss().setLevel(LEVEL.d).d(twiNum()), twiNum());
    t.is(new dtss().setLevel(LEVEL.d).h(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.d).m(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.d).s(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.d).ss(onceNum()), NaN);
});

test("rebase hour", (t) => {
    t.is(new dtss(LEVEL.h).y(twiNum()), twiNum() * 365 * 24);
    t.is(new dtss(LEVEL.h).M(twiNum()), twiNum() * 30 * 24);
    t.is(new dtss(LEVEL.h).d(twiNum()), twiNum() * 24);
    t.is(new dtss(LEVEL.h).h(twiNum()), twiNum());
    t.is(new dtss(LEVEL.h).m(onceNum()), NaN);
    t.is(new dtss(LEVEL.h).s(onceNum()), NaN);
    t.is(new dtss(LEVEL.h).ss(onceNum()), NaN);

    t.is(new dtss().setLevel(LEVEL.h).y(twiNum()), twiNum() * 365 * 24);
    t.is(new dtss().setLevel(LEVEL.h).M(twiNum()), twiNum() * 30 * 24);
    t.is(new dtss().setLevel(LEVEL.h).d(twiNum()), twiNum() * 24);
    t.is(new dtss().setLevel(LEVEL.h).h(twiNum()), twiNum());
    t.is(new dtss().setLevel(LEVEL.h).m(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.h).s(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.h).ss(onceNum()), NaN);
});

test("rebase mintue", (t) => {
    t.is(new dtss(LEVEL.m).y(twiNum()), twiNum() * 365 * 24 * 60);
    t.is(new dtss(LEVEL.m).M(twiNum()), twiNum() * 30 * 24 * 60);
    t.is(new dtss(LEVEL.m).d(twiNum()), twiNum() * 24 * 60);
    t.is(new dtss(LEVEL.m).h(twiNum()), twiNum() * 60);
    t.is(new dtss(LEVEL.m).m(twiNum()), twiNum());
    t.is(new dtss(LEVEL.m).s(onceNum()), NaN);
    t.is(new dtss(LEVEL.m).ss(onceNum()), NaN);

    t.is(new dtss().setLevel(LEVEL.m).y(twiNum()), twiNum() * 365 * 24 * 60);
    t.is(new dtss().setLevel(LEVEL.m).M(twiNum()), twiNum() * 30 * 24 * 60);
    t.is(new dtss().setLevel(LEVEL.m).d(twiNum()), twiNum() * 24 * 60);
    t.is(new dtss().setLevel(LEVEL.m).h(twiNum()), twiNum() * 60);
    t.is(new dtss().setLevel(LEVEL.m).m(twiNum()), twiNum());
    t.is(new dtss().setLevel(LEVEL.m).s(onceNum()), NaN);
    t.is(new dtss().setLevel(LEVEL.m).ss(onceNum()), NaN);
});

test("rebase second", (t) => {
    t.is(new dtss(LEVEL.s).y(twiNum()), twiNum() * 365 * 24 * 60 * 60);
    t.is(new dtss(LEVEL.s).M(twiNum()), twiNum() * 30 * 24 * 60 * 60);
    t.is(new dtss(LEVEL.s).d(twiNum()), twiNum() * 24 * 60 * 60);
    t.is(new dtss(LEVEL.s).h(twiNum()), twiNum() * 60 * 60);
    t.is(new dtss(LEVEL.s).m(twiNum()), twiNum() * 60);
    t.is(new dtss(LEVEL.s).s(twiNum()), twiNum());
    t.is(new dtss(LEVEL.s).ss(onceNum()), NaN);

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
    t.is(new dtss().setLevel(LEVEL.s).ss(onceNum()), NaN);
});

test("rebase ss", (t) => {
    t.is(new dtss(LEVEL.ss).y(twiNum()), twiNum() * 365 * 24 * 60 * 60 * 1000);
    t.is(new dtss(LEVEL.ss).M(twiNum()), twiNum() * 30 * 24 * 60 * 60 * 1000);
    t.is(new dtss(LEVEL.ss).d(twiNum()), twiNum() * 24 * 60 * 60 * 1000);
    t.is(new dtss(LEVEL.ss).h(twiNum()), twiNum() * 60 * 60 * 1000);
    t.is(new dtss(LEVEL.ss).m(twiNum()), twiNum() * 60 * 1000);
    t.is(new dtss(LEVEL.ss).s(twiNum()), twiNum() * 1000);
    t.is(new dtss(LEVEL.ss).ss(twiNum()), twiNum());

    t.is(
        new dtss().setLevel(LEVEL.ss).y(twiNum()),
        twiNum() * 365 * 24 * 60 * 60 * 1000
    );
    t.is(
        new dtss().setLevel(LEVEL.ss).M(twiNum()),
        twiNum() * 30 * 24 * 60 * 60 * 1000
    );
    t.is(
        new dtss().setLevel(LEVEL.ss).d(twiNum()),
        twiNum() * 24 * 60 * 60 * 1000
    );
    t.is(new dtss().setLevel(LEVEL.ss).h(twiNum()), twiNum() * 60 * 60 * 1000);
    t.is(new dtss().setLevel(LEVEL.ss).m(twiNum()), twiNum() * 60 * 1000);
    t.is(new dtss().setLevel(LEVEL.ss).s(twiNum()), twiNum() * 1000);
    t.is(new dtss().setLevel(LEVEL.ss).ss(twiNum()), twiNum());
});
