import { useLoaderData, Form } from "react-router-dom";
// name: 'American Cheese', countryOfOrigin: 'Switzerland', image:
function Show(props){
    const cheese=useLoaderData()

        return(
            <div className="cheese">
                <h1>{cheese.name}</h1>
                <h2>{cheese.countryOfOrigin}</h2>
                <img src={cheese.image} alit={cheese.name}/>
                <h2>Update{cheese.name}</h2>
                <Form action={`/update/${cheese._id}`} method="post">
                <input type="text" name="name" placeholder="Cheese's name"  defaultValue={cheese.name}/>
                <input type="text" name="countryOfOrigin" placeholder="Cheese's Origin"  defaultValue={cheese.countryOfOrigin}/>
                <input type="text" name="image" placeholder="Cheese image"  defaultValue={cheese.image}/>
                <input type="submit" value="Update Cheese"/>
                </Form>
                <h2>Delete Cheese</h2>
                  <Form action={`/delete/${cheese._id}`} method="post">
                    <input type="submit" value="Delete Cheese"/>
                </Form>
            </div>
        )
    }

export default Show