async function myFunction(param1, param2, param3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof(param1) !== "number") reject(Error("Parametro 1 invalido, informe apenas números"));
    if (typeof(param2) !== "number") reject(Error("Parametro 2 invalido, informe apenas números"));
    if (typeof(param3) !== "number") reject(Error("Parametro 3 invalido, informe apenas números"));

    const resultado = (param1 + param2) *  param3;

    if(resultado < 50) reject(Error("Valor muito baixo"));

    resolve(resultado)
  });
  return promise;
}

myFunction(5, 5, 10)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));