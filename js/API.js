const url = "http://localhost:4000/clientes";

//cuando se crea un uevo cliente
export const nuevoCliente = async (cliente) => {
  //   console.log(cliente);
  try {
    await fetch(url, {//objeto de configuracion
      method: "POST",//POST para crear un nuevo registro
      body: JSON.stringify(cliente),//contenido de la peticion, se puede enviar como string o como objeto
      headers: {
        "Content-Type": "application/json",//informacion de que tipo de datos estamos enviando,
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

//obtiene todos los clientes
export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(url);
    const clientes = await resultado.json();
    return clientes;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarCliente = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

//obtiene un cliente por su id

export const obtenerCliente = async (id) => {
  try {
    const resultado = await fetch(`${url}/${id}`);
    const cliente = await resultado.json();
    // console.log(cliente);
    return cliente;
  } catch (error) {
    console.log(error);
  }
};

//actualiza un registro
export const editarCliente = async (cliente) => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente), // data puede ser string o un objeto
      headers: {
        "Content-Type": "application/json", // Y le decimos que los datos se enviaran como JSON
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};
