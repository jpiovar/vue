import * as NW from 'nightwatch';

// merge interfaces with nightwatch types
declare module 'nightwatch' {
    export interface NightwatchCustomAssertions {
        elementCount(selector: string, expectedCount: number): NW.NightwatchBrowser;
    }
}
