# Proyecto 2: Simulador de Cuenta Bancaria (Nivel Intermedio)

## Objetivo

Modelar una cuenta bancaria usando **clases** y **manejo de errores**. Es tu primer proyecto aplicado de OOP: vas a combinar clases, herencia, encapsulamiento y validaciones en un solo ejercicio.

## Temas que practicás

- Clases: `constructor`, métodos
- Encapsulamiento (propiedades privadas con `#`)
- Getters y setters
- Herencia (`extends`, `super`)
- Manejo de errores (`try/catch`, `throw`, errores personalizados)
- Módulos (`export` / `import`)

---

## Parte 1 — Clase base `Cuenta`

### Propiedades
- `titular` (string)
- `numero` (string o number, el número de cuenta)
- `saldo` (**privado**, con `#`)

### Métodos
- `depositar(monto)` → suma `monto` al saldo
- `extraer(monto)` → resta `monto` del saldo
- `transferir(monto, cuentaDestino)` → extrae de esta cuenta y deposita en `cuentaDestino`
- `verSaldo()` → devuelve el saldo actual

### Validaciones obligatorias
- No permitir depositar o extraer montos **negativos o iguales a cero**
- No permitir extraer **más saldo del disponible**
- Cuando no hay saldo suficiente, lanzar un error personalizado: `SaldoInsuficienteError`

---

## Parte 2 — Clase derivada `CuentaPremium`

- Hereda de `Cuenta` (`extends Cuenta`)
- **Sobrescribe** el método `extraer` para permitir un pequeño descubierto (por ejemplo, hasta **-100**, en vez de bloquear en 0)

---

## Parte 3 — Separación en módulos

Una vez que la lógica funcione en un solo archivo, separá el código en:

- `errores.js` → clase `SaldoInsuficienteError` (y cualquier otro error personalizado que agregues)
- `cuenta.js` → clases `Cuenta` y `CuentaPremium`
- `main.js` → pruebas manuales: crear cuentas, depositar, extraer, transferir, provocar errores a propósito

---

## Cómo arrancar (orden recomendado)

No intentes resolver todo junto. Andá por partes:

1. **Caso más simple primero**: armá la clase `Cuenta` con `depositar` y `verSaldo`. Sin validaciones todavía. Probá que funcione con casos normales.
2. **Agregá `extraer`** sin validaciones, solo la resta básica.
3. **Sumá las validaciones con `throw`**: montos negativos/cero, y saldo insuficiente. Probá cada validación por separado, provocando el error a propósito.
4. **Creá `SaldoInsuficienteError`** como clase que extienda de `Error`, y usala en vez de un `Error` genérico.
5. **Agregá `transferir`**, reutilizando `extraer` y `depositar` de dos instancias distintas.
6. **Recién al final**, armá `CuentaPremium` con herencia y sobrescritura de `extraer`.
7. **Por último**, separá todo en módulos (`errores.js`, `cuenta.js`, `main.js`).

---

## Preguntas para arrancar a pensar

Antes de escribir código, pensá:

- ¿Por qué `saldo` tiene que ser privado (`#saldo`) y no una propiedad normal? ¿Qué pasaría si cualquiera pudiera hacer `cuenta.saldo = 999999`?
- Si `verSaldo()` solo *lee* el saldo sin modificarlo... ¿te conviene un método normal o un **getter**?
- En `CuentaPremium`, ¿qué parte del método `extraer` de `Cuenta` necesitás cambiar exactamente? ¿Todo el método, o solo la condición de validación?
