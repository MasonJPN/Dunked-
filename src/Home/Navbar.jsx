
import ShoppingBag from "../assets/shopping-bag.png"
import { useNavigate } from 'react-router-dom'



const Navbar = () => {


  const navigate = useNavigate()


  return (
    <nav className="navbar-container">
        <h1>DUNKED</h1>
<ul className="nav-left">
    <li>TOP</li>
    <li onClick={() => navigate('/about')}>ABOUT</li>
    <li onClick={() => navigate('/clothes')}>JERSEYS</li>
    <li onClick={() => navigate('/')}>SHOES</li>
</ul>

<div className="nav-right">
 <img src={ShoppingBag} onClick={() => navigate('/cart')}/>
</div>
    </nav>
  )
}

export default Navbar