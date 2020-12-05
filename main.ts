import Virtual from "./Virtual";
import prompt from 'prompt-sync';
import { Cachorro } from "./Cachorro";


let teclado = prompt();
let option: number = 0;
let nome = teclado('Escolha um nome para o seu bichinho: ');
let bicho = new Cachorro(nome);


while (option != 9 && bicho.isDead) {
    
    console.log('------Bicho Virtual-----');
    console.log('| 1. Brincar           |');
    console.log('| 2. Comer             |');
    console.log('| 3. Beber             |');
    console.log('| 4. Dormir            |');
    console.log('| 5. Imprimir atibutos |');
    console.log('| 9. Sair              |');
    console.log('------------------------');

    option = + teclado (`Digite um número para dizer qual a ação que ${nome} irá fazer:`);

    switch (option) {
        case 1:
            bicho.brincar();
            console.log(bicho.status());
            break;

        case 2:
            bicho.comer();
            console.log(bicho.status());
            break;

        case 3:
            bicho.beber();
            console.log(bicho.status());
            break;

        case 4:
            bicho.descansar();
            console.log(bicho.status());
            break;

        case 5:
            console.log(bicho.status());
            break;

        default:
            break;

    }
}