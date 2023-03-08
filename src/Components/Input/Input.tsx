import * as C from "./Input.styles"

export interface InputProps {
  tipo: string;
  altura?: number;
  largura?: number;
  classe?: string;
}

export function Input ({tipo, altura, largura, classe} : InputProps) {
  return (
    <C.Input
      type={tipo}
      height={altura}
      width={largura}
      className={classe}
    >
    </C.Input>
  )
}
