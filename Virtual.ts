export default class Virtual {
    constructor(
        protected _nome: string,
        protected _vida: number,
        protected _felicidade: number,
        protected _comer: number,
        protected _beber: number,
        protected _dormir: number
    ) { }
        
    public status(): void {
        console.log('Status');
        console.log('Nome: ', this._nome);
        console.log('Felicidade: ', this._felicidade);
        console.log('Energia: ', this._vida);
        console.log('Fome: ', this._comer);
        console.log('Sede: ', this._beber);
        console.log('Sono: ', this._dormir);
        console.log('');
    }

    public brincar(): void {
        if ((this._vida > 0) && (this._felicidade < 100)) {
            this._felicidade += 20;
            this._vida -= 20;
            this._comer += 5;
            this._beber += 5;
            this._dormir += 10;
            this.isDead();
            console.log('Adoro brincar contigo!');
        } else {
            console.log('Já brincamos demais! Preciso descansar!');

        }
    }
    public comer(): void {

        if ((this._vida <= 95) && (this._comer > 0)) {
            this._comer -= 5;
            this._vida += 5;
            console.log('Hummm... que delícia!');
        } else {
            console.log("Já comi demais! Preciso brincar um pouco!");
        }
    }
    public beber(): void {

        if ((this._vida <= 95) && (this._beber < 100)) {
            this._beber -= 5;
            this._vida += 5;
            console.log('Eu realmente estava com muita sede!');
        } else {
            console.log("Não estou com sede! Quero brincar!");

        }
    }
    public descansar(): void {

        if ((this._vida <= 90) && (this._dormir < 100)) {
            this._vida += 10
            this._dormir -= 10;
            console.log('Tá na hora de descansar! Boa noite!');
        } else {
            console.log("Estou cheio de energia! Vamos brincar?");

        }
    }

    public isDead(): boolean {
        if (this._vida <= 0) {
            console.log('Seu bichinho morreu...');
            return true;
        } else {
            return false;
        }
    }
}

