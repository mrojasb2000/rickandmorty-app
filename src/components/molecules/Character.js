function Character(character) {
  return (
    <>
      <h3>{character.name}</h3>
      <img className="rounded-xl" src={character.image} alt={character.name} width="300" height="300" />
      <p>{`Origin: ${character.origin}`}</p>
    </>
  );
}

export default Character