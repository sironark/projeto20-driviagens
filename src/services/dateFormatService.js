
export default function converterDataFormato(data) {
  // this function transforms the date format 'yyyy-mm-dd' to 'dd-mm-yyyy'
  const dataObj = new Date(data);
  
  const dia = String(dataObj.getDate()).padStart(2, '0');
  const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
  const ano = dataObj.getFullYear();

  const dataFormatada = `${dia}-${mes}-${ano}`;
  
  return dataFormatada;
}

export function converterDataDefault(dataNoFormatoOriginal) {
  // this function transforms the date format 'dd-mm-yyyy' to 'yyyy-mm-dd'
  const partes = dataNoFormatoOriginal.split('-');
  
  const dia = partes[0];
  const mes = partes[1];
  const ano = partes[2];
  
  const dataFormatoNovo = `${ano}-${mes}-${dia}`;
  //console.log(dataFormatoNovo)
  
  return dataFormatoNovo;

}