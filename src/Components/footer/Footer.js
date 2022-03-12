import './Footer.css'

export default function Footer() {

    return(
        <div className='footer'>
              <div className='paragraph'>
                   <p>Buscanos en:</p>
              </div>
              <div className='social-network'>
                  <a><i class="bi bi-facebook"></i></a>
                  <a><i class="bi bi-whatsapp" style={{color:"green"}}></i></a>
                  <a><i class="bi bi-instagram"></i></a>
              </div>
        </div>
    )
}