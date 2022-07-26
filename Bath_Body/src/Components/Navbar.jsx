import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { Dropdown } from "./DropdownMenu";
import CATEGORY from "../data/homepage.json";
import data from "../Fresh.json";
import ProductsCard from "./ProductsCard";
import { logout } from "../Redux/Authreducer/actions";
export const Navbar = () => {
  let Data = CATEGORY.searchData;
  const {token}=useSelector(state=>state.AuthReducer)
const dispatch=useDispatch()
  let freshData = data;

  const [searchToggle, setToogle] = useState(true);
  const { cartProducts } = useSelector((state) => state);
  let Navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div className={styles.adDiv}>
        <div>
          <p>Limited time only! </p>
          <h3>FREE SHIPPING ON $50 ORDER</h3>
          <h4>Code:WALK</h4>
          <Link to={"/"}>DETAILS</Link>
        </div>
      </div>

      <div className={styles.pickupDiv}>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/67/67696.png"
            alt=""
          />
          <h5>PICK UP IN STORE</h5>
          <Link to={"/"}>Set Store</Link>
        </div>
      </div>
      <div className={styles.logoNameDiv}>
        <img
          onClick={() => Navigate("/")}
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwf1f0e62b/images/svg-icons/Logos-main.svg?yocs=o_s_"
          alt=""
        />
        {searchToggle ? (
          <div>
            <div className={styles.inputDiv}>
              <input
                onClick={() => setToogle(false)}
                type="text"
                placeholder="Search by fragrance or product..."
              />
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw729fd72d/images/svg-icons/UI-Search-v2.svg?yocs=o_s_"
                alt=""
              />
            </div>
            <div>
              {
                token?  <div className={styles.hover} onClick={()=>dispatch(logout())}>
                <img
                  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwc807e833/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
                  alt=""
                />
                      Logout
                {/* <div className={styles.hoverDiv}>
                  <Link to={"/Profile"}>Order Tracking</Link>
                <Link to={"/Profile"}>My Auto Refresh</Link>
                <Link to={"/Profile"}>My Love-It List</Link>
                </div> */}
              </div>:
             
              <Link to={"/login"}>
                <div className={styles.hover}>
                  <img
                    src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwc807e833/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
                    alt=""
                  /> Login

                  <div className={styles.hoverDiv}>
                    {/* <Link to={"/Profile"}>Order Tracking</Link>
                  <Link to={"/Profile"}>My Auto Refresh</Link>
                  <Link to={"/Profile"}>My Love-It List</Link> */}
                  </div>
                </div>
              </Link>
               }
              <Link to="/cart">
                <div className={styles.cart}>{cartProducts}</div>
              </Link>
            </div>
          </div>
        ) : (
          <div onBlur={() => setToogle(true)}>
            <div className={styles.changeSbar}>
              <input
                type="text"
                placeholder="Search by fragrance or product..."
              />
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw729fd72d/images/svg-icons/UI-Search-v2.svg?yocs=o_s_"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
      {searchToggle ? (
        ""
      ) : (
        <div className={styles.downDiv}>
          <div className={styles.product}>
            {freshData.map((el, i) => {
              if (i < 4) {
                return (
                  <div>
                    <ProductsCard key={i} {...el} />
                  </div>
                );
              } else {
                return <></>;
              }
            })}
          </div>
          <div className={styles.Shistory}>
            <h4> POPULAR SEARCHES</h4>
            {Data.map((el, i) => {
              return (
                <div key={i}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7381/7381400.png"
                    alt=""
                  />
                  <div>{el}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Dropdown />
    </div>
  );
};
