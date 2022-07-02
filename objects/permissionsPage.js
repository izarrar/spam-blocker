const permissionNeededPageHeading="//XCUIElementTypeStaticText[@name=\"Permissions Needed\"]"
const continueBtn="//XCUIElementTypeButton[@name=\"CONTINUE\"]"
const conatctsPermissionDialog="//XCUIElementTypeStaticText[@name=\"\“Who\” Would Like to Access Your Contacts\"]"
const dialogOkBtn="//XCUIElementTypeButton[@name=\"OK\"]"
const notificationPermissionDialog="//XCUIElementTypeStaticText[@name=\"\“Who\” Would Like to Send You Notifications\"]"
const dialogAllowBtn="//XCUIElementTypeButton[@name=\"Allow\"]"


class permissionsPage{

get permission_needed_page_heading() {
        return $(permissionNeededPageHeading);
}

get continue_btn() {
        return $(continueBtn);
}

get conatcts_permission_dialog(){
        return $(conatctsPermissionDialog)
}

get dialog_ok_btn() {
        return $(dialogOkBtn);
}

get notification_permission_dialog(){
        return $(notificationPermissionDialog)
}

get dialog_allow_btn() {
        return $(dialogAllowBtn);
}



 }

export default new permissionsPage()   