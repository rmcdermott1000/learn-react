import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];



export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  function removeItem(artistId:number){
    let newList = []
    for(let i=0; i<artists.length; i++){
      if (artists[i].id != artistId){
        newList.push(artists[i])
      }
    }
  
    setArtists(newList);
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              removeItem(artist.id)
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
