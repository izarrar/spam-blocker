const homeePage="//XCUIElementTypeStaticText[@name=\"Search and call any number\"]"
const hamburgerIcon="//XCUIElementTypeButton[@name=\"MenuOff\"]"


class homePage{

    get home_page() {
        return $(homeePage);
}

get hamburger_icon() {
        return $(hamburgerIcon);
}


 }

export default new homePage()   