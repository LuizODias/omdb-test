import { Dispatch, SetStateAction } from 'react';
import findIcon from '../../../static/findIcon.svg';

export interface SearchBarProps {
  title: string,
  type: string,
  setTitle: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<string>>,
  getMovie: () => void
}

export const SearchBar = (props: SearchBarProps) => {
  const {type, title, setType, setTitle, getMovie} = props;
  return (
    <div className='search-bar'>
        <select name="select" value={type} defaultValue={"movie"} onChange={(e) => setType(e.target.value)}>
          <option value="movie">Filme</option>
          <option value="series">Série</option>
        </select>

        <input 
          onKeyDown={(e) => { if(e.code === "Enter") getMovie() }} 
          type='text' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder='Procure por filmes ou séries' />

        <img 
          className="search-icon" 
          onClick={() => { if (title.length) getMovie() }} 
          src={findIcon} width={17} height={17} />
      </div>
  );
}
