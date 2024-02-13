class hero{
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attacking(){
        
        let attack;
        
        if(this.type == "mage"){
            attack = "magia";
        }else if(this.type == "warrior"){
            attack = "espada";
        }else if(this.type == "monk"){
            attack = "artes marciais";
        }else if(this.type == "ninja"){
            attack = "shuriken";
        }

        console.log(`O ${this.type} atacou usando ${attack}.`)
    }
}

let warrior = new hero("Jade", 17, "warrior");
warrior.attacking();
