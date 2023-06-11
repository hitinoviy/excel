export function capitalize(sting) {
  if (typeof sting !== 'string') {
    return '';
  }
  return sting.charAt(0).toUpperCase() + sting.slice(1);
}
export function range(start, end) {
  if (start > end ) {
    [end, start] = [start, end];
  }
  return new Array(end - start + 1)
      .fill('')
      .map((_, index) => start + index);
}
