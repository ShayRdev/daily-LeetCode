class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
 
        hash_map = {}

        for s in strs:
            str_list = list(s)
            str_list.sort()
            joined_str = ''.join(str_list)

            if joined_str not in hash_map:
                hash_map[joined_str] = []

            hash_map[joined_str].append(s)


        return hash_map.values()