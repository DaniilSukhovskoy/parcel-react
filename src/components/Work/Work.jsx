import { useParams } from "react-router-dom";



// match id with link?
export default function Work() {
    const [data, setData] = useState();
    const id = '27c730a8-59cd-4af5-b620-d28035c0909a'; // <--- Update me!
    
    // let { title } = useParams();


    useEffect(() => {
        fetch('data.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(data) {
            // console.log(data);
            setData(data);
          });
            
      }, [id]);

    return (
        <h2>Work {title}</h2>
    )
};