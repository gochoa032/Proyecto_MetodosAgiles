function Modelo(props) {
  const txtField = "txtField" + props.name;
  const txtPlaceholder = "(Nombre de " + props.name + ")";
  const btnAgregar = "btnAgregar" + props.name;
  const btnModificar = "btnModificar" + props.name;
  const btnBorrar = "btnBorrar" + props.name;

  const formId = "forma" + props.name;
  const selectId = "select" + props.name;
  const error = "error" + props.name;

  return (
    <div className="modelo">
      <b>{props.name}</b>
      <form id={formId}>
        <select id={selectId}></select>
        <button id={btnBorrar} type="button">Eliminar</button>
        <br/>
        <input type="text" id={txtField} name={txtField} placeholder={txtPlaceholder}/>
        <button id={btnAgregar} type="button">Agregar</button>
        <button id={btnModificar} type="button">Modificar</button>
      </form>
      <label id={error} className="Error"></label>
    </div>
  );
}

function Dropbox() {
  return (
    <div>
      <section id="dropbox">
        <label>ARRASTRA AQUÍ LAS LISTAS DE ASISTENCIA</label>
        <br/>
      </section>
      <button id="uploadButton">Subir Archivos</button>
    </div>
  );
}

var modelos = (
  <div>
    <Modelo id="curso" name="Curso" />
    <Modelo id="grupo" name="Grupo" />
    <Modelo id="unidad" name="Unidad" />
  </div>
);

ReactDOM.render(modelos, document.querySelector('#modelos'));
ReactDOM.render(<Dropbox/>, document.querySelector('#dropdiv'));