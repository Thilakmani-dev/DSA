package StringManipulation;

public class CapitalizeLetter {
    public static String capitalize(String sentence){
        String[] words = sentence
        .trim()
        .split(" ");
        for(int i  = 0 ; i< words.length ; i++){
            words[i] = words[i].substring(0, 1).toUpperCase()+words[i].substring(1).toLowerCase();
        }
        return String.join(" ",words);
    }
    public static void main(String args[]){
        String res = capitalize("        this is thilak mani hi           ");
        System.out.println(res);
    }
    
}
