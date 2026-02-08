function Card({ elem }) {
  return (
    <div>
      <a href={elem.url} target="_blank" rel="noopener noreferrer">
        <div className="h-40 w-44 overflow-hidden rounded-xl">
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            // SMALL IMAGE = FAST LOAD
            src={`https://picsum.photos/id/${elem.id}/300/200`}
            alt={elem.author}
          />
        </div>
        <h2 className="font-bold text-lg">{elem.author}</h2>
      </a>
    </div>
  );
}

export default Card;
