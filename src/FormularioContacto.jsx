import React, { useState } from 'react';

const FormularioContacto = () => {
    const [datosFormulario, setDatosFormulario] = useState({
        nombreCompleto: '',
        correoElectronico: '',
        asunto: '',
        mensaje: ''
    });

    const [erroresFormulario, setErroresFormulario] = useState({
        errorNombreCompleto: '',
        errorCorreoElectronico: '',
        errorAsunto: '',
        errorMensaje: ''
    });

    const [mensajeEnvio, setMensajeEnvio] = useState('');

    const manejarCambioInput = (event) => {
        const { name, value } = event.target;
        setDatosFormulario({ ...datosFormulario, [name]: value });
    };

    const manejarEnvioFormulario = (event) => {
        event.preventDefault();
        // Validar formulario
        let errores = {};
        let hayError = false;

        if (!datosFormulario.nombreCompleto.trim()) {
            errores.errorNombreCompleto = 'El nombre completo es obligatorio';
            hayError = true;
        }

        if (!datosFormulario.correoElectronico.trim()) {
            errores.errorCorreoElectronico = 'El correo electrónico es obligatorio';
            hayError = true;
        }

        if (!datosFormulario.asunto.trim()) {
            errores.errorAsunto = 'El asunto es obligatorio';
            hayError = true;
        }

        if (!datosFormulario.mensaje.trim()) {
            errores.errorMensaje = 'El mensaje es obligatorio';
            hayError = true;
        }

        if (hayError) {
            setErroresFormulario(errores);
        } else {
            // Lógica de envío del formulario (en una aplicación real, esto se enviaría a un backend)
            setMensajeEnvio('¡Mensaje enviado correctamente!');
            // Resetear formulario después del envío
            setDatosFormulario({
                nombreCompleto: '',
                correoElectronico: '',
                asunto: '',
                mensaje: ''
            });
            setErroresFormulario({
                errorNombreCompleto: '',
                errorCorreoElectronico: '',
                errorAsunto: '',
                errorMensaje: ''
            });
        }
    };

    return (
        <div className="contenedor-formulario-contacto">
            <h2>Formulario de Contacto</h2>
            {mensajeEnvio && <p className="mensaje-envio">{mensajeEnvio}</p>}
            <form onSubmit={manejarEnvioFormulario}>
                <div className="grupo-formulario">
                    <label htmlFor="nombreCompleto">Nombre Completo</label>
                    <input
                        type="text"
                        id="nombreCompleto"
                        name="nombreCompleto"
                        value={datosFormulario.nombreCompleto}
                        onChange={manejarCambioInput}
                    />
                    {erroresFormulario.errorNombreCompleto && <span className="error">{erroresFormulario.errorNombreCompleto}</span>}
                </div>
                <div className="grupo-formulario">
                    <label htmlFor="correoElectronico">Correo Electrónico</label>
                    <input
                        type="email"
                        id="correoElectronico"
                        name="correoElectronico"
                        value={datosFormulario.correoElectronico}
                        onChange={manejarCambioInput}
                    />
                    {erroresFormulario.errorCorreoElectronico && <span className="error">{erroresFormulario.errorCorreoElectronico}</span>}
                </div>
                <div className="grupo-formulario">
                    <label htmlFor="asunto">Asunto</label>
                    <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={datosFormulario.asunto}
                        onChange={manejarCambioInput}
                    />
                    {erroresFormulario.errorAsunto && <span className="error">{erroresFormulario.errorAsunto}</span>}
                </div>
                <div className="grupo-formulario">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={datosFormulario.mensaje}
                        onChange={manejarCambioInput}
                    />
                    {erroresFormulario.errorMensaje && <span className="error">{erroresFormulario.errorMensaje}</span>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormularioContacto;
