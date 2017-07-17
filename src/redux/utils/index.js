import Immutable from 'Immutable';

export const switchCases = cases => defaultCase => key => (
  cases.has(key) ? cases.get(key) : defaultCase
)

export const fromJsMiddleWare = store => next => action => {
  let newAction = {...action};

  Object.keys(newAction).each((value) => {
    newAction[value] = (newAction[value] instanceof Array || newAction[value] instanceof Object)
      ? Immutable.fromJs(value)
      : value;
  });

  const newState = next(newAction);

  return Immutable.toJs(newState);
}