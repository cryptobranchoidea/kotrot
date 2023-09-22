type TBreakpoint = 'sm' | 'md' | 'lg' | 'xl';

type TValue = string | number;

export type TBpParams<T extends TValue> = Partial<Omit<Record<TBreakpoint, T>, 'sm'>> & { sm: T };

export const bp = <T extends TValue>(breakpoint: TBpParams<T>): T[] => {
  const { lg, md, sm, xl } = breakpoint;
  const breakpoints = [sm, md, lg, xl].reduce<T[]>(
    (previous, current, idx) => [...previous, typeof current !== 'undefined' ? current : previous[idx - 1]],
    [],
  );
  return breakpoints;
};
