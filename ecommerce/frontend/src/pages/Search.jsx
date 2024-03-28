import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../redux/ProductRoutes";
import MediaQuery from "react-responsive";
import { color } from "framer-motion";
const Search = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const history = useNavigate("");
  const { key } = useParams();
  const { products } = useSelector(({ products }) => products);
  console.log(products);
  useEffect(() => {
    dispatch(getSearch(key));
  }, [dispatch, key]);
  useEffect(() => {
    setData(products);
  }, [products]);
  return (
    <SearchSection>
      <div className="title">
        <h2 style={{ color: "white" }}>
          Search Result for: <span style={{ color: "green" }}>{key}</span>{" "}
        </h2>
      </div>
      <div className="search-container">
        <MediaQuery minWidth={991}>
          <div className="categories">
            <div className="categorys-content">
              <h3>categories</h3>
              <ul>
                <li>Used Consoles And Accessories</li>
                <li>Virtual Reality (VR)</li>
                <li>Posters</li>
                <li>Toys</li>
                <li>Nintendo Switch</li>
                <li>Xbox</li>
                <li>PC</li>
                <li>Digital Products</li>
                <li>Accessories</li>
                <li>PlayStation</li>
                <li>Gaming Chairs</li>
                <li>Others</li>
                <li>Gaming Monitors</li>
              </ul>
            </div>
          </div>
        </MediaQuery>
        <div className="search-results">
          <div className="container">
            {data &&
              data.map((item, index) => {
                return (
                  <div
                    onClick={() => history(`/product/${item._id}`)}
                    className="item"
                  >
                    <div className="show-image">
                      <img src={item.shownImage} alt="" />
                    </div>
                    <div className="product-name">
                      <h3>{item.name}</h3>
                      <h2 className="price">
                        <span className="pound">egp</span> {item.price}
                      </h2>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </SearchSection>
  );
};

export default Search;

const SearchSection = styled.div`
  width: 100%;

  .search-container {
    display: flex;
    justify-content: space-around;
    margin: auto;
    gap: 1rem;
    .categories {
      max-width: 230px;
      .categorys-content h3 {
        color: white;
        font-weight: bold;
        padding-bottom: 10px;
      }
      .categorys-content {
        padding: 18px;
        background: #0000001a;
        position: sticky;
        top: 1rem;
      }
      .categorys-content ul {
        display: flex;
        justify-content: center;
        gap: 10px;

        flex-direction: column;
      }
      .categorys-content li {
        color: white;
        border-bottom: 1.5px solid #3f3535;
        padding: 7px;
        font-size: 14px;
        transition: 0.4s all;
      }
      .categorys-content li:hover {
        color: #95ab52;
        cursor: pointer;
        padding: 10px;
      }
    }
    .search-results {
      flex: 1;
      .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
        .item {
          cursor: pointer;
        }
        .show-image {
          padding: 10px;
          background: #00000042;
          position: relative;
          display: flex;
        }
        .product-name {
          background: #232842;
          .price {
            color: #bcd767;
            font-size: 18px;
            padding: 10px;
          }
          .pound {
            font-size: 14px;
          }
        }
        .show-image img {
          height: 90%;
          margin: auto;
        }
        .show-image::before {
          content: "";
          position: absolute;
          bottom: 10%;
          left: 50%;
          height: 3px;
          width: 50%;
          transform: translateX(-50%);
          background-color: #4ae14a;
          filter: blur(5px);
        }
        h3 {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
          padding: 10px;
        }
      }
    }
    @media (min-width: 1300px) {
      .search-results {
        .container {
          grid-template-columns: repeat(3, minmax(250px, 1fr));
        }
      }
    }
    @media (max-width: 991px) {
      .search-results {
        .container {
          padding: 2rem;
        }
      }
    }
  }
`;
