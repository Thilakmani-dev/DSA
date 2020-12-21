package StringManipulation;
//O(n)
public class CountVowels{
    public static int count(String str){
        if(str==null){
            return 0;
        }
        int c = 0;
        String vowels = "aeiou";
        for(char ch: str.toLowerCase().toCharArray()){
            if(vowels.indexOf(ch) != -1){
                c++;
            }
        }
        return c;
    }
    public static void main(String args[]){
        int res = count("example");
        System.out.println(res);
    }
}
