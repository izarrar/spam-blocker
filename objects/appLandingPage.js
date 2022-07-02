const whoLogo="//XCUIElementTypeImage[@name=\"whoLogo\"]"
const getStartedBtn="//XCUIElementTypeButton[@name=\"GET STARTED\"]"


class appLandingPage{

get get_who_logo() {
        return $(whoLogo);
}

get get_started_btn() {
        return $(getStartedBtn);
}



 }

export default new appLandingPage()   