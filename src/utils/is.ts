export const is = (val: unknown, type: string) => {
	return toString.call(val) === `[object ${type}]`;
};
