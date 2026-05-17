/*
3) ------- Analizador de dataset (ventas o alumnos) (nivel avanzado) -------
Objetivo
------- Cargar un conjunto de datos en memoria y generar reportes automáticos. -------

Temas que practicás: Arrays avanzados (map, filter, reduce, forEach) / Sets y Maps / Desestructuración y spread / Funciones modulares / 
Manejo de errores / Consola avanzada (table, group, time, assert) / Estructura de proyecto por módulos

------- Especificaciones -------
Dataset ejemplo: ventas con campos id, producto, categoria, precio, cantidad, fecha, vendedor.
Reportes mínimos:
Total vendido
Top 3 productos por facturación
Ventas por categoría (usar Map)
Vendedores únicos (usar Set)
Detección de datos inválidos (precio <= 0, cantidad <= 0, faltantes)
Bonus:
Exportar reporte resumido como objeto final
Usar try/catch para capturar errores de validación de registros
Pista para iniciar

Primero diseñá 8–12 registros “limpios”.
Luego creá una función validarRegistro.
Después armá reportes de a uno (total, luego porCategoria, luego top3), no todo junto.

*/