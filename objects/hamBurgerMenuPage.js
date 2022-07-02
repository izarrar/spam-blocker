const updateYourProfilePage="//XCUIElementTypeStaticText[@name=\"Update Your Profile\"]"
const editProfileBtn="//XCUIElementTypeApplication[@name=\"Who\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther"
const backLbl="//XCUIElementTypeButton[@name=\"Back\"]"
const verifyYourPhoneNumberBtn="//XCUIElementTypeButton[@name=\"Verify Your Phone Number\"]"


class hamBurgerMenuPage{

get edit_profile_btn() {
        return $(editProfileBtn);
}

get verify_your_phone_number_btn() {
        return $(verifyYourPhoneNumberBtn);
}

get update_your_profile_page() {
        return $(updateYourProfilePage);
}

get back_lbl() {
        return $(backLbl);
}


}

export default new hamBurgerMenuPage()   