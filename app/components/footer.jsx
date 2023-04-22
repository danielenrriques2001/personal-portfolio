
function Footer() {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <p className="copyright">All rights reserved { new Date().getFullYear() } Powered by - {''}
            <span>Remix Run, Strapi, PostgrestSQL </span> </p>
        </div>
    </footer>
  )
}

export default Footer