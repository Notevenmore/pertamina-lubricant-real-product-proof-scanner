import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { ProductSell } from "@/models/product_sell";

import Nav from "@/components/nav";

export default function Products({ data }) {
  const router = useRouter();
  const [product, setProduct] = useState();
  const [barcodeSource, setBarcodeSource] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (router.isReady) {
      const currentUrl = window.location.href;
      axios
        .get(`https://api.qrserver.com/v1/create-qr-code?data=${encodeURIComponent(currentUrl)}&size=200x200`)
        .then((response) => {
          const barcodeUrl = response.config.url;
          setBarcodeSource(barcodeUrl);
        })
        .catch((error) => console.error(err));
    }
  }, [router.isReady]);

  useEffect(() => {
    if (!load) {
      const fetchData = async () => {
        const product_sell = await ProductSell.whereId(data);
        if (product_sell) setProduct(product_sell);
        else {
          setErrorMessage("PRODUCT TIDAK VALID");
          setError(true);
        }
        setLoad(true);
      };
      fetchData();
    }
  }, [data, load]);

  return (
    <div className="w-screen h-[calc(100vh-10vh)]">
      <Nav />
      {barcodeSource && product && !error ? (
        <div className=" flex items-center justify-center w-full p-10 gap-24">
          <div className="flex flex-col gap-2 items-center justify-center w-1/4">
            <div className="bg-black w-[300px] h-[300px] flex items-center justify-center rounded-3xl">
              <Image src={`/lubricants/img/${product.image}`} width={250} height={250} className="-translate-y-12" alt={`image of ${product.name}`} />
            </div>
            <p className="text-black font-bold text-4xl text-center">{product.product_name}</p>
            <p className="text-black font-bold text-xl text-center">{product.is_sold ? "Terkonfirmasi telah dibeli" : "Terkonfirmasi belum dibeli"}</p>
            <p className="px-10 py-2 font-black text-xl text-center border-red-500 border-2 rounded-xl text-red-500">VERIFIED</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 w-3/4">
            <div className="flex flex-col items-center">
              <div className="flex flex-col border-b-[1px] border-b-black text-black mb-7 w-full py-8">
                <div className="flex flex-row items-start justify-between">
                  <h1 className="font-bold text-2xl">Deskripsi</h1>
                  <p className="bg-slate-700 font-extrabold text-lg p-2 rounded-2xl text-white">
                    Harga Rekomendasi |{" "}
                    {product.price.map((value, i) => (
                      <span key={i}>
                        {value.amount}L Rp. {value.price.toLocaleString("id-ID")} {i < product.price.length - 1 ? "| " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-12 justify-between text-black w-full mb-24">
                <div className="w-2/5 flex flex-col gap-5">
                  <p>{product.description}</p>
                  <Image src={barcodeSource} alt="Barcode" width={200} height={200} />
                </div>
                <div className="flex flex-col w-2/5 gap-2">
                  <div className="flex flex-row w-full justify-start items-center gap-2">
                    <Image src="/lubricants/img/icon-sae.png" width={50} height={50} alt={`SAE Icon`} />
                    <div className="flex flex-col gap-2 w-full">
                      <p className="border-b-black border-b-[1px] w-full">Consistency/SAE</p>
                      <p className="font-bold text-slate-500 text-lg">{product.consistency}</p>
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-start items-center gap-2">
                    <Image src="/lubricants/img/icon-base-oil.png" width={50} height={50} alt={"base oil icon"} />
                    <div className="flex flex-col gap-2 w-full">
                      <p className="border-b-black border-b-[1px] w-full">Base Oil</p>
                      <p className="font-bold text-slate-500 text-lg">{product.base_oil}</p>
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-start items-center gap-2">
                    <Image src="/lubricants/img/icon-specification.png" width={50} height={50} alt="specification icon" />
                    <div className="flex flex-col gap-2 w-full">
                      <p className="border-b-black border-b-[1px] w-full">Spesifikasi</p>
                      <p className="font-bold text-slate-500 text-lg">{product.spesification}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-2/5 gap-2">
                  <div className="flex flex-row w-full justify-start items-start gap-2">
                    <Image src="/lubricants/img/icon-benefit.png" width={50} height={50} alt="benefit icon" />
                    <div className="flex flex-col gap-2">
                      <p className="border-b-black border-b-[1px] w-full">Kelebihan</p>
                      <ul className="list-decimal ps-10">
                        {product.excess.map((value, i) => (
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
                        {product.utility.map((value, index) => (
                          <span key={index}>
                            {value.content} {index < product.utility.length - 1 ? "/ " : ""}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          <div className="w-96 h-14 font-black text-red-500 border-red-500 border-2 px-10 py-3 rounded-xl flex items-center justify-center group hover:bg-red-500 group-hover:bg-red-500 duration-300 cursor-pointer">
            <p className="text-center group-hover:text-white duration-300">PRODUCT TIDAK DITEMUKAN / BARCODE PALSU</p>
          </div>
          <p className="text-black font-semibold text-lg w-96 text-center">Perhatikan keaslian produk. Produk yang benar, akan dapat terlihat pada website pertaminalubricants.com melalui barcode yang telah disediakan</p>
        </div>
      ) : null}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = context.params;
  return {
    props: {
      data: data.join("/"),
    },
  };
}
