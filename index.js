module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],

  // 在这里定义你的规则风格，定义规则请为规则提供注释说明
  rules: {
    // 最多嵌套2层
    'max-nesting-depth': 2,
    // 不检查v-deep选择器(sass专有)
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};
