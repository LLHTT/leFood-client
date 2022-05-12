export default function SearchBar({
  value,
  name,
  isLoading,
  handleSubmit,
  onChange,
}) {
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={value}
        name={name}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search Recipes"
        autoComplete="off"
        className="search-input"
      />
      <input
        disabled={isLoading || !value}
        type="submit"
        className="btn-search"
        value="Search"
      />
    </form>
  );
}
