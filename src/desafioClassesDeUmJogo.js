class hero{
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack(){
        
        let ataque;
        
        if(this.type == "mage"){
            ataque = "magia";
        }else if(this.type == "warrior"){
            ataque = "espada";
        }else if(this.type == "monk"){
            ataque = "artes marciais";
        }else if(this.type == "ninja"){
            ataque = "shuriken";
        }

        console.log(`O ${this.type} atacou usando ${ataque}.`)
    }
}

let warrior = new hero("Jade", 17, "warrior");
warrior.attack();
