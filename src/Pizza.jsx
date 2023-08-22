import { useState, useEffect } from "react";

function Pizza (props){
  const [orderLoaded, setOrderLoaded] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setOrderLoaded(props.tipoPizza);
    }, 2000);
    console.log('se actualiza por unica vez');
  }, [props.tipoPizza]);

  useEffect(() => {
    console.log('El componente se actualizó');
  });

  const handleCancelClick = () => {
    setOrderLoaded("Cancelando pedido...");
    console.log('Pedido desmontado');
  };

  return (
    <div>
      <div>
      {orderLoaded}
      </div>
      <button onClick={handleCancelClick}>Cancelar Pedido</button>
    </div>
  )
}
export default Pizza;