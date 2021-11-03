import * as Realm from 'realm-web'
import React, {useState, useEffect} from 'react';
import Loading from "./Loading";
import itemCard from "./itemCard";
const id = "application-2-jeaej";
const config = {
    id,
};
const app = new Realm.App(config);


function Home() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getData () {
            const user = await app.logIn(Realm.Credentials.anonymous())
            const client = app.currentUser.mongoClient('mongodb-atlas')
            const myItems = client.db('groceryStore').collection('item')
            setItems((await myItems.find({price: 2})))
            //const result = await myItems.find()
            //setItems(result)
            setLoading(false)
        }
        if(loading){
            getData();
        }
    })

    return(
        <div className={'mt-3'}>
            {loading && (
                <div className="text-center">
                    <Loading />
                </div>
            )}
            {items.map((el) => (
                <itemCard key = {el._id} item={el}/>
                ))
            }
        </div>
    );
}

export default Home;