export function capitalize(sting) {
  if (typeof sting !== 'string') {
    return '';
  }
  return sting.charAt(0).toUpperCase() + sting.slice(1);
}
