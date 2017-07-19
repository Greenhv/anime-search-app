export const switchCases = cases => defaultCase => key => (
  key in cases ? cases[key] : defaultCase
)