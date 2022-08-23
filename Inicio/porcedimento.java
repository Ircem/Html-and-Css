import java.util.Scanner;

public class porcedimento{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        if (num == 0){
            System.out.println("Voce pode entrar");
        }else{
            System.out.println("erro");
        }
    }
}