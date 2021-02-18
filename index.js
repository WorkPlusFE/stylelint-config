module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],

  // 在这里定义你的规则风格，定义规则请为规则提供注释说明
  rules: {
    // 最多嵌套2层
    'max-nesting-depth': 2,
  },
};
