import { useSelector } from "react-redux";

const Navbar = () => {
    //const { amount } = useSelector(function(state){return state.cart });
    const { amount } = useSelector((state) => state.cart);
    return (
        <nav>
            <h3>Redux Toolkit - Cart </h3>
            <h3>{amount}</h3>
        </nav>
    );
}

export default Navbar;