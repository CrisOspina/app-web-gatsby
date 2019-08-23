import React, { useContext } from 'react'
import { CartContext } from '../context'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MenuItem, StyledHeader } from '../styles/components'

const Header = () => {
  const { cart } = useContext(CartContext)
  return (
    <StyledHeader>
      <Link to="/">
        <img
          src="https://i.postimg.cc/6q3pg48v/Logo.png"
          alt="logoPlatziSwag"
        />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/"> Productos </Link>
          </MenuItem>
          <MenuItem margin>
            <a href="http://www.platzi.com"> Platzi </a>
          </MenuItem>
          <MenuItem>
            <Link to="/carrito">
              <span>
                <img
                  src="https://i.postimg.cc/L6wpMxLt/cart.png"
                  alt="cartLogo"
                />
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
