const privacyPageHeading="//XCUIElementTypeStaticText[@name=\"Your privacy is important to us\"]"
const agreeContinueBtn="//XCUIElementTypeButton[@name=\"AGREE & CONTINUE\"]"


class privacyPage{

get get_privacy_page_heading() {
        return $(privacyPageHeading);
}

get agree_continue_btn() {
        return $(agreeContinueBtn);
}



 }

export default new privacyPage()   