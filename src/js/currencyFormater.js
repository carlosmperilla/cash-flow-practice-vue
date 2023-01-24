// Usamos Intl que es un objeto para internacionalización.
// que provee javascript, para transformar a la moneda.
// que nos parezca conveniente.
const currencyFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
});

export default currencyFormatter;
