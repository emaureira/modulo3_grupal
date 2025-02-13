export class Doctor {
  constructor(nombre, especialidad, experiencia, precioConsulta) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this._experiencia = experiencia;
    this.precioConsulta = precioConsulta;
    this.pacienes = [];
  }

  mostarDatos() {
    console.log(
      `Dr. Nombre: ${this.nombre}, Especialidad: ${this.especialidad}, Experiencia: ${this._experiencia}`
    );
  }

  agregarPaciente(paciente) {
    this.pacienes.push(paciente);
  }

  mostrarPacientes() {
    console.log(`Pacientes del doctor ${this.nombre}`);
    this.pacienes.forEach(({ nombre }) => {
      console.log(nombre);
    });
  }

  get experiencia() {
    return this._experiencia;
  }

  set experiencia(experience) {
    this._experiencia = experience;
  }

  totalIngresos() {
    return this.pacienes.length * this.precioConsulta;
  }
}
