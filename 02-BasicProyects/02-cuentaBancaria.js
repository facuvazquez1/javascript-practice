/*
2) ------- Simulador de cuenta bancaria (nivel intermedio) -------
Objetivo
Modelar una cuenta bancaria usando clases y manejo de errores.

Temas que practicás: Clases, constructor, métodos / Encapsulamiento (propiedades privadas) / Getters y setters / Herencia / Manejo de errores (try/catch, throw, errores personalizados) / Módulos (export / import) / Especificaciones

------- Clase base Cuenta: -------
Propiedades: titular, número, saldo (privado)
Métodos: depositar, extraer, transferir, verSaldo
Validaciones obligatorias:
No permitir montos negativos o cero
No permitir extraer más de lo disponible
Error personalizado: SaldoInsuficienteError.
Clase derivada CuentaPremium:
Hereda de Cuenta
Sobrescribe extraer para permitir un pequeño descubierto (ej. -100)
Separar en módulos:
cuenta.js
errores.js
main.js
Pista para iniciar

Arrancá por el caso más simple: depositar y verSaldo.
Después agregá validaciones con throw.
Recién al final meté herencia y módulos para no mezclar problemas.
*/
