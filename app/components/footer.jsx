
function Footer() {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <p className="copyright">All rights reserved { new Date().getFullYear() } Powered by - {''}
            <span className='title-word'>Remix Run</span>
            <span className='title-word'>Strapi</span>
            <span className='title-word'>Progrest SQL</span>
           </p>
        </div>
    </footer>
  )
}

export default Footer