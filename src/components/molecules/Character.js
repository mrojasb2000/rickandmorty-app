function Character(character) {
  return (
    <div className="card" style={{ width: '200px', height: '280px' }}>
      <img src={character.image} alt={character.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{character.name.substring(0, 15)}...</h5>
        <p className="card-text">{`Origin: ${character.origin.substring(0, 12)}...`}</p>
      </div>
    </div>
  );
}

export default Character