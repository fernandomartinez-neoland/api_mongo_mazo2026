export function palindromo(palabra){
const textoLimpio = palabra.toLowerCase().replace(/[\W_]/g, '');
  
  // 2. Volteamos la palabra
  const textoReverso = textoLimpio.split('').reverse().join('');
  
  // 3. Comparamos
  return textoLimpio === textoReverso;
}