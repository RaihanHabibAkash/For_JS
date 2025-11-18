const palindrome = (str) => {
    const words = str.replace(/[^a-z0-9]/gi, "");

    if(words === words.split("").reverse().join()){
        return true;
    }
    else{
        return false;
    }
}

console.log(palindrome("A man a plan a canal Panama"));