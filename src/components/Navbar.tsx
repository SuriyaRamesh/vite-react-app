interface NavbarProps {
    cartItemsCount: number;
}

const Navbar = ({cartItemsCount} : NavbarProps) => {
  return (
    <div>
      NavBar {cartItemsCount}
    </div>
  )
}

export default Navbar
