module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind', 'layer'],
      },
    ],
    'block-no-empty': null,
    'unit-whitelist': ['em', 'rem', 's', 'px', 'vw', 'vh', '%'],
  },
}
