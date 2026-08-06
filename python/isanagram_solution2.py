# Simple Format: Check if two words contain the exact same letters in the exact same quantities.
# Story (The Scrabble Cheat): 
#     Two players claim they have the same set of tiles. One has "silent," the other has "listen."
#     To prove they aren't lying, you dump both sets into two separate buckets.
# You count every 's', every 'i', and every 'l'. 
# If the counts in both buckets match exactly, they are telling the truth.
# Example Input: s = "anagram", t = "nagaram"
# Example Output: True

from collections import Counter

def isAnagram(self, s: str, t: str) -> bool:
        # If lengths are different, they can't be anagrams
        if len(s) != len(t):
            return False
            
        # Counter(s) creates a dict like {'a': 3, 'n': 1, 'g': 1, ...}
        return Counter(s) == Counter(t)
    
def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
            
        count = {}
        
        # Count up for string s, count down for string t
        for i in range(len(s)):
            count[s[i]] = count.get(s[i], 0) + 1
            count[t[i]] = count.get(t[i], 0) - 1
            
        # If it's an anagram, all values in the dict must be 0
        for val in count.values():
            if val != 0:
                return False
                
        return True    
    
def isAnagram(s,t):
    return Counter(s)==Counter(t)

# result=isAnagram('146773','714673')
assert isAnagram("rat", "car") == False
print("All tests passed!")

