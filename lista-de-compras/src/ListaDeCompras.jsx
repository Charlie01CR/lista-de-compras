
import { useState } from "react";

const categorias = {
  "Abarrotes": [
    "Arroz", "Frijoles", "Pasta", "Azúcar", "Sal", "Harina", "Avena",
    "Cereal", "Aceite vegetal", "Vinagre", "Salsas (tomate, soya, inglesa)",
    "Caldo en cubos", "Mayonesa", "Mostaza", "Ketchup"
  ],
  "Lácteos y Huevos": [
    "Leche", "Yogur", "Queso", "Mantequilla", "Huevos"
  ],
  "Carnes y Embutidos": [
    "Pollo", "Carne de res", "Cerdo", "Salchichas", "Jamón", "Tocino"
  ],
  "Frutas y Verduras": [
    "Plátanos", "Manzanas", "Naranjas", "Papas", "Zanahorias", "Tomates",
    "Cebollas", "Lechuga", "Repollo"
  ],
  "Panadería": [
    "Pan blanco", "Pan integral", "Bollería", "Galletas"
  ],
  "Bebidas": [
    "Agua embotellada", "Jugos", "Refrescos", "Café", "Té"
  ],
  "Limpieza": [
    "Detergente para ropa", "Suavizante", "Jabón en barra", "Jabón líquido",
    "Limpiador multiusos", "Desinfectante", "Esponjas", "Escobas", "Trapeadores"
  ],
  "Higiene Personal": [
    "Pasta dental", "Cepillos de dientes", "Papel higiénico", "Champú",
    "Acondicionador", "Jabón corporal", "Desodorante", "Toallas sanitarias",
    "Pañales"
  ],
  "Otros": [
    "Bolsas plásticas", "Fósforos", "Velas", "Baterías"
  ]
};

export default function ListaDeCompras() {
  const [seleccionados, setSeleccionados] = useState([]);

  const toggleProducto = (producto) => {
    if (seleccionados.includes(producto)) {
      setSeleccionados(seleccionados.filter((item) => item !== producto));
    } else {
      setSeleccionados([...seleccionados, producto]);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Lista de Compras</h1>

      {Object.entries(categorias).map(([categoria, productos]) => (
        <div key={categoria} className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{categoria}</h2>
          <div className="grid grid-cols-2 gap-2">
            {productos.map((producto) => (
              <button
                key={producto}
                onClick={() => toggleProducto(producto)}
                className={\`border rounded-xl p-2 text-left transition-all duration-200 \${seleccionados.includes(producto)
                  ? "bg-green-200 border-green-600"
                  : "bg-white hover:bg-gray-100"}\`}
              >
                {producto}
              </button>
            ))}
          </div>
        </div>
      ))}

      <h2 className="text-xl font-semibold mb-2 mt-6">📝 Tu lista final:</h2>
      {seleccionados.length === 0 ? (
        <p className="text-gray-500">Aún no has seleccionado ningún producto.</p>
      ) : (
        <ul className="list-disc list-inside">
          {seleccionados.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
