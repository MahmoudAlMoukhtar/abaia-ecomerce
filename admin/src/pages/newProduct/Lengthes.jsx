import React from "react";

const LengthesJsx = ({length, setLength, productData, setproductData}) => {
  return (
    <div className="flex flex-col gap-2">
      <label>Lengthes</label>
      <section className="flex justify-between gap-20 w-full">
        <div className="flex flex-col">
          <input
            type="number"
            placeholder="123"
            value={length}
            onChange={e => setLength(e.target.value)}
            className="border-[1px] border-gray-400 rounded-md"
          />
          <div
            className="bg-gray-200 rounded p-2 text-center font-semibold cursor-pointer mt-2"
            onClick={e => {
              const finded = productData.lengthes.find(ln => ln === length);
              if (!finded) {
                setproductData({
                  ...productData,
                  lengthes: [...productData.lengthes, length],
                });
              }
            }}
          >
            +
          </div>
        </div>
        <div className="flex gap-2 w-full">
          {productData.lengthes.map(l => (
            <p
              className="cursor-pointer rounded text-center bg-gray-300 p-2"
              onClick={() => {
                const filterLength = productData.lengthes.filter(
                  ln => ln !== l
                );

                setproductData({...productData, lengthes: filterLength});
              }}
            >
              {l}
              <div className="text-red-400">x</div>
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};
export default LengthesJsx;
