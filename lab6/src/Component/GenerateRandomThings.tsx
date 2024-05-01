export const generateRandomCardNumber = () => {
    let cardNumber = '';
    for (let i = 0; i < 16; i++) {
        cardNumber += Math.floor(Math.random() * 10);
        if ((i + 1) % 4 === 0 && i !== 15) {
            cardNumber += ' ';
        }
    }
    return cardNumber;
};

export const generateRandomDateOfExpire = () => {
    let expireDate = '';
    expireDate += Math.floor(Math.random() * 2);
    if (expireDate === '1') expireDate += Math.floor(Math.random() * 2); else expireDate +=Math.floor(Math.random()*9)+1;
    expireDate += '/';
    expireDate += Math.floor(Math.random()*10)
    expireDate += Math.floor(Math.random()*10)
    return expireDate;
};

export const generateRandomCVC = () => {
    let CVC1= 0;
    let CVC = '';
    CVC1 += Math.floor(Math.random()*1000);
    CVC +=CVC1;
    if (CVC1 < 100 && CVC1 > 9) CVC += '0'; else if (CVC1 <9 ) CVC += '00';
    return CVC;
};

export const names = ['John Smith', 'Alice Johnson', 'Bob Williams', 'Emily Davis'];
