import java.lang.reflect.Constructor;

class Person {
    public void getName(String name){
        System.out.println("Your name is "+name);
    }
}
public class Inheritance extends Person{
    public static void main(String args[]){
        Person p = new Person();
        p.getName("Thilakmani");
    }
}