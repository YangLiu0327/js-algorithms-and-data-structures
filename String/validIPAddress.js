// 468 M Validate IP Address

/**
 * @param {string} queryIP
 * @return {string}
 */

var validIPAddress = function(queryIP) {
    let segments;
    if(queryIP.includes(":")) {
        segments = queryIP.split(":");
        if (segments.length !== 8) return "Neither";
        const hexPattern = /^[0-9a-fA-F]{1,4}$/;
        for (let segment of segments) {
            if (!hexPattern.test(segment)) {
                return "Neither";
            }
        }
        return "IPv6";
    }else if (queryIP.includes('.')) {
        segments = queryIP.split(".");
        if (segments.length !== 4) return "Neither";
        const numPattern = /^[0-9]+$/;
        for (let segment of segments) {
            if (!numPattern.test(segment) || +segment > 255 || +segment < 0 || (segment.length > 1 && segment[0] === '0')) {
                return "Neither";
            }
        }
        return "IPv4";
    } else {
        return "Neither";
    }
}

console.log(validIPAddress("1.0.1."))