export default function CustomTabPanel({ value, index, children }) {
  return value === index ? <div>{children}</div> : null;
}
