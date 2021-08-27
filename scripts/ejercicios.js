 function ejer_1(a,b) {
    return a + b
 }
 
 function ejer_2() {
    let pr;
    let a = parseInt(prompt("Ingresa Nota 1"));
    let b = parseInt(prompt("Ingresa Nota 2"));
    let c = parseInt(prompt("Ingresa Nota 3"));
    let d = parseInt(prompt("Ingresa Nota 4"));
 
    pr = (a + b + c + d)/4;
 
    return {
       Nota_1: a,
       Nota_2: b,
       Nota_3: c,
       Nota_4: d,
       Promedio: pr,
     };
 }
 
 function ejer_3() {
    let area;
    let base = parseInt(prompt("Ingresa la base del rectangulo"));
    let altura = parseInt(prompt("Ingresa la altura del rectangulo"));
 
    area = base * altura;
    return "El area del rectangulo es: " + area;
 }
 
 function ejer_4() {
    let area;
    let base = parseInt(prompt("Ingresa la base del triangulo"));
    let altura = parseInt(prompt("Ingresa la altura del triangulo"));
 
    area = (base * altura) / 2;
    return "El area del triangulo es: " + area;
 }
 
 function ejer_5() {
    let area;
    const pi = 3.14;
    let radio = parseInt(prompt("Ingresa el radio de la circunferencia"));
 
    area = pi * Math.pow(radio, 2);
    return "El area de la circunferencia es: " + area.toFixed(2);
 }
 
 function ejer_6() {
    let sueldo_semanal;
    const sueldo_hora = 15;
    let horas_trabajadas = parseInt(prompt("Ingresa las horas trabajadas"));
 
    sueldo_semanal = horas_trabajadas * sueldo_hora;
    return {
       Horas_Trabajadas_en_la_Semana: horas_trabajadas,
       Sueldo_a_Pagar_por_Hora: sueldo_hora,
       Sueldo_a_Pagar_por_Semana: sueldo_semanal,
     };
 }
 
 function ejer_7() {
    let pedido;
    const pulgada = 0.0254;
    let metros_tela = parseInt(prompt("Ingresa los metros de tela a comprar"));
 
    pedido = metros_tela * pulgada;
    return "Debes realizar un pedido de " + pedido + " pulgadas";
 }
 
 function ejer_8() {
    let dolares;
    const compra_dolar = 4.09;
    let soles = parseInt(prompt("Ingresa la cantidad de dinero en soles"));
 
    dolares = soles / compra_dolar;
    return "Con " + soles + " soles puedes comprar " + dolares.toFixed(2) + " dolares";
 }
 
 function ejer_9() {
    let edad, n;
    const anio_actual = 2021;
 
    n = 0;
     while (n < 2) {
         let nacimiento = parseInt(prompt("Ingresa el año de tu nacimiento"));
       edad = anio_actual - nacimiento;
       document.write("Tu edad es: " + edad + "<br/>");
         ++n;
     }
 }
 
 function ejer_10() {
    let nombre_1 = prompt("Ingresa el primer nombre");
    let nombre_2 = prompt("Ingresa el segundo nombre");
    let nombre_3 = prompt("Ingresa el tercer nombre");
    let edad_1 = parseInt(prompt("Ingresa la edad de " + nombre_1));
    let edad_2 = parseInt(prompt("Ingresa la edad de " + nombre_2));
    let edad_3 = parseInt(prompt("Ingresa la edad de " + nombre_3));
    let el_menor, comodin, name_comodin;
 
    if (edad_1 < edad_2) {
       comodin = edad_1;
       name_comodin = nombre_1;
    } else {
       comodin = edad_2;
       name_comodin = nombre_2;
    }
 
    if (comodin < edad_3) {
       el_menor = name_comodin + " es el menor, su edad es " + comodin;
    } else {
       el_menor = nombre_3 + " es el menor, su edad es " + edad_3;
    }
 
    return el_menor;
 }
 
 function ejer_11() {
     let nombre = prompt("Ingresa tu nombre");
    let tiempo_work = prompt("Ingresa años trabajados");
    let mensaje;
 
    switch (tiempo_work) {
       case "1":
          mensaje = nombre + ", tu bono es de: $ 100, por " + tiempo_work + " anio de trabajo";
       break;
 
       case "2":
          mensaje = nombre + ", tu bono es de: $ 200, por " + tiempo_work + " anio de trabajo";
       break;
 
       case "3":
          mensaje = nombre + ", tu bono es de: $ 300, por " + tiempo_work + " anio de trabajo";
       break;
 
       case "4":
          mensaje = nombre + ", tu bono es de: $ 400, por " + tiempo_work + " anio de trabajo";
       break;
 
       case "5":
          mensaje = nombre + ", tu bono es de: $ 500, por " + tiempo_work + " anio de trabajo";
       break;
 
       default:
          mensaje = nombre + ", tu bono es de: $ 1000, por " + tiempo_work + " anio de trabajo";
       break;
    }
 
    return mensaje;
 }
 
 function ejer_12() {
     let a, b, n;
     let nombre = prompt("Ingresa tu nombre");
    let salario = 1500;
     let bono = 0.1;
 
     n = 1;
     while (n < 7) {
         a = salario;
         salario = a * bono + salario;
       b = a * bono;
       document.write(nombre + ", tu bono en el anio " + n + " es: " + b.toFixed(0) + " y tu sueldo es: " + salario.toFixed(0) + "<br/>");
         n = n+1;
     }
 }
 
 //console.log(ejer_1(5,15))
 //console.log(ejer_2())
 //console.log(ejer_3())
 //console.log(ejer_4())
 //console.log(ejer_5())
 //console.log(ejer_6())
 //console.log(ejer_7())
 //console.log(ejer_8())
 //console.log(ejer_9())
 //console.log(ejer_10())
 //console.log(ejer_11())
 //console.log(ejer_12())
 
