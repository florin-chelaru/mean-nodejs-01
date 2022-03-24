declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

interface Props {
  children: Any;
}