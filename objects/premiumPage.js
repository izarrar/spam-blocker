const getPremiumPageHeading="//XCUIElementTypeStaticText[@name=\"Get Premium\"]"
const crossIcon="//XCUIElementTypeButton[@name=\"close\"]"

class premiumPage{

get get_premium_page_heading() {
        return $(getPremiumPageHeading);
}

get cross_icon() {
        return $(crossIcon);
}


}

export default new premiumPage()   