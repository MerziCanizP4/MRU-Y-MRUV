// Factory function con función tipo flecha
const crearEstudiante = (nombre_alumno, edad_alumno, nota1, nota2, nota3) => {
    return {
        nombre_alumno,
        edad_alumno,
        nota1,
        nota2,
        nota3,
        promedio() {
            return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
        },
        mostrarDatos() {
            setTimeout(() => {
                console.log(`Nombre: ${this.nombre_alumno}`);
                console.log(`Edad: ${this.edad_alumno}`);
                console.log(`Nota 1: ${this.nota1}`);
                console.log(`Nota 2: ${this.nota2}`);
                console.log(`Nota 3: ${this.nota3}`);
                console.log(`Promedio: ${this.promedio()}`);
                console.log('--------------------------------');
            }, 5000); // 5 segundos
        }
    };
};

// Crear cinco estudiantes utilizando la factory function
const estudiante1 = crearEstudiante('Miriam',40, 78, 85, 90);
const estudiante2 = crearEstudiante('Jose',40, 85, 78, 82);
const estudiante3 = crearEstudiante('Estanisloa',8, 70, 90, 92);
const estudiante4 = crearEstudiante('Karolta',15, 65, 70, 75);
const estudiante5 = crearEstudiante('Alejandra',23, 88, 86, 84);

// Mostrar los datos de los estudiantes después de 5 segundos
estudiante1.mostrarDatos();
estudiante2.mostrarDatos();
estudiante3.mostrarDatos();
estudiante4.mostrarDatos();
estudiante5.mostrarDatos();
