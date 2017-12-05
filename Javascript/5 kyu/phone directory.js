/*John keeps a backup of his old personal phone book as a text file. On each line
of the file he can find the phone number (formated as +X-abc-def-ghij where X
stands for one or two digits), the corresponding name between < and > and the
address.

Unfortunately everything is mixed, things are not always in the same order, lines
are cluttered with non-alpha-numeric characters.

Examples of John's phone book lines:

"/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

" 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

"<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

Could you help John with a program that, given the lines of his phone book and a
phone number returns a string for this number : "Phone => num, Name => name,
Address => adress"

Examples:

s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY
56423 ;+1-541-914-3010!\n"

phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J
Steeve, Address => 156 Alphand St."
It can happen that, for a few phone numbers, there are many people for a phone
number -say nb- , then

return : "Error => Too many people: nb"

or it can happen that the number nb is not in the phone book, in that case

return: "Error => Not found: nb"

You can see other examples in the test cases.

JavaScript random tests completed by @matt c

Note

Codewars stdout doesn't print part of a string when between < and >*/

function phone(strng, num) {
    var name = "";
    var phoneNum = num;
    var address = "";
    var seperatedContacts = [];
    var newString = strng.split(/\r?\n/);
    var count = 0;

    for (var i = 0; i < newString.length; i++) {
        if (newString[i].includes(num)) {
            count++
            name = newString[i].match(/<.*?>/g).toString().slice(1, name.length - 1)
            address = newString[i].replace(name, '').replace(phoneNum, "").replace(/[^a-zA-Z_.0-9- ]/g, "").replace(/_/g, " ").replace(/\s+/g, ' ').trim();
        }
    }
    if (count > 1) {
        return ("Error => Too many people: " + phoneNum);
    }
    if (address === "" || name === "") {
        return ("Error => Not found: " + phoneNum);
    }
    console.log(name);
    return ("Phone => " + phoneNum + ", Name => " + name + ", Address => " + address);
}
