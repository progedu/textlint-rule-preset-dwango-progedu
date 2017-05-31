"use strict";
var path = require("path");
module.exports = {
  "rules": {
    "max-ten": require("textlint-rule-max-ten"),
    "prh": require("textlint-rule-prh")
  },
  "rulesConfig": {
    // https://github.com/azu/textlint-rule-max-ten
    // 一文で使える"、"の数
    "max-ten": {
      "max": 6
    },
    // https://github.com/azu/textlint-rule-prh
    // 辞書を使った校閲をする。ドワンゴ標準の辞書を与える。
    "prh": {
      "rulePaths": [ path.resolve(__dirname) + "/term_rule.yaml" ]
    }
  }
};
