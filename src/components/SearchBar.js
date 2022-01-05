export default function SearchBar({ value, isLoading, handleSubmit, onChange }) {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={value}
                autoComplete="on"
                disabled={isLoading}
                onChange={onChange}
                placeholder="Search Recipes"
                className="form-control"
            />
            <input 
                disabled={isLoading || !value}
                type="submit"
                className="btn-search"
                value="Search"
            />
        </form>
    )
}