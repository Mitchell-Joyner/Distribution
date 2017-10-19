const Product = function (){

    let name = setName();
    let price = setNumber();
    let space = setNumber();
    let prime = setPrime();

    function setName(){
        let word = "";
        for (let c=0;c<5;c++){
            let c = Math.floor(25*Math.random()+65);
            let letter = String.fromCharCode(c);
            word += letter;
        }
        return word;
    }

    function setNumber(){
        let price = Math.round(100000*Math.random())/100;
        return price;
    }

    function setPrime(){
        let num = Math.random()*100;
        if (num>50){
            setPrime = true;
        }
        else{
            setPrime = false;
        }
    }
}
