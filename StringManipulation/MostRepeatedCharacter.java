package StringManipulation;

public class MostRepeatedCharacter {
    public static char getMostRepeating(String str){
        final int ASCII_SIZE = 256;
        int[] frequencies = new int[ASCII_SIZE];
        for(char ch: str.toCharArray()){
            frequencies[ch]++;            
        } 
        char ans = ' ';
        for(var i = 0; i < frequencies.length;i++){
            int max = 0;
            if(frequencies[i]>max){
                max = frequencies[i];
                ans = (char) i;
            }
        }
        return ans;
    }
    public static void main(String args[]){
        char res = getMostRepeating("thilakmani");
        System.out.println(res);
    }
    
}
