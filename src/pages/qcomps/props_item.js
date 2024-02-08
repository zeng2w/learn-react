function Item({ name, isPacked }) {
  if (isPacked) {
    return <li>
        <del className="item">{name} </del>
    </li>
    
  }
  return <li className="item"> {name} </li>

  // let tag;
  // isPacked? tag = <li>
  // <del className="item">{name} </del>
  //     </li> : tag = <li className="item"> {name} </li>
  // return tag;  
  
  // return isPacked? <li>
  //  <del className="item">{name} </del>
  //      </li> : <li className="item"> {name} </li>

  // return (<li className="item"> {isPacked? <del> {name} </del> : name} </li>)
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={false}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={true}
          name="Socks"
        />
      </ul>
    </section>
  );
}
