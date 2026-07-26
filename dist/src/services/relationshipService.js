"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeRelationship = analyzeRelationship;
const relationship_1 = require("../utils/relationship");
function analyzeRelationship(yongsin) {
    return {
        relationship: (0, relationship_1.getRelationship)(yongsin)
    };
}
