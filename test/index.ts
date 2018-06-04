import time, { test } from "ava";
import { dtss, LEVEL } from "../lib";

test("Test ss", (t) => {
    t.is(new dtss().ss(1000), 1000);
    t.is(new dtss().ss(1), 1);
    t.is(new dtss().ss(0), 0);
    t.is(new dtss().ss(-1), -1);
});

test("Test second", (t) => {
    t.is(new dtss().s(3600), 3600 * 1000);
    t.is(new dtss().s(1), 1 * 1000);
    t.is(new dtss().s(0), 0);
    t.is(new dtss().s(-1), -1 * 1000);
});

test("Test mintue", (t) => {
    t.is(new dtss().m(1000), 1000 * 60 * 1000);
    t.is(new dtss().m(1), 1 * 60 * 1000);
    t.is(new dtss().m(0), 0);
    t.is(new dtss().m(-1), -1 * 60 * 1000);
});

test("Test hour", (t) => {
    t.is(new dtss().h(1000), 1000 * 60 * 60 * 1000);
    t.is(new dtss().h(1), 1 * 60 * 60 * 1000);
    t.is(new dtss().h(0), 0);
    t.is(new dtss().h(-1), -1 * 60 * 60 * 1000);
});

test("Test day", (t) => {
    t.is(new dtss().d(1000), 1000 * 24 * 60 * 60 * 1000);
    t.is(new dtss().d(1), 1 * 24 * 60 * 60 * 1000);
    t.is(new dtss().d(0), 0);
    t.is(new dtss().d(-1), -1 * 24 * 60 * 60 * 1000);
});

test("Test mouth", (t) => {
    t.is(new dtss().M(1000), 1000 * 30 * 24 * 60 * 60 * 1000);
    t.is(new dtss().M(1), 1 * 30 * 24 * 60 * 60 * 1000);
    t.is(new dtss().M(0), 0);
    t.is(new dtss().M(-1), -1 * 30 * 24 * 60 * 60 * 1000);
});

test("Test year", (t) => {
    t.is(new dtss().y(37), 37 * 365 * 24 * 60 * 60 * 1000);
    t.is(new dtss().y(1), 1 * 365 * 24 * 60 * 60 * 1000);
    t.is(new dtss().y(0), 0);
    t.is(new dtss().y(-1), -1 * 365 * 24 * 60 * 60 * 1000);
});

test("Get Level", (t) => {
    t.is(new dtss().getLevel(), LEVEL.ss);
    t.is(new dtss().setLevel(LEVEL.ss).getLevel(), LEVEL.ss);
    t.is(new dtss().setLevel(LEVEL.s).getLevel(), LEVEL.s);
    t.is(new dtss().setLevel(LEVEL.m).getLevel(), LEVEL.m);
    t.is(new dtss().setLevel(LEVEL.h).getLevel(), LEVEL.h);
    t.is(new dtss().setLevel(LEVEL.d).getLevel(), LEVEL.d);
    t.is(new dtss().setLevel(LEVEL.M).getLevel(), LEVEL.M);
    t.is(new dtss().setLevel(LEVEL.y).getLevel(), LEVEL.y);
});
