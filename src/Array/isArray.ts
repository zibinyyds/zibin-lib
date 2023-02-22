const isArray = (origin: unknown): boolean => {
  const str = '[object Array]';
  return Object.prototype.toString.call(origin) == str ? true : false;
};

export default isArray;
