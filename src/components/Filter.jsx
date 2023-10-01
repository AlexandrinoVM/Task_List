import "./FilterModule.css"
function Filter({filter,setFilter,sort,setSort}) {
  return (
    <div className="filter">
        <h2>filtrar</h2>
        <div>
            <p>status:</p>
            <div className="filter-options">
                <div>
                <select className={"select"} value={filter} onChange={(e)=> setFilter(e.target.value)}>
                    <option value="All">todas</option>
                    <option value="complete">completas</option>
                    <option value="incomplete">incompletas</option>
                </select>
                </div>
                <div>
                    <p>ordem alfabetica</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Filter