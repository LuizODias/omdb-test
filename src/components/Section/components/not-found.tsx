export const NotFound = ({type, title}: {type: string, title:string}) => {
  var notfound = title;
  return (
    <div className='movie-details'>
      <div style={{ margin: "auto" }}>
        <h2> 
          {type === "movie" ?
            "Filme " : "Série "
          }
          "{notfound}" não encontrado, tente novamente. 
          </h2>
      </div>
    </div>
  );
}
