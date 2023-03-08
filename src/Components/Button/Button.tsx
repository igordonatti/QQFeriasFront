import * as C from "./Button.styles"

export interface ButtonProps {
  text: string;
  altura?: number;
  largura?: number;
}

export function Button ({text, altura, largura}:ButtonProps) {
  return (
    <C.Button 
    >{text}</C.Button>
  ) 
}
