export const pageShownNum = 25;
export const pageRangeDisplayed = 5;
export const currentPages = (activePage) => {
    return activePage * pageShownNum
};
export const nextPages = (activePage) => {
    return currentPages(activePage) + pageShownNum
};
export const totalNumber = data => {
    return data.length
};