import { BLUE, WHITE } from "config"

const Footer = () => {
  return (
    <footer className="flex-shrink-0 relative bottom-[50%] w-full">
      <div 
        className="flex bottom-0 items-center justify-between h-20 bg-dark-1200"
        style={{
            width: '100%',
            backgroundColor: BLUE,
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: WHITE,
        }}
      >
        {'Footer'}
      </div>
  </footer>
  )
}

export default Footer
