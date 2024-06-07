// import React, { useState } from 'react';

// interface CalculatorProps {}

// const Calculator: React.FC<CalculatorProps> = () => {
//   const [input1, setInput1] = useState<number>(0);
//   const [input2, setInput2] = useState<number>(0);
//   const [result, setResult] = useState<number | null>(null);

//   const handleAddition = () => {
//     const sum = input1 + input2;
//     setResult(sum);
//   };

//   return (
//     <div>
//       <h1>Simple Calculator</h1>
//       <label>
//         Input 1:
//         <input
//           type="number"
//           value={input1}
//           onChange={(e) => setInput1(Number(e.target.value))}
//         /> 
//       </label>
//       <br />
//       <label>
//         Input 2:
//         <input
//           type="number"
//           value={input2}
//           onChange={(e) => setInput2(Number(e.target.value))}
//         />
//       </label>
//       <br />
//       <button onClick={handleAddition}>Add</button>
//       <br />
//       {result !== null && <h2>Result: {result}</h2>}
//     </div>
//   );
// };

// export default Calculator;