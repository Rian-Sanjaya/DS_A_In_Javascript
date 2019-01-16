// format phone number
// 1.
// "4-2 1 4  5-7 23"
// "421-457-23"
//
// 2.
// "34 5 08 31223"
// "345-083-12-23"
//
// 3.
// "123453812342"
// "123-453-812-342"

function formattedPhoneNo(phoneNo) {
    // phoneNo = phoneNo.replace(/\s/g, '');
    // phoneNo = phoneNo.replace(/-/g, '');
    phoneNo = phoneNo.split(' ').join('');
    phoneNo = phoneNo.split('-').join('');

    var formattedPhone = '',
        div = 1,
        len = phoneNo.length,
        reminderOne = (len % 3 === 1) ? 1 : 0;

    if (len < 4) return phoneNo;

    for (var i=0; i<phoneNo.length; i++) {
        if (reminderOne && len < 5) {
            if (div < 3) {
                formattedPhone += phoneNo[i];
            } else {
                formattedPhone += "-" + phoneNo[i];
                div = 1
            }
        } else {
            if (div < 4) {
                formattedPhone += phoneNo[i];
            } else {
                formattedPhone += "-" + phoneNo[i];
                div = 1
            }
        }

        div++;
        len--;
    }

    return formattedPhone;
    // console.log(formattedPhone);
}

formattedPhoneNo("4-2 1 4  5-7 23")
formattedPhoneNo("34 5 08 31223")
formattedPhoneNo("123453812342")
formattedPhoneNo("12345")
formattedPhoneNo("1234567890123456")