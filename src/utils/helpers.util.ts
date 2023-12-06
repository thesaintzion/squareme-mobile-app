// export const formatCurrency  = (data: number = 0) => {
//   return new Intl.NumberFormat('en-NG', {
//     style: 'currency',
//     currency: 'NGN',
//     maximumFractionDigits: 0
//   }).format(data);
// }

export const formatCurrency = (data: number = 0) => {
  return data.toLocaleString('NGN', {  maximumFractionDigits: 0 });
}

