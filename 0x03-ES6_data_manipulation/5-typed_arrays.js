// a function named createInt8TypedArray that returns a new ArrayBuffer
// with an Int8 value at a specific position.
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  try {
    dataView.setInt8(position, value);
  } catch (err) {
    throw Error('Position outside range');
  }
  return dataView;
}
