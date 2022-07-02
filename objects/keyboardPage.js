const selector = '**/XCUIElementTypeKey[`label == "."`]'

class keyboardPage{

   

    keyboard_btn(btnName){
        const keyboardBtnName="~"+btnName
        return $(keyboardBtnName);
    }

    get dot_btn(){
        const dotBtn =$(`-ios class chain:${selector}`)
        return dotBtn;
    }
        
    async keyboard_input(value) {
        const valueChar = Array.from(value);
        for (let i = 0; i < valueChar.length; i++) {
            console.log(valueChar[i])
            const btnName=await valueChar[i].toString()
            console.log(btnName)
            const keyboardBtnName=await "~"+btnName
            await $(keyboardBtnName).click();
      }
      }

    makeemailid(length) {
        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
       }
       return result;
    } 

  

     


 }

export default new keyboardPage()   