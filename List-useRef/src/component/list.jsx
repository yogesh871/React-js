 import {useState} from "react";

const ListComp = () => {

    const [ListItem , setListItem] = useState(["Home", "About", "Services", "Blog"]);


     return (
        <>
            <h2>Static List </h2>
            <ul>
                <li>{ListItem[0]}</li>
                <li>{ListItem[1]}</li>
                <li>{ListItem[2]}</li>
                <li>{ListItem[3]}</li>
            </ul>

            <hr />

             <h2>Dyanamic List</h2>
          <ol>
            {
                ListItem.map((ListItem, i) => 
                     <li key={i}> {ListItem}</li>
                )
            }

          </ol>

        </>
        )
} 

export default ListComp;