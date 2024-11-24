import Image, { ImageProps } from "next/image";
type Imagetype = {
  alt?: string;
} & ImageProps;

export default function Images({ alt, ...props }: Imagetype) {
  return <Image {...props} alt={alt} />;
}
