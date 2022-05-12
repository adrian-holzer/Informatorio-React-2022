import React from "react";

function Noticia() {
  const noticia = {
    titulo: "Este es el título de la noticia",
    descripcion: "Descripción de la noticia",
  };

  const { titulo, descripcion } = noticia;


  return (
    <>
      <div className="col-3">
        <div className="card mx-3 my-4" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + "/img/blog6.jpg"}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Noticia;
