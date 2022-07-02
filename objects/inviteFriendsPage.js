const inviteFriendsPageHeading="//XCUIElementTypeButton[@name=\"Invite Friends\"]"
const cancelLbl="//XCUIElementTypeButton[@name=\"Cancel\"]"
const inviteFrndsGetPremPage="//XCUIElementTypeStaticText[@name=\"Invite Friends and Get Free Premium\"]"


class inviteFriendsPage{

get invite_friends_page_heading() {
        return $(inviteFriendsPageHeading);
}

get cancel_lbl() {
        return $(cancelLbl);
}

get invite_frnds_get_prem_page() {
        return $(inviteFrndsGetPremPage);
}



 }

export default new inviteFriendsPage()   