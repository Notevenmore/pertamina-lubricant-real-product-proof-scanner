import { useState, useEffect } from "react";
import Nav from "@/components/nav";
import { ProductType } from "@/models/product_type";
import { Product } from "@/models/product";
import Image from "next/image";
import encryptData from "@/helper/encrypt";
import { useRouter } from "next/router";

export default function Home() {
  const [productTypes, setProductTypes] = useState([]);
  const [product, setProduct] = useState([]);
  const [index, setIndex] = useState(0);
  const [load, setLoad] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!load) {
      const fetchVType = async () => {
        try {
          const typeProduct = await ProductType.all();
          const product = await Product.all();
          setProductTypes(typeProduct);
          setProduct(product);
          setLoad(true);
        } catch (e) {
          console.error("Error fetching v_type: ", e);
        }
      };
      fetchVType();
    }
  }, [load]);

  return (
    <div className="overflow-x-hidden">
      <Nav />
      <div className="w-full pt-24 ps-12 flex flex-col items-center justify-center gap-10">
        {productTypes && product && product[index] && (
          <div className="flex flex-col w-[85rem] items-center gap-7">
            <div className="flex flex-col w-[67rem] gap-12">
              <h1 className="text-black text-4xl self-start">
                <span className="font-extrabold">FASTRON </span>
                <span>SERIES</span>
              </h1>
              <div className="flex flex-row w-full border-b-[#b73628] border-b-4 pb-5 justify-around">
                {productTypes.map((value, index) => (
                  <Image key={index} src={`/lubricants/img/${value.img}`} width={146} height={69} alt={value.name} />
                ))}
              </div>
            </div>
            <div className="w-[85rem] box-border">
              <div className="flex gap-[2.4rem] items-start w-[full] h-[20rem] ps-[.9rem] py-[.6rem] overflow-x-scroll overflow-y-hidden">
                {product.map((value, i) => {
                  return (
                    <div
                      key={i}
                      className={`${i !== index && "opacity-30"} rounded-3xl text-black text-center font-semibold flex flex-col items-center justify-end gap-12 w-[200px] shadow-2xl shadow-slate-500  p-5 box-border`}
                      onClick={() => {
                        if (index !== i) setIndex(i);
                        else {
                          const data = {
                            id: value.id,
                            name: value.productType[0].name + " " + value.consistency,
                          };
                          const encryptedData = encryptData(data);
                          router.push(`/product/${encryptedData}`);
                        }
                      }}
                    >
                      <p>
                        {value.productType[0].name} {value.consistency}{" "}
                      </p>
                      <div className="bg-black w-[150px] h-[150px] flex items-center justify-center rounded-3xl">
                        <Image src={`/lubricants/img/${value.image}`} width={120} height={120} className="-translate-y-6" alt={`image of ${value.name}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col border-b-[1px] border-b-black text-black mb-7 w-full py-8">
              <div className="flex flex-row items-start justify-between">
                <h1 className="font-bold text-2xl">Deskripsi</h1>
                <p className="bg-slate-700 font-extrabold text-lg p-2 rounded-2xl text-white">
                  Harga Rekomendasi |{" "}
                  {product[index].price.map((value, i) => (
                    <span key={i}>
                      {value.amount}L Rp. {value.price.toLocaleString("id-ID")} {i < product[index].price.length - 1 ? "| " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-12 justify-between text-black w-full mb-24">
              <p className="w-1/3">{product[index].description}</p>
              <div className="flex flex-col w-1/3 gap-2">
                <div className="flex flex-row w-full justify-start items-center gap-2">
                  <Image src="/lubricants/img/icon-sae.png" width={50} height={50} alt="sae icon" />
                  <div className="flex flex-col gap-2 w-full">
                    <p className="border-b-black border-b-[1px] w-full">Consistency/SAE</p>
                    <p className="font-bold text-slate-500 text-lg">{product[index].consistency}</p>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-start items-center gap-2">
                  <Image src="/lubricants/img/icon-base-oil.png" width={50} height={50} alt="base oil icon" />
                  <div className="flex flex-col gap-2 w-full">
                    <p className="border-b-black border-b-[1px] w-full">Base Oil</p>
                    <p className="font-bold text-slate-500 text-lg">{product[index].base_oil}</p>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-start items-center gap-2">
                  <Image src="/lubricants/img/icon-specification.png" width={50} height={50} alt="specification icon" />
                  <div className="flex flex-col gap-2 w-full">
                    <p className="border-b-black border-b-[1px] w-full">Spesifikasi</p>
                    <p className="font-bold text-slate-500 text-lg">{product[index].spesification}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/3 gap-2">
                <div className="flex flex-row w-full justify-start items-start gap-2">
                  <Image src="/lubricants/img/icon-benefit.png" width={50} height={50} alt="benefit icon" />
                  <div className="flex flex-col gap-2">
                    <p className="border-b-black border-b-[1px] w-full">Kelebihan</p>
                    <ul className="list-decimal ps-10">
                      {product[index].excess.map((value, i) => (
                        <li key={i}>{value.content}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-start items-start gap-2">
                  <Image src="/lubricants/img/icon-usage.png" width={50} height={50} alt="usage icon" />
                  <div className="flex flex-col gap-2 w-full">
                    <p className="border-b-black border-b-[1px] w-full">Base Oil</p>
                    <p className="font-bold text-black text-lg">
                      {product[index].utility.map((value, index) => (
                        <span key={index}>
                          {value.content} {index < product[index].utility.length - 1 ? "/ " : ""}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
