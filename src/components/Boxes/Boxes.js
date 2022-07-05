import React from "react";
import boxes from "./boxesData";
import BoxOn from "./BoxOn";

function Boxes() {
  const [squares, setSquares] = React.useState(boxes);

  // const toggle = id => {
  //   setSquares(prevSquares => {
  //     const newSquares = [];
  //     for (let i = 0; i < prevSquares.length; i++) {
  //       const currentSquare = prevSquares[i];
  //       if (currentSquare.id === id) {
  //         const updatedSquare = {
  //           ...currentSquare,
  //           on: !currentSquare.on
  //         };
  //         newSquares.push(updatedSquare);
  //       } else {
  //         newSquares.push(currentSquare);
  //       }
  //     }
  //     return newSquares;
  //   });
  // };

  const toggle = id => {
    setSquares(prevSquares => {
      return prevSquares.map(item => {
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  };

  const squareElements = squares.map(item => {
    return <BoxOn toggle={() => toggle(item.id)} key={item.id} on={item.on} />;
  });

  return (
    <div>
      <h2>Boxes are going to appear here</h2>
      <div className="boxes">{squareElements}</div>
    </div>
  );
}

export default Boxes;
