export function createPrintId() {
  return `print-${Math.random().toString(36).slice(2, 9)}`
}
