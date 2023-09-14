var strStr = function(haystack, needle, haystackIndex = 0, needleIndex = 0) {
    if (needle === "") {
     return 0;
   }
   
   if (haystackIndex >= haystack.length || 
       haystack.length - haystackIndex < needle.length - needleIndex) {
     return -1;
   }
   
   if (haystack[haystackIndex + needleIndex] === needle[needleIndex]) {
     if (needleIndex === needle.length - 1) {
       return haystackIndex;
     } else {
       return strStr(haystack, needle, haystackIndex, needleIndex + 1);
     }
   } else {
     return strStr(haystack, needle, haystackIndex + 1, 0);
   }
 }