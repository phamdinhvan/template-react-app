export const isNumberConvertable = (value: string | undefined): boolean => {
  if (value === undefined) return false;
  if (value === "") return true;
  if (!isNaN(parseFloat(value))) return true;
  return false;
};

export function upToThreeDigits(value: number) {
  return (value * 1000) % 1 === 0;
}
