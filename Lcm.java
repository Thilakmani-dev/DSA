public class Lcm {
    public static void main(String args[]){
        int n1=80,n2=120;
        int lcm = (n1>n2)?n1:n2;
        while(true){
            if((lcm%n1==0)&&(lcm%n2==0)){
                break;
            }
            lcm++;
        }
        System.out.println(lcm);
    }
}
