declare module "@workspace/styles" {
  type Color = {
    primary: string;
    success: string;
    warning: string;
    danger: string;
    BADA55: string;
  };
  const color: Color;
  const fontSize: number;
  export { color, fontSize };
}
