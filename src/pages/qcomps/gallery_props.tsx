import { AvatarProps } from "@/types/avatar";
import {ListItemProps} from "@/types/listItem";

function ListItem({label, content}: ListItemProps) {
  return (
    <li>
      <b>{label}: </b>
      {content}
    </li>
  );
}

function Avatar({person, profession, awards, discovered, size=100}: AvatarProps) {
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
    <ul>
      <ListItem label={profession.label} content={profession.content} />
      <ListItem label={awards.label} content={awards.content} />
      <ListItem label={discovered.label} content={discovered.content} />
    </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
        <Avatar
            person={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG'}}
            profession={{ label: 'Profession: ', content: 'physicist and chemist'}}
            awards={{ label: 'Awards: ', content: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'}}
            discovered={{ label: 'Discovered: ', content: 'polonium (element)'}}
            size={70} />
      
        <Avatar
            person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}}
            profession={{ label: 'Profession: ', content: 'geochemist'}}
            awards={{ label: 'Awards: ', content: 'Miyake Prize for geochemistry, Tanaka Prize'}}
            discovered={{ label: 'Discovered: ', content: 'a method for measuring carbon dioxide in seawater'}}
            size={70} />
    </div>
  );
}
