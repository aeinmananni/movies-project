import Image, { ImageProps } from "next/image";
type Imagetype = {
  alt?: string;
  width?: number;
  height?: number;
} & ImageProps;

export default function Images({ alt, ...props }: Imagetype) {
  return (
    <Image
      {...props}
      alt={alt}
      width={props.width ?? 300}
      height={props.height ?? 300}
    />
  );
}
