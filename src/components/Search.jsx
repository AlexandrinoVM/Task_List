import "./SearchModule.css"
export const Search = ({search,setSearch}) => {
  return (
    <div className="search">
        <h2>pesquisar</h2>
        <input className={"input"}type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="pesquise tarefa"/>
    </div>
  )
}
