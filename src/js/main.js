const FizzBuzz = {
    init(){
        document.body.classList.remove('no-js');
        this.mOl = document.getElementById('fizzbuzz');
        this.methode();
    },
    methode(){
        for(let i = 1; i < 100; i++){
            if(i % 15 === 0){
                this.mOl.insertAdjacentHTML("beforeend", '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
            } else if(i % 3 === 0){
                this.mOl.insertAdjacentHTML("beforeend", '<li class="fizz">FI<i>zz</i></li>');
            } else if(i % 5 === 0){
                this.mOl.insertAdjacentHTML("beforeend", '<li class="buzz">BU<i>zz</i></li>');
            } else {
                this.mOl.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
            }
        }
    }
}
FizzBuzz.init();