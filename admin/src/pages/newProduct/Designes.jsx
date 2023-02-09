import React from "react";

const DesignJsx = ({design, setDesign, productData, setproductData}) => {
  return (
    <div className="addProductItem w-full">
      <label>Designes</label>
      <section className="flex justify-between gap-20 w-full">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Design"
            value={design}
            onChange={e => setDesign(e.target.value)}
            className="border-[1px] border-gray-400 rounded-md"
          />
          <div
            className="bg-gray-200 rounded p-2 text-center font-semibold cursor-pointer mt-2"
            onClick={e => {
              const finded = productData.designes.find(des => des === design);
              if (!finded) {
                setproductData({
                  ...productData,
                  designes: [...productData.designes, design],
                });
              }
            }}
          >
            +
          </div>
        </div>
        <div className="flex gap-2 w-full">
          {productData.designes.map(d => (
            <p
              className="cursor-pointer rounded text-center bg-gray-300 p-2"
              onClick={() => {
                const filterDesignes = productData.designes.filter(
                  des => des !== d
                );

                setproductData({...productData, designes: filterDesignes});
              }}
            >
              {d}
              <div className="text-red-400">x</div>
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};
export default DesignJsx;
