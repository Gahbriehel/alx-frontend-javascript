export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const func = mathFunction();
    queue.push(func);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
