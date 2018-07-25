import { NightwatchBrowser } from 'nightwatch';
import { signIn } from '../../helpers/authUser';
import { MOBILE, DESKTOP } from '../../helpers/constants';

export default {
    before: signIn,
    after: (browser: NightwatchBrowser, done: () => void) => {
        browser.end(() => { done(); });
    },
    'masthead should render w3 standard masthead': function (browser: NightwatchBrowser) {
        // automatically uses dev Server port from /config.index.js
        // default: https://localhost:8080
        // see nightwatch.conf.js
        const devServer: string = browser.globals.devServerURL;

        browser
            .url(devServer)
            .waitForElementVisible('.masthead')
            .assert.elementPresent('#ds-w3-injectable-nav')
            .assert.containsText('h4', 'w3 Broadcast')
            .click('a#ds-w3-injectable-nav')
            .waitForElementVisible('#w3-masthead-search-input')
            .assert.elementPresent('h2.heading-2.mast-align-text-center')
    },

    'masthead should render title and nav links': function (browser: NightwatchBrowser) {
        const devServer: string = browser.globals.devServerURL;
        browser
            .url(devServer)
            .waitForElementVisible('.masthead')
            .assert.containsText('h4', 'w3 Broadcast')
            .assert.elementCount('.masthead nav a', 3)
    },

    'masthead should render hamburger menu with links': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;
        browser
            .resizeWindow(MOBILE.width, MOBILE.height)
            .url(devServer)
            .waitForElementVisible('button.expand-menu')
            .click('button.expand-menu')
            .waitForElementVisible('.hamburger-menu')
            .assert.containsText('h4', 'w3 Broadcast')
            .assert.elementCount('.hamburger-menu nav a', 3)
            .assert.elementCount('.hamburger-menu .navigation-buttons-container button', 4)
            .execute(() => {
                // standard click fail, probably because of animation
                (<HTMLElement>document.querySelector('.hamburger-menu .close-button button')).click();
            })
            .waitForElementNotPresent('.hamburger-menu')
            .assert.elementCount('.hamburger-menu', 0)
            .resizeWindow(DESKTOP.width, DESKTOP.height)
    },

    'tabs should redirect to linked pages': function (browser: NightwatchBrowser) {
        const devServer: string = `${ browser.globals.devServerURL }/#/create-headline`;
        browser
            .url(`${ devServer }`)
            .waitForElementVisible('.ds-tab-controls')
            .assert.cssClassPresent('.ds-tab-controls .ds-button', 'ds-selected')
            .assert.containsText('.ds-tab-controls .ds-button', 'OVERVIEW')
            .click('.ds-tab-controls .ds-button:nth-child(2)')
            .waitForElementVisible('.ds-tab-controls')
            .assert.cssClassPresent('.ds-tab-controls .ds-button:nth-child(2)', 'ds-selected')
            .assert.containsText('.ds-tab-controls .ds-button:nth-child(2)', 'HEADLINE')
            .assert.urlEquals(`${ devServer }/details`)
            .click('.ds-tab-controls .ds-button:nth-child(4)')
            .waitForElementVisible('.ds-tab-controls')
            .assert.cssClassPresent('.ds-tab-controls .ds-button:nth-child(4)', 'ds-selected')
            .assert.containsText('.ds-tab-controls .ds-button:nth-child(4)', 'AUDIENCE')
            .assert.urlEquals(`${ devServer }/audience`)
    },

    'headline page should render button to toggle headline id and copy button': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;
        browser
            .url(`${devServer}/#/headlines`)
            .waitForElementVisible('table > tbody > tr:nth-child(2) > td.headline-Id-cell > a')
            .click('table > tbody > tr:nth-child(2) > td.headline-Id-cell > a')
            .waitForElementVisible('button.toggle-id')
            .assert.elementPresent('button.copy-id')
            .waitForElementNotVisible('#headline-id')
            .assert.elementPresent('#headline-id')
            .click('button.toggle-id')
            .waitForElementVisible('#headline-id')
            .click('button.toggle-id')
            .waitForElementNotVisible('#headline-id')
    },

    'footer should render logo and links': function (browser: NightwatchBrowser) {
        const devServer: string = browser.globals.devServerURL;
        browser
            .url(devServer)
            .waitForElementVisible('footer')
            .assert.elementCount('a.link-text', 4)
            .assert.elementPresent('img.ibm-logo')
    },

    'links should open new tabs': function (browser: NightwatchBrowser) {
        const devServer: string = browser.globals.devServerURL;
        browser
            .url(devServer)
            .waitForElementVisible('.footer-links')
            .useXpath()
            .assert.attributeEquals("//a[text()='Terms of Use']", 'href', 'http://w3.ibm.com/w3/info_terms_of_use.html')
            .assert.attributeEquals("//a[text()='Terms of Use']", 'target', '_blank')
            .assert.attributeEquals("//a[text()='Privacy Policy']", 'href', 'https://w3.ibm.com/w3-privacy-notice')
            .assert.attributeEquals("//a[text()='Privacy Policy']", 'target', '_blank')
            .assert.attributeEquals("//a[text()='Feedback']", 'href', 'http://w3.ibm.com/feedback/')
            .assert.attributeEquals("//a[text()='Feedback']", 'target', '_blank')
            .assert.attributeEquals("//a[text()='w3 Accessibility']", 'href', 'https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wf49a0f070e65_41de_bb0a_ff81f7eb3319/page/yourIBM%20Accessibility%20Features')
            .assert.attributeEquals("//a[text()='w3 Accessibility']", 'target', '_blank')
    },

    'headlinesLandingPage should render button to create new headline': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;
        browser
            .url(`${devServer}/#/headlines`)
            .useCss()
            .waitForElementVisible('a.create-headline-btn')
            .assert.elementPresent('a.create-headline-btn')
            .click('a.create-headline-btn')
            .waitForElementVisible('.ds-tabs.headline-tabs')
            .assert.elementPresent('.ds-tabs.headline-tabs')
            .assert.urlEquals(`${ devServer }/#/create-headline`)
    },

    'title click of headline in MyHeadlinesTab should redirect to headline details': (browser: NightwatchBrowser) => {
        const devServer: string = browser.globals.devServerURL;
        browser
            .url(`${devServer}/#/headlines`)
            .waitForElementVisible('.table-component__table__body')
            .assert.elementPresent('td.headline-Id-cell')
            .waitForElementVisible('table > tbody > tr:nth-child(2) > td.headline-Id-cell > a')
            .click('table > tbody > tr:nth-child(2) > td.headline-Id-cell > a')
            .waitForElementVisible('button.toggle-id')
            .assert.urlContains(`${ devServer }/#/headline-details`)
    },
};
