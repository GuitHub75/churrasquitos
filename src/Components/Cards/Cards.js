
import  React from "react"
import Platos from "../../Data/Platos.json"
import alitas from "../../img/alitas.jpg"

import "./Cards.css"
export default function Cards(){


    return(
        <div className='content-cards'>
              <div className='my-card'>
                  <div className='my-header-card'>
                  <img src={alitas} alt="" className="img" />
                  </div>
                  <div className='my-body-card'>
                     <label>Plato: Alitas</label>
                     <label>Guarnicion: Arroz, Frijoles</label>
                     <label>Precio: $100.50 </label>
                  </div>
                  <div className='my-footer-card'>
                     <a href="https://api.whatsapp.com/send?phone=50360542703&text=%20%F0%9F%A4%A9%F0%9F%98%8B%F0%9F%98%8B%F0%9F%98%8B%20Quiero%20ordenar%20un%20plato%20de%20alitas.%20" className="btn btn-success">Ordenar   <i class="bi bi-whatsapp" style={{color:"white"}}></i></a>
                  </div>
              </div>  
              <div className='my-card'>
                  <div className='my-header-card'>
                  <img src={alitas} alt="" className="img" />
                  </div>
                  <div className='my-body-card'>
                     <label>Plato: Alitas</label>
                     <label>Guarnicion: Arroz, Frijoles</label>
                     <label>Precio: $2.50 </label>
                  </div>
                  <div className='my-footer-card'>
                     <a href="https://api.whatsapp.com/send?phone=50360542703&text=%20%F0%9F%A4%A9%F0%9F%98%8B%F0%9F%98%8B%F0%9F%98%8B%20Quiero%20ordenar%20un%20plato%20de%20alitas.%20" className="btn btn-success">Ordenar   <i class="bi bi-whatsapp" style={{color:"white"}}></i></a>
                  </div>
              </div>  
              <div className='my-card'>
                  <div className='my-header-card'>
                  <img src={alitas} alt="" className="img" />
                  </div>
                  <div className='my-body-card'>
                     <label>Plato: Alitas</label>
                     <label>Guarnicion: Arroz, Frijoles</label>
                     <label>Precio: $2.50 </label>
                  </div>
                  <div className='my-footer-card'>
                     <a href="https://api.whatsapp.com/send?phone=50360542703&text=%20%F0%9F%A4%A9%F0%9F%98%8B%F0%9F%98%8B%F0%9F%98%8B%20Quiero%20ordenar%20un%20plato%20de%20alitas.%20" className="btn btn-success">Ordenar   <i class="bi bi-whatsapp" style={{color:"white"}}></i></a>
                  </div>
              </div>  
              
        </div>
    )
}