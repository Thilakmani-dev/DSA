package StringManipulation;

import java.util.Arrays;

public class ReverseWords {
    public String Reverse(String sentence){
        StringBuilder sb = new StringBuilder();
        String[] arr = sentence.split(" ");
        for(int i = arr.length-1; i >= 0 ; i--){
            sb.append(arr[i]+" ");
        }
        return sb.toString().trim();
    }
public static void main(String args[]){
ReverseWords rv = new ReverseWords();
String outputString = rv.Reverse("thilak mani dev");
System.out.println(outputString);
}    
}
