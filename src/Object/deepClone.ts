import isArray from '../Array/isArray';

const deepClone = <T>(origin: T, target?: Record<string, unknown> | T): T => {
  const tar = target || {};

  for (const key in origin) {
    if (Object.prototype.hasOwnProperty.call(origin, key)) {
      if (typeof origin[key] === 'object' && origin[key] !== null) {
        tar[key] = isArray(origin[key]) ? [] : {};
        deepClone(origin[key], tar[key]);
      } else {
        tar[key] = origin[key];
      }
    }
  }

  return <T>tar;
};

export default deepClone;
