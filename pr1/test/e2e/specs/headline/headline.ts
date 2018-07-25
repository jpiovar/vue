import { NightwatchBrowser } from 'nightwatch';
import { signIn } from '../../helpers/authUser';

export default {
    before: signIn,
    after: (browser: NightwatchBrowser, done: () => void) => {
        browser.end(() => { done(); });
    },
    'create headline should render form with correct fields': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;

        browser
            .url(`${devServer}/#/create-headline`)
            .waitForElementVisible('.headline-tabs')
            .click('.ds-icon-calendar')
            .waitForElementVisible('.vdp-datepicker__calendar')
            .assert.elementCount('#rating option', 5)
            .assert.elementCount('#pinned option', 11)
    },
    'create headline should not render headline id': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;

        browser
            .url(`${devServer}/#/create-headline`)
            .waitForElementVisible('.headline-tabs')
            .assert.elementCount('.headline-id-container', 0)
    },
    'create headline details should render one lang, contentType by default ': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;

        browser
            .url(`${devServer}/#/create-headline`)
            .waitForElementVisible('.headline-tabs')
            .click('#details')
            .assert.urlContains('/create-headline/details')
            .assert.elementCount('.content-type-container', 1)
            .assert.elementCount('.details-container', 1)
            .waitForElementVisible('button.add-content-url')
            .assert.elementCount('#locale-0 option', 2)
    },
    'show list of actions for headline': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;

        browser
            .url(`${devServer}/#/create-headline`)
            .waitForElementVisible('select#action')
            .click('select#action')
            .waitForElementVisible('select#action option')
            .assert.elementCount('select#action option', 4);
    },
    'should create new headline': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;

        browser
            .url(`${devServer}/#/create-headline`)
            .waitForElementVisible('.action-btn')
            .click('#headline-ref')
            .clearValue('#headline-ref')
            .setValue('#headline-ref', 'test headline')
            .waitForElementVisible('.action-btn')
            .click('.action-btn')
            .waitForElementPresent('.action-banner')
            .assert.urlContains('/headline-details')
    },
    'render success banner once new headline draft is saved': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;

        browser
            .url(`${devServer}/#/create-headline`)
            .waitForElementVisible('.action-btn')
            .click('#headline-ref')
            .clearValue('#headline-ref')
            .setValue('#headline-ref', 'test headline')
            .click('.action-btn')
            .waitForElementPresent('.action-banner')
            .assert.cssClassPresent('.action-banner', 'ds-success')
    },
    'render success banner once headline draft modified and saved': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;

        browser
            .url(`${devServer}/#/headlines`)
            .waitForElementVisible('table > tbody > tr:nth-child(2) > td.headline-Id-cell > a')
            .click('table > tbody > tr:nth-child(2) > td.headline-Id-cell > a')
            .waitForElementVisible('#headline-ref')
            .click('#headline-ref')
            .clearValue('#headline-ref')
            .setValue('#headline-ref', 'test headline')
            .waitForElementVisible('.action-btn')
            .click('.action-btn')
            .waitForElementPresent('.action-banner')
            .assert.cssClassPresent('.action-banner', 'ds-success')
    },
    'success banner should clear after 5 seconds': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;

        browser
            .url(`${devServer}/#/headlines`)
            .waitForElementVisible('table > tbody > tr:nth-child(2) > td.headline-Id-cell > a')
            .click('table > tbody > tr:nth-child(2) > td.headline-Id-cell > a')
            .waitForElementVisible('#headline-ref')
            .click('#headline-ref')
            .clearValue('#headline-ref')
            .setValue('#headline-ref', 'test headline')
            .click('.action-btn')
            .waitForElementPresent('.action-banner')
            .pause(5001)
            .assert.elementNotPresent('.action-banner')
    },
    'success banner should be dismissable': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;

        browser
            .url(`${devServer}/#/headlines`)
            .waitForElementVisible('table > tbody > tr:nth-child(2) > td.headline-Id-cell > a')
            .click('table > tbody > tr:nth-child(2) > td.headline-Id-cell > a')
            .waitForElementVisible('#headline-ref')
            .click('#headline-ref')
            .clearValue('#headline-ref')
            .setValue('#headline-ref', 'test headline')
            .click('.action-btn')
            .waitForElementVisible('.action-banner > button')
            .click('.action-banner > button')
            .waitForElementNotPresent('.action-banner')
            .assert.elementNotPresent('.action-banner')
    },
    'set translation title same as headline ref name': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;

        browser
            .url(`${devServer}/#/create-headline`)
            .setValue('#headline-ref', 'test headline')
            .click('#details')
            .waitForElementVisible('#title-0')
            .assert.value('#title-0', 'test headline')
    }
};
