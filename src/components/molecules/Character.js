function Character(character) {
  return (
    <div className="card" style={{ width: '200px' }}>
      <img src={character.image} alt={character.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">{`Origin: ${character.origin}`}</p>
      </div>
    </div>
  );
}

export default Character