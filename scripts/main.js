function ejercicioUno() {
    let sexo = prompt("ingresatu sexo");
    let edad = prompt("ingresa tu edad");
    let nacionalidad = prompt("ingresa tu nacionalidad");

    if (sexo == "m" && edad > 18 && nacionalidad !== "peruana") {
        alert("bienvenido al club");
    } else {
        alert("no eres bienvenido ");
    }
}
function ejercicioDos() {
    let nameUser = prompt("ingresa tu nombre");

    if (nameUser == "sebastian") {
        console.log("hola sebastian");
    } else if (nameUser == "jose") {
        console.log("hola jose");
    } else if (nameUser == "luis") {
        console.log("hola luis");
    } else {
        console.log("no te conozco")
    }
}

function ejerciciosTres() {
    let frutas = prompt("ingresa tu fruta ('uva','mandarina','papaya')");

    switch (frutas) {
        case "uva": {
            alert("Elegiste la uva");
            break;
        }
        case "mandarina": {
            alert("elegiste la mandarina");
            break;
        }
        case "papaya": {
            alert("Elegiste la papaya");
            break;
        }
        default: {
            alert("esa fruta no la tenemos")
        }
    }
}


function esHombre() {
    console.log("es hombre!!!");
    console.log("segunda linea!!");

}

function esMujer() {
    console.log("es mujer!!!");
    console.log("segunda linea!!");
}

function ejerciciosCuatro() {
    let sexo = prompt("Ingresa tu sexo (m , f)");

    sexo === "m" ? esHombre() : esMujer();
}

function ejercicioCinco() {
    function suma(a, b) {
        if (arguments, length > 2) throw new Error("No soporta mas de 2 argumentos");
        return a + b;
    }

    suma(2, 3, 4, 5, 6);
}

function ejercicioSeis() {
    function setName(name) {
        debugger;
        let message = "";
        try {
            if (name.length < 6) throw "SHORT";
            if (name.length > 10) throw "long";

            message = `El nombre ${name} es correcto`;
        } catch (error) {
            console.log("error", error);
            if (error == "SHORT") message = `El nombre ${name} es muy corto`;
            if (error == "LONG") message = `Elnombre ${name} es muy largo`;
        } finally {
            console.log("Nombre evalauado", message);
        }
    }

    setName("ana");
    setName("jose luis alberto");
    setName("sebastian");
}

function ejercicioSiete() {
    let impresora = {
        color: "negro",
        marca: "hp",
        modelo: "b7",
        cantidadDehojas: 0,
        imprimir: function () {
            if (this.cantidadDehojas > 0) {
                console.log("imprimir!!");
            } else if (this.cantidadDehojas <= 0) {
                console.log("agregar hojas");
            }
        },
        skanear: function () {
            console.log("impresora skaneando");
        },
        copiar: function () { },
        creadores: {
            uno: {
                nombre: "pedro",
            },
            dos: {
                nombre: "juan",
            },
            tres: {
                nombre: "luis",
            },
        },

    };

    const button = document.querySelector("button");
    button.onclick = function () {
        impresora.imprimir();
    };

    const form = document.querySelector("form");

    form.onsubmit = function (event) {
        event.preventDefault();
        impresora.cantidadDehojas = 10;
        console.log("registrado envio de hojas");
        console.log(impresora);
    };
}

    //ejerciciosTres()
    //ejerciciosCuatro()
    //ejercicioCinco()
    //ejercicioSeis()
    ejercicioSiete()

