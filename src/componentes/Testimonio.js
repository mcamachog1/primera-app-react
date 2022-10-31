import React from "react";

export function Testimonio() {
	return (
		<div className="contenedor-testimonio">
			<img
				className="imagen-testimonio"
				src={require("../imagenes/testimonio-Camila.png")}
				alt="Foto de Camila"/>
			<div className="contenedor-texto-testimonio">
				<p className="nombre-testimonio">Camila Briceno</p>		
				<p className="cargo-testimonio">Estudiante de 5to anio</p>
				<p className="texto-testimonio">"Excelente el curso, muy buen aprendizaje para crear paginas web 1000% recomendando, ya que es otra herramienta más para tu futuro como profesional crearlas para tu uso personal, y para otros."</p>
			</div>
	

		</div>
	)
}

// export default Testimonio;