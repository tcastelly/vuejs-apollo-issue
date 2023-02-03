import { describe, expect, it } from 'vitest';
import getSizeStr from '@/_base/beautifierFileSize';

describe('GIVEN `beautifierFileSize`', () => {
  ([
    [1_000, '1000 B'],
    [10_000, '9.77 KB'],
    [100_000, '97.66 KB'],
    [1_000_000, '976.56 KB'],
    [5_000_000, '4.77 MB'],
  ] as const).forEach(([v, shouldBe]) => {
    describe(`WHEN beautified ${v} bits`, () => {
      it('THEN it should display $', () => {
        expect(getSizeStr(v)).toBe(shouldBe);
      });
    });
  });
});
