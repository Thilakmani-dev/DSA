package StringManipulation;

public class ReverseString {
    public static String Reverse(String str){
        if(str==null){
            return "";
        }
        StringBuilder revstr = new StringBuilder();
        for(int i = str.length()-1; i >= 0 ; i--){
            revstr.append(str.charAt(i));
        }
        return revstr.toString();
    }
    public static void main(String args[]){
String revs = Reverse("thilakmani");
System.out.println(revs);
    }
    
}
