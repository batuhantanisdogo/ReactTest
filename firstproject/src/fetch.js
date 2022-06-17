import React, {useState,useEffect} from 'react'


export default function Fetch() {
    console.log("Fetch Giriş Yapıldı");
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [image,setImage] = useState(0);
     
    const[email,setEmail] = useState("gurcan.altintas@dogostore.com");
    const[lastname,setLastname] = useState("Altıntaş");
    const[datas,SetDatas] = useState([]);

    useEffect(() => {
      fetch(`https://localhost:5001/Home/Login/${email}/${lastname}`,{method:"POST",headers:{'Content-Type':'application/json'}})
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result);
              SetDatas([result.data])
          },
          (error) => {
            setError(error);
          }
        )
    },[image])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
            {
                datas.map((res) =>(
                    <div style={{marginTop:"1em"}}>
                     <p>{res.name}</p>
                     <p>{res.email}</p>   
                     <p>{res.token}</p>
                    </div>
                ))
                
            }
            <button onClick={() => setImage(image+1)}  className='btn btn-dark'>ChangeImage</button>
        </div>
      );
    }
}
