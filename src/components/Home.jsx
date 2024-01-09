import React, { Component } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

export default class Home extends Component {
    
    render() {
        const handleShare = () => {
            if (navigator.share) {
              navigator.share({
                title: 'Parrilla Turco´s',
                text: 'A las brasas',
                url: 'https://tu-url.com', // Reemplaza con la URL de tu web
              })
                .then(() => console.log('Enlace compartido con éxito'))
                .catch((error) => console.error('Error al compartir:', error));
            } else {
              // Fallback para navegadores que no admiten Web Share API
              console.log('Web Share API no es compatible en este navegador');
              // Puedes mostrar un mensaje de fallback o redirigir a una página de compartir personalizada
            }
          };
            
          const handleCall = () => {
            // Redirigir al usuario para realizar una llamada
            window.location.href = 'tel:+541169530210'; // Reemplaza con el número de teléfono correcto
          };
        return (
            <div className='bg-gray-50'>
                <div className='grid grid-cols-3 px-8 md:px-12 py-3'>
                    <div className='col-span-1 flex items-center justify-center'>
                        <img className='w-20 h-20 flex-none rounded-full' src="./logoTurcNegr.jpg" alt="" />
                    </div>
                    <div className='grid col-span-2 items-center justify-center'>
                        <h1 className='text-3xl font-semibold'>Parrilla Turco´s</h1>
                    </div>
                </div>
                <div className='grid grid-cols-3 py-4 px-12'>
                    <a className='grid col-span-1 items-center justify-center' href="https://wa.me/541158046007?text=Quiero%20realizar%20un%20pedido" target="_blank"><FaWhatsapp className='h-6 w-6' /></a>
                    <button className='grid col-span-1 items-center justify-center' onClick={handleShare}>
                        <FaShareAlt className='h-6 w-6' />
                        </button>
                    <button className='grid col-span-1 items-center justify-center' onClick={handleCall}>
                        <FaPhoneAlt className='h-6 w-6' />
                        </button>
                </div>
            </div>
        )
    }
}
