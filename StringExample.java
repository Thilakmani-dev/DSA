public class StringExample{
    public static void main(String args[]){
        String s = "Thilakmani";
        String s1 = new String("Thilakmani");
        System.out.println("The s and s1 strings are equal "+s.equals(s1));
        s.concat("Dev");
        System.out.println(s);
        //s is not concated with Dev
        //to make string mutable we can use string buffer or string builder
        StringBuffer sb = new StringBuffer("Thilakmani");
        sb.append("dev");
        System.out.println("The string buffer class string is"+sb);
        sb.reverse();
        System.out.println(sb);
        System.out.println(sb.capacity());
    }
}