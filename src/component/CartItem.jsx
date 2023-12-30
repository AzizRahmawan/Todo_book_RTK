import { useDispatch } from "react-redux";
import { decreas, increas, removeItem } from "../features/cartSlice";


const CartItem = ({ ...item }) => {
    const dispatch = useDispatch();
    const { id, img, title, price, amount } = item;
    return (
        <div className="cart-item">
          <img src={img} alt={title} key={id}/>
          <div>
            <h4>{title}</h4>
            <h4 className="item-price">${price}</h4>
            <button onClick={() => dispatch(removeItem(id))} className="remove-btn">Remove</button>
          </div>
          <div>
            <button className="amount-btn" onClick={() => dispatch(increas(id))}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/></svg>
            </button>
            <p className="amount">{amount}</p>
            <button className="amount-btn" onClick={() => dispatch(decreas(id))}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
            </button>
          </div>
        </div>
    );
}

export default CartItem;