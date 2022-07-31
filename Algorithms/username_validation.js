// only letters, number and underscore
/^[A-Za-z0-9_]*$/.test(str)


// ^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$
//  └─────┬────┘└───┬──┘└─────┬─────┘└─────┬─────┘ └───┬───┘
//        │         │         │            │           no _ or . at the end
//        │         │         │            │
//        │         │         │            allowed characters
//        │         │         │
//        │         │         no __ or _. or ._ or .. inside
//        │         │
//        │         no _ or . at the beginning
//        │
//        username is 8-20 characters long

const regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const isValid = regex.text('Aku_seorang123');
console.log(isValid);