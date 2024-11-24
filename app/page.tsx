import image1 from "@/public/images/aein4.jpg";
import Images from "@/components/UI/image";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <Images src={image1} alt="" priority={true} className="rounded-lg" />
    </div>
  );
}
