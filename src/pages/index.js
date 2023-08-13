import {Link, useLoaderData, Form} from "react-router-dom"
// name: 'American Cheese', countryOfOrigin: 'Switzerland', image:
function Index(props){
    const allCheese = useLoaderData()
    // console.log(allCheese);

    return(<div>
        <h2>Create a New Cheese</h2>
        <Form action="/create" method="post" >
            <label>Name of the Cheese:</label> <br/>
            <input type="text" name="name" placeholder="Cheese name"/>  <br/>
            
            <label>Country of Origin:</label><br/>
            <input type="text" name="countryOfOrigin" placeholder="Origin"/>  <br/>
          
            <label>Image URL:</label>  <br/>
            <input type="text" name="image" placeholder="Image"/>  <br/>  <br/>
            <input type="submit" value="Create Cheese"/>

        </Form>
        {   allCheese.map((cheese,index)=>{
         return <div key={cheese._id} className="person">
            <Link to= {`/${cheese._id}`}>
                <h2> Name: {cheese.name}</h2>
            </Link>
                <img src={cheese.image} alt= {cheese.name}/>
                <h3> Country of Origin: {cheese.countryOfOrigin}</h3>

         </div>       
        }
    )}
        </div>
     )
}

export default Index