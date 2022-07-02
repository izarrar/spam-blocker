import appLandingPage from "../objects/appLandingPage";
import privacyPage from "../objects/privacyPage";
import permissionsPage from "../objects/permissionsPage"
import premiumPage from "../objects/premiumPage"
import homePage from "../objects/homePage"
import phoneNumberVerificationPage from "../objects/phoneNumberVerificationPage"
import keyboardPage from "../objects/keyboardPage"
import pinCodeVerificationPage from "../objects/pinCodeVerificationPage";
import completeYourProfilePage from "../objects/completeYourProfilePage"
import profileVerifiedPage from "../objects/profileVerifiedPage"

describe('WHO User On Boarding Workflow',function(){


    const expect = require('chai').expect;

    it('Verify that the user opens who spam blocker app & arrives at the on boarding screen',async function(){
        await browser.pause(10000);
        await permissionsPage.dialog_allow_btn.waitForDisplayed({timeout:10000})
        await permissionsPage.dialog_allow_btn.click()
        let isDisplayed = await appLandingPage.get_who_logo.isDisplayed();
        await expect(isDisplayed,"If user opens who spam blocker app & donot arrives at the on boarding screen").to.be.true
    });



    it('Verify that the "Get Started" button is being displayed at On Boarding screen',async function(){
       
        await appLandingPage.get_started_btn.waitForDisplayed({timeout:40000})
        let isDisplayed = await appLandingPage.get_started_btn.isDisplayed();
        await expect(isDisplayed,"\"Get Started\" button is not being displayed at On Boarding screen").to.be.true
    });



    it('Verify that the user taps on the "Get Started" button, your privacy is important to us page appears',async function(){
        await appLandingPage.get_started_btn.click()
        await browser.pause(2000);
        let isDisplayed = await privacyPage.get_privacy_page_heading.isDisplayed();
        await expect(isDisplayed,"If user taps on the \"Get Started\" button, your privacy is important to us page is not appearing").to.be.true
    });

    it('Verify that if user taps "AGREE & CONTINUE" button, permissions needed page appears',async function(){
        await privacyPage.agree_continue_btn.waitForDisplayed({timeout:2000})
        await privacyPage.agree_continue_btn.click()
        await browser.pause(2000);
        let isDisplayed = await permissionsPage.permission_needed_page_heading.isDisplayed();
        await expect(isDisplayed,"If user taps \"AGREE & CONTINUE\" button, permissions needed page is not appearing").to.be.true


    });

    it('Verify that if user taps "Continue" button, "Who" Would Like to Access Your Contacts dialog appears',async function(){
        await permissionsPage.continue_btn.waitForDisplayed({timeout:3000})
        await permissionsPage.continue_btn.click()
        await browser.pause(2000);
        let isDisplayed = await permissionsPage.conatcts_permission_dialog.isDisplayed();
        await expect(isDisplayed,"User taps \"Continue\" button, \"Who\" Would Like to Access Your Contacts dialog is not appearing").to.be.true


    });

    it('Verify that if user taps "OK" button on dialog, "Who" Would Like To Send You Notifications dialog appears',async function(){
        await permissionsPage.dialog_ok_btn.waitForDisplayed({timeout:2000})
        await permissionsPage.dialog_ok_btn.click()
        await browser.pause(2000);
        let isDisplayed = await permissionsPage.notification_permission_dialog.isDisplayed();
        await expect(isDisplayed,"If user taps \"OK\" button on dialog, \"Who\" Would Like To Send You Notifications dialog is not appearing").to.be.true


    });

    it('Verify that if user taps "Allow" button on dialog, Go Premium Page appears',async function(){
        await permissionsPage.dialog_allow_btn.waitForDisplayed({timeout:2000})
        await permissionsPage.dialog_allow_btn.click()
        try {
            await permissionsPage.agree_continue_btn.click()
          } catch (e) {}
          await browser.pause(2000);
          let isDisplayed = await premiumPage.get_premium_page_heading.isDisplayed();
          await expect(isDisplayed,"If user taps \"Allow\" button on dialog, Go Premium Page is not appearing").to.be.true


    });

    it('Verify that if user taps "cross" icon, Phone Number Verification page appears',async function(){
        await premiumPage.cross_icon.waitForDisplayed({timeout:2000})
        await premiumPage.cross_icon.click()
        await browser.pause(2000);
        let isDisplayed = await phoneNumberVerificationPage.phone_number_verification_page_heading.isDisplayed();
        await expect(isDisplayed,"If user taps \"cross\" icon, Phone Number Verification is not appearing").to.be.true

    });


    it('Verify that if user enters phone number \"SUBMIT PHONE NUMBER\" button appears',async function(){
        await phoneNumberVerificationPage.phone_number_fld.waitForDisplayed({timeout:5000})
        await phoneNumberVerificationPage.phone_number_fld.click();   
        await keyboardPage.keyboard_btn("1").waitForDisplayed({timeout:10000})
        await keyboardPage.keyboard_btn("Delete").click()
        await keyboardPage.keyboard_input("905301231112")
        let isDisplayed = await phoneNumberVerificationPage.submit_your_phone_number_btn.isDisplayed();
        await expect(isDisplayed,"If user enters phone number \"SUBMIT PHONE NUMBER\" button is not appearing").to.be.true


    });

    it('Verify that if user taps \"SUBMIT PHONE NUMBER\" button \"Confirm Your Number\" alert appears',async function(){
        await phoneNumberVerificationPage.submit_your_phone_number_btn.click()
        await browser.pause(2000);
        let isDisplayed = await phoneNumberVerificationPage.confirm_your_number_alert.isDisplayed();
        await expect(isDisplayed,"If user taps \"SUBMIT PHONE NUMBER\" button \"Confirm Your Number\" alert is not appearing").to.be.true

    });

    it('Verify that if user taps \"Yes\" button \"Pin Code Verification\" page appears',async function(){
        await phoneNumberVerificationPage.yes_dialog_btn.waitForDisplayed({timeout:2000})
        await phoneNumberVerificationPage.yes_dialog_btn.click()
        await browser.pause(3000);
        let isDisplayed = await pinCodeVerificationPage.pin_code_verification_page_heading.isDisplayed();
        await expect(isDisplayed,"If user taps \"Yes\" button \"Pin Code Verification\" page is not appearing").to.be.true

    });


    it('Verify that on entering valid pin code \"Complete your profile\" page appears',async function(){    
        await pinCodeVerificationPage.pin_fld.click()
        await keyboardPage.keyboard_btn("1").waitForDisplayed({timeout:10000})
        await keyboardPage.keyboard_input("222222")
        await browser.pause(2000);
        let isDisplayed = await completeYourProfilePage.complete_your_profile_heading.isDisplayed();
        await expect(isDisplayed,"On entering valid pin code \"Complete your profile\" page is not appearing").to.be.true

    });

 it('Verify that if user enters profile data \"Continue\" button appear',async function(){
        await completeYourProfilePage.first_name_fld.waitForDisplayed({timeout:10000})
        await completeYourProfilePage.first_name_fld.click()
        await keyboardPage.keyboard_input("John")
        await completeYourProfilePage.last_name_fld.click()
        await keyboardPage.keyboard_input("Doe")
        await completeYourProfilePage.email_fld.click()
        await keyboardPage.keyboard_input(keyboardPage.makeemailid(5))
        await keyboardPage.keyboard_btn("more").click()
        await keyboardPage.keyboard_btn("@").click()
        await keyboardPage.keyboard_btn("more").click()
        await keyboardPage.keyboard_input("xyz")
        await keyboardPage.dot_btn.click()
        await keyboardPage.keyboard_input("com")
        await browser.pause(2000);
        let isDisplayed = await completeYourProfilePage.continue_btn.isDisplayed();
        await expect(isDisplayed,"If user enters profile data \"Continue\" button is not appearing").to.be.true

    });
   


    it('Verify that if user after entering profile data clicks \"Continue\" button, \"Profile Verified\" page appears',async function(){
        await completeYourProfilePage.continue_btn.waitForDisplayed({timeout:5000})
        await completeYourProfilePage.continue_btn.click()
        await browser.pause(5000);
        let isDisplayed = await profileVerifiedPage.profile_verified_page_heading.isDisplayed();
        await expect(isDisplayed,"If user after entering profile data clicks \"Continue\" button, \"Profile Verified\" page is not appearing").to.be.true


    });

    it('Verify that correct \"User Name\" is appearing on \"Profile Verified\" Page',async function(){
        await profileVerifiedPage.user_name_lbl.waitForDisplayed({timeout:5000})
        await browser.pause(2000);
        let isDisplayed = await profileVerifiedPage.user_name_lbl.isDisplayed();
        await expect(isDisplayed,"Correct \"User Name\" is not appearing on \"Profile Verified\" Page").to.be.true

    });


    it('Verify that if user taps "CONTINUE" button on Profile Verified page, Home page appears and user on boarding journey completed',async function(){
        await profileVerifiedPage.continue_btn.waitForDisplayed({timeout:5000})
        await profileVerifiedPage.continue_btn.click()
        await browser.pause(2000);
        let isDisplayed = await homePage.home_page.isDisplayed();
        await expect(isDisplayed,"If user taps \"Continue\" button on Profile Verified page, Home page is not appearing and user on boarding journey is not being completed").to.be.true

    });

});