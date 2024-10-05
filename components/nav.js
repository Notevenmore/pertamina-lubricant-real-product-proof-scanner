import Image from "next/image";
export default function Nav() {
  return (
    <nav className="bg-red-600 w-screen h-16 flex  justify-between items-center">
      <Image src="/img/pertamina-lubricants.png" width={220} height={50} alt="Brand Logo" className="h-full" />
      <button className="font-black justify-self-center pe-10">Produk Otomatif</button>
    </nav>
  );
}
