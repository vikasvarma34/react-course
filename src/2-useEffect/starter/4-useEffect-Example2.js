import React,{useState,useEffect} from 'react'

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Starter4 = () => {

const [drinksData, setDrinksData] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [loading, setLoading] = useState(true);
const [isError, setIsError] = useState({status:false, msg:""});
const [isModalOpen, setIsModalOpen] = useState(false);
const [currentRecipe, setCurrentRecipe] = useState(null);

const fetchDrinksData = async (apiUrl) =>{
try{
const response = await fetch(apiUrl);
const {drinks} = await response.json();
if(drinks){
    setDrinksData(drinks);
    setLoading(false);
    setIsError({status:false, msg:""})   
}
else{
    setDrinksData([]);
    setLoading(false);
    setIsError({ status: true, msg: "No drinks found" });
}
}catch(error){
    setLoading(false);
    setIsError({status:true,
         msg:error.message || "Something went wrong! Please try again"})
    }
};

const handleImageClick = (recipe) => {
    setCurrentRecipe(recipe);
    setIsModalOpen(true);
};

const Modal = ({ isOpen, onClose, recipe }) => {
    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
            <h2>{recipe.strDrink}</h2>
            <p>{recipe.strInstructions}</p>
            <button onClick={onClose}>OK</button>
        </div>
    );
};


useEffect(() => {
    const correctedURL = `${URL}${searchTerm}`;
 fetchDrinksData(correctedURL);
},[searchTerm]);


 
  return (
    <div>
    <form>
    <input type="text" 
    name="search" 
    id="search"
    placeholder='search something new..'
    value={searchTerm} 
    onChange={(e) => setSearchTerm(e.target.value)}/>
    </form>
    <hr />
    {loading && <h1>Loading</h1>}
   {isError.status && <h1 style={{ color: "Red" }}><strong>{isError.msg}</strong></h1>}
   {!loading && !isError.status && drinksData.length > 0 &&
    (<ol className='cocktail-data'>
        { drinksData.map((eachDrink) => {
                const {idDrink, strDrink, strDrinkThumb} = eachDrink;
                return <li key={idDrink}>
                    <div>
                        <img  src={strDrinkThumb} alt={strDrink} 
                        onClick={() => handleImageClick(eachDrink)}/>
                    </div>
                    <div className='text'>
                        <h3>{strDrink}</h3>
                    </div>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} recipe={currentRecipe} />

                </li>
            })}
    </ol>)} 

    </div>
  );
}

export default Starter4
