import { getKey } from './authenticationToken';
import { NightwatchBrowser } from 'nightwatch';
import { testUserID } from './testUsers/testUser';

export const signIn = (browser: NightwatchBrowser, done: () => void): void => {
    const devServer: string = browser.globals.devServerURL;
    browser
        .url(devServer)
        .waitForElementPresent('h1', 5000)
        .setValue('input[name=username]', testUserID.login)
        .setValue('input[name=password]', testUserID.password)
        .click('#btn_signin')
        .pause(3000)
        .element('css selector', '#gaOTP', function(result){
            if(result.status != -1){
                console.log('Google auth is visible');
                browser
                    .click('#gaOTP')
                    .pause(1000)
                    .waitForElementVisible('#otppswd')
                    .setValue('#otppswd', getKey(testUserID.secret))
                    .click('#btn_submit')
            } else{
                console.log('Should be authenticated');
            }
        })
        .perform(() => { done(); })
};
