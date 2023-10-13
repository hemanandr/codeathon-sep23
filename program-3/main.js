function validateIPAddress(ipAddress) {
    try {
        const ipArr = ipAddress.split('.');
        if (ipArr.length !== 4) {
            throw new Error('Invalid IP address: wrong number of segments');
        }
        for (let i = 0; i < 4; i++) {
            const num = parseInt(ipArr[i]);
            if (isNaN(num) || num < 0 || num > 255 || (num.toString() !== ipArr[i])) {
                throw new Error('Invalid IP address: segment out of range or non-numeric');
            }
        }
        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}