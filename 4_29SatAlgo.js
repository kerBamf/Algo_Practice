var lengthOfLastWord = function(s) {
    let lastWord = []
    s = s.trimEnd()
    if (s.length == 1) {return 1
   } else {  
   for(let i = s.length-1; s[i] !== ' ' || i > 0; i--) {
        lastWord.push(s[i])
   }
   return lastWord.length
}
};

console.log(lengthOfLastWord('s'))