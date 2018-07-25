import { NightwatchBrowser } from 'nightwatch';
import { signIn } from '../../helpers/authUser';
import { MOBILE, DESKTOP } from '../../helpers/constants';

export default {
    before: signIn,
    after: (browser: NightwatchBrowser, done: () => void) => {
        browser.end(() => { done(); });
    },

    'dropdown component should contain an input field with erasing button': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;
        browser
            .url(`${devServer}/#/create-headline/channel`)
            .waitForElementVisible('.ds-select')
            .assert.elementPresent('#channelInput')
            .assert.valueContains('#channelInput', '')
            .click('button.ds-icon-caret-down-fill')
            .waitForElementVisible('.list-container ul')
            .click('.list-container ul li:nth-child(5)')
            .waitForElementVisible('button.icon-btn')
            .assert.valueContains('#channelInput', 'Watson')
            .click('button.icon-btn')
            .assert.valueContains('#channelInput', '')
            .click('h3');
    },

    'Channel page should contain dropdown which open and closes': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;
        browser
            .url(`${devServer}/#/create-headline/channel`)
            .waitForElementVisible('.ds-select')
            .assert.elementPresent('#channelInput')
            .assert.valueContains('#channelInput', '')
            .assert.elementPresent('button.ds-icon-caret-down-fill')
            .click('button.ds-icon-caret-down-fill')
            .waitForElementVisible('.list-container ul')
            .assert.elementNotPresent('button.ds-icon-caret-down-fill')
            .click('h3')
            .waitForElementNotVisible('.list-container ul');
    },

    'Channel input should filter then add selection to a table': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;
        browser
            .url(`${devServer}/#/create-headline/channel`)
            .waitForElementVisible('.ds-select')
            .assert.elementPresent('#channelInput')
            .assert.valueContains('#channelInput', '');
        browser
            .setValue('#channelInput', 'busine')
            .waitForElementVisible('.list-container ul')
            .assert.containsText('.list-container ul li:nth-child(1)', 'Global ')
            .click('.list-container ul li:nth-child(1)')
            .assert.valueContains('#channelInput', 'Global Business Services')
            .assert.elementNotPresent('.ds-table')
            .assert.elementPresent('.add-channel')
            .assert.cssClassNotPresent('.add-channel', '.ds-disable')
            .click('.add-channel')
            .assert.elementPresent('.ds-table')
            .assert.elementPresent('tbody tr td')
            .assert.containsText('tbody tr td', 'Global Business Services')
            .click('#channelInput')
            .assert.valueContains('#channelInput', '')
            .waitForElementVisible('.cls-button')
            .click('.cls-button');
    },

    'Channel add/remove items from list to a table': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;
        browser
            .url(`${devServer}/#/create-headline/channel`)
            .waitForElementVisible('.ds-select')
            .assert.elementPresent('#channelInput')
            .assert.valueContains('#channelInput', '')
            .click('#channelInput')
            .assert.elementNotPresent('button.ds-icon-caret-down-fill')
            .assert.elementPresent('.list-container ul')
            .assert.elementCount('.list-container ul li', 9)
            .waitForElementVisible('.list-container ul li:nth-child(1)')
            .assert.containsText('.list-container ul li:first-child', 'Global Business Services')
            .click('.list-container ul li:nth-child(2)')
            .assert.valueContains('#channelInput', 'IBM Cloud Platform')
            .assert.elementPresent('.add-channel')
            .click('.add-channel')
            .assert.elementPresent('.ds-table')
            .assert.elementPresent('tbody tr td')
            .assert.containsText('tbody tr:nth-child(1) td', 'IBM Cloud Platform')
            .click('#channelInput')
            .assert.elementPresent('.list-container ul')
            .assert.containsText('.list-container ul li:nth-child(1)', '')
            .assert.elementCount('.list-container ul li', 8)
            .click('h3')
            .assert.elementPresent('.ds-icon-close')
            .click('.ds-icon-close')
            .assert.elementNotPresent('tbody tr:nth-child(2)')
            .click('#channelInput')
            .assert.elementCount('.list-container ul li', 9);
    }
};
