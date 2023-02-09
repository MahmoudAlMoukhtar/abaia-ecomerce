import React from "react";

const sizesStand = ["S", "M", "L", "XL", "XXL", "3XL"];

const SizesJsx = ({productData, setproductData}) => {
  return (
    <div className="flex flex-col gap-2">
      <label>Select Sizes</label>
      <section className="flex justify-between">
        <div className="flex gap-2 py-4">
          {sizesStand.map(s => (
            <option
              className="bg-white p-2 rounded font-semibold text-center cursor-pointer shadow-md shadow-gray-400 "
              value={s}
              onClick={e => {
                const finded = productData.sizes.find(
                  size => size === e.target.value
                );
                if (!finded) {
                  setproductData({
                    ...productData,
                    sizes: [...productData.sizes, e.target.value],
                  });
                }
              }}
            >
              {s}
            </option>
          ))}
        </div>
        <div className="flex gap-2 py-4">
          {productData.sizes.map(s => (
            <div
              onClick={() => {
                const filterSize = productData.sizes.filter(size => size !== s);
                setproductData({...productData, sizes: filterSize});
              }}
              className="flex flex-col gap-1 bg-gray-200 p-2 rounded font-semibold text-center cursor-pointer shadow-md shadow-gray-400 "
            >
              <option value={s} className="text-center" key={s}>
                {s}
              </option>
              <div className="text-red-400 font-semibold text-center">x</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default SizesJsx;
