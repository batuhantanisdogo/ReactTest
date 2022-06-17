import React,{useState,useEffect} from 'react'

export default function Fetchheader() {

    const[token,SetToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2NTU0NTIwNjYsImlzcyI6ImRvZ28iLCJhdWQiOiJEb2dvSGVscERlc2sifQ.MP4mfwq5IKFoZtA9Sw-v8wPaLrIWhSD5912eNbMVjN8"); 
    const[datas,SetDatas] = useState([])

    useEffect(() => {
        fetch(`https://localhost:5001/Home/GetUser/`,{method:"GET",headers:{'Content-Type':'application/json','Authorization':'Bearer ' + token}})
        .then((res) => res.json())
        .then((result) => {
            SetDatas(result.data)
            console.log(datas);
        })
    
    },[])



  return (
    <div>
        {
            datas.map((data) =>(
                <div id={data.id}>
                    <p>{data.firstName} {data.lastName}</p>
                </div>
            ) 

            )
        }
    </div>
  );
}
