package StringManipulation;

import java.util.HashSet;
import java.util.Set;

public class RemovingDuplicates {
    public String Remove(String str){
        if(str == null){
            return "";
        }
        StringBuilder sb = new StringBuilder();
        Set<Character> seen  = new HashSet<>();
        for(char ch: str.toCharArray()){
            if(!seen.contains(ch)){
                seen.add(ch);
                sb.append(ch);
            }
        }
        return sb.toString();
        }
        public static void main(String args[]){
            RemovingDuplicates r = new RemovingDuplicates();
            String res = r.Remove("thilakmani");
            System.out.println(res);
        }
    
}
