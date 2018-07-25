// A custom Nightwatch assertion.
// The assertion name is the filename.
// Example usage:
//
//   browser.assert.elementCount(selector, count)
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide#writing-custom-assertions
import { NightwatchAssertion } from 'nightwatch';

export const assertion = function (this: NightwatchAssertion, selector: string, expectedCount: number) {
    this.message = `Testing if element <${selector}> has count: ${expectedCount}`;
    this.expected = () => expectedCount;
    this.pass = (val: number) => {
        return val === expectedCount
    };
    this.value = (res: any) => {
        return res.value
    };
    this.command = function (cb: any) {
        const self = this;
        if (this.api) {
            return this.api.execute((selector: string) => {
                return document.querySelectorAll(selector).length
            }, [selector], (res: any) => {
                cb.call(self, res)
            })
        }
    }
};
