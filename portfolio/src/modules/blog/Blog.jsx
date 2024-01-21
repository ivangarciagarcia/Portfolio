import { SearchBar } from '../../components/searchBar/SearchBar';
import './blog.css'

export const Blog = () => {
    return(
      <div className="content-wrapper">
        <h1 className='blog-titulo'>Blog personal</h1>
        <p className='blog-subtitulo'>Bienvenidos a mi blog, este es un espacio donde publico cosas que me parecen interesantes.</p>
        <SearchBar/>
        <h1 className='mantenimiento'>⚠️ Mantenimiento del blog ⚠️</h1>
      </div>
    );
}