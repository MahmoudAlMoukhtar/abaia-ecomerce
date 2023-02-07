import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Chart from "../../components/chart/Chart";
//import {productData} from "../../dummyData";
import * as api from "../../api/index";
import "./product.css";

// import { Publish } from "@material-ui/icons";

export default function Product() {
  const {productId} = useParams();
  const [dataProduct, setDataProduct] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await api.fetchProductById(productId);
        setDataProduct(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
    console.log("test");
  }, []);

  const handleUpdate = async e => {
    e.preventDefault();
    setLoading(true);
    const res = await api.updateProduct(productId, dataProduct);
    setLoading(false);
    setDataProduct(res.data);
    console.log("res.data", res.data);
  };

  const handleUpload = e => {
    const file = e.target.files[0];
    const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!validFileTypes.find(type => type === file.type)) {
      setError("File must be in JPG/PNG format");
      return;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setDataProduct({...dataProduct, image: reader.result});
      };
    }
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800 product">Loading</h1>;

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={dataProduct} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={dataProduct.image} alt="" className="productInfoImg" />
            <span className="productName">{dataProduct.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{dataProduct._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">
                {dataProduct.sales > 0 ? dataProduct.sales : 0}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">
                {dataProduct.stock > 0 ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="addProductItem">
            <label>Image</label>
            <input
              type="file"
              id="image"
              name="image"
              htmlFor="image"
              onChange={handleUpload}
            />
          </div>
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Apple AirPod"
              onChange={e =>
                setDataProduct({...dataProduct, name: e.target.value})
              }
            />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option
                value="no"
                onClick={e => setDataProduct({...dataProduct, stock: 0})}
              >
                No
              </option>
            </select>
            <label>Active</label>
            <select
              name="active"
              id="active"
              onChange={e =>
                setDataProduct({...dataProduct, active: e.target.value})
              }
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={
                  dataProduct.image
                    ? dataProduct.image
                    : "/Placeholder_view_vector.svg.png"
                }
                alt=""
                className="productUploadImg"
              />
              <label for="file"></label>
              <input type="file" id="file" style={{display: "none"}} />
            </div>
            <button
              className="productButton"
              type="submit"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
/* <Publish/> */
