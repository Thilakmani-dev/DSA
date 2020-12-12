import java.util.Arrays;
class ArrayListClass{
    public void SortArray(String str){
        char[] ch = str.toCharArray();
        for(int i = 0 ; i <= str.length() -1 ; i++){
            ch[i] = str.charAt(i);
        }
        Arrays.sort(ch);
        System.out.println(Arrays.toString(ch));
    }
    public static void main(String args[]){
ArrayListClass a = new ArrayListClass();
a.SortArray("thilak"); 
    }
}

