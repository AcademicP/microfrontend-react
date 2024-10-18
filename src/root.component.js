import React, { useState } from "react";
import "./styles.css"; // Importamos los estilos

export default function Root(props) {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registro exitoso:\nNombre: ${formData.nombre}\nCorreo: ${formData.correo}`);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Sistema de Registros e Informaciones moD</h1>
        <p>Desarrollado para la Facultad FIIS - UNAS</p>
      </header>

      <section className="content">
       
        <p>
          Esta plataforma permite gestionar y consultar información relevante 
          de la Facultad FIIS de manera eficiente y accesible.
        </p>

        {/* Formulario de Registro */}
        <div className="form-container">
          <h3>Formulario de Registro</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Correo Electrónico</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <button type="submit">Registrar</button>
          </form>
        </div>

        {/* Foro de Discusión */}
        <div className="forum-container">
          <h3>Foro de Discusión</h3>
          <p>Comparte tus ideas y consulta dudas con otros estudiantes y docentes.</p>
          <ul className="forum-list">
            <li>¿Cómo implementar un sistema IoT con Angular? - Usuario 1</li>
            <li>¿Qué es Machine Learning aplicado a apicultura? - Usuario 2</li>
            <li>¿Recomendaciones para aprender React rápido? - Usuario 3</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
