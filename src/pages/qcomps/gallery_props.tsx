import { AvatarProps } from "@/types/avatar";

function Avatar({person, size=100}: AvatarProps) {
  return (
    <section>
      <h2>{person.name}</h2>
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      
      <section className="profile">
        <Avatar
            person={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG'}}
            size={70} />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <Avatar
            person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}}
            size={70} />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
