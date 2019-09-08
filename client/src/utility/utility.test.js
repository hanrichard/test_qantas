import { pageShownNum, pageRangeDisplayed, currentPages, nextPages, totalNumber } from "./utility";
const activePage = 1;
const array = [
    {},
    {},
    {}
];

describe('utlity component', () => {
  it('should render correct numbers', () => {
    expect(pageShownNum).toBe(25);
    expect(pageRangeDisplayed).toBe(5);
    expect(currentPages(activePage)).toBe(25);
    expect(nextPages(activePage)).toBe(50);
    expect(totalNumber(array)).toBe(3);
  });
});
