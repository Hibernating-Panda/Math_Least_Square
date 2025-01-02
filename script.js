const form = document.getElementById('matrix-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const matrixRow1 = document.getElementById('matrix-row-1').value.trim();
  const matrixRow2 = document.getElementById('matrix-row-2').value.trim();
  const matrixRow3 = document.getElementById('matrix-row-3').value.trim();
  const vectorInput = document.getElementById('vector-input').value.trim();

  const matrixData = [
    matrixRow1.split(' ').map(Number),
    matrixRow2.split(' ').map(Number),
    matrixRow3.split(' ').map(Number),
  ];

  const vectorData = vectorInput.split(' ').map(Number);

  // Using mathjs for matrix operations
  const A = math.matrix(matrixData);
  const b = math.matrix(vectorData);
  const A_T = math.transpose(A);
  const A_T_A = math.multiply(A_T, A);
  const A_T_b = math.multiply(A_T, b);
  const x = math.multiply(math.inv(A_T_A), A_T_b);

  resultDiv.textContent = `The least squares solution is: [${x.toArray().join(', ')}]`;
});
