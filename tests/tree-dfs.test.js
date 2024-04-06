const test = require("node:test");
const assert = require("node:assert");
const se = require("../index.js");

const tree = {
    id: 1,
    kind: "root",
    children: [
        {
            id: 2,

            kind: "node",
            children: [
                {
                    id: 3,
                    kind: "leaf",
                    children: [],
                },
            ],
        },
        {
            id: 4,
            kind: "leaf",
            children: [],
        },
    ],
};

test("visit all nodes and execute a function in the leaves", (t) => {
    const expected = [3, 4];
    const leavesIds = [];

    const isLeaf = (node) => {
        return node.kind === "leaf";
    };

    const callback = (node) => {
        if(isLeaf(node)) leavesIds.push(node.id);
    };

    se.visitLeaves(tree, callback);

    expected.every((v) => assert.equal(leavesIds.includes(v), true));
});

test("visit all node once", (t) => {
    let times = 0

    const callback = (node) => {
        times = times + 1
    };

    se.visitLeaves(tree, callback);

    assert.equal(times, 4)
});
