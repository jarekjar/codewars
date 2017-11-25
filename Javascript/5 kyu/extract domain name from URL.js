/*
Write a function that when given a URL as a string, parses out just the domain name
and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url) {
    console.log(url);
    if (url.match("//") == "//") {
        var matches = url.split("//", [2]);
        console.log(matches);
        var newMatches = matches[1].split(".", [2]);
        if (newMatches[0] == "www") {
            return newMatches[1];
        } else {
            return newMatches[0];
        }
    } else {
        var newMatches = url.split(".", [3])
        console.log(newMatches);
        console.log(url.match(".").length)
        if (url.match(".").length = 1) {
            if (newMatches[0] === "www") {
                return newMatches[1];
            } else {
                return newMatches[0];
            }
        } else {
            return newMatches[1];
        }
    }
}
