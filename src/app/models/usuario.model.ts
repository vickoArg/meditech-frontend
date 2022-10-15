import { imagenUsuario } from '../interfaces/imagen.interface';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;
export class Usuario {

    constructor(
        public nombre: string,
        public email: string,
        public password?: string,
        public img?: imagenUsuario,
        public google?: boolean,
        public role?: string,
        public uid?: string,
    ) {}
    
    get obtenerImagen(){
        if(this.img){
            return this.img;
        }else{
            // const datos = {
            //     url:`${ base_url }/uploads/medicos/image-not-found.jpeg`,
            //     id:''
            // }
            // let img = 
            // console.log(datos);
            const datos = {
                url:'http://res.cloudinary.com/dfptu7ftu/image/upload/v1665794202/lf1ktovtyu7hu2axzpi4.jpg',
                id:''
            }
            
            return datos;
            
            // this.img = datos;
            // return this.img;
        }
    }

}

