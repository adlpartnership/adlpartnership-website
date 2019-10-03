import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import queryString from "query-string"
import { navigate, useStaticQuery, graphql, Link } from "gatsby"
import { MdSearch } from "react-icons/md"
import { Index } from "elasticlunr"
const SearchResultsPage = props => {
  const keyword = queryString.parse(props.location.search)
  const [search, setSearch] = useState(keyword.s)
  const [loading, setLoading] = useState(true)
  const [searchResults, setSearchResults] = useState([])
  //   function searchIt(e) {
  //     e.preventDefault()
  //     navigate(`/search?s=${search}`)
  //   }

  function handleSearch() {
    const index = Index.load(data.index)
    let tempArray = []
    index.search(keyword.s.toLowerCase(), {}).map(({ ref }) => {
      tempArray.push(index.documentStore.getDoc(ref))
    })

    setSearchResults(tempArray)
  }

  const { data } = useStaticQuery(graphql`
    {
      data: siteSearchIndex {
        index
      }
    }
  `)
  useEffect(() => {
    if (props.location.search !== "" && keyword.s !== undefined) {
      handleSearch()
      setLoading(false)
    } else {
      navigate("/")
    }
  }, [])

  if (searchResults.length > 0 && loading === false) {
    return (
      <React.Fragment>
        <SEO title={`Search result`} />
        <Layout>
          <div className="container my-5 search-result">
            <h1 className="display-4">Search Results</h1>
            <p className="text-muted">
              Found {searchResults.length} results for "{keyword.s}"
            </p>
            <div className="my-5 " />
            {searchResults.map(result => {
              return (
                <div className="col-12 col-md-4" key={`${result.id}`}>
                  <Link
                    to={`/${result.slug}`}
                    className="text-decoration-none text-dark"
                  >
                    <h3 className="font-weight-light">{result.title}</h3>
                  </Link>
                </div>
              )
            })}
          </div>
        </Layout>
      </React.Fragment>
    )
  } else if (searchResults.length === 0 && loading === false) {
    return (
      <React.Fragment>
        <SEO title={`Search result`} />
        <Layout>
          <div className="container my-5">
            <h1 className="display-4">Search Results</h1>
            <p className="text-muted">
              Found {searchResults.length} results for "{keyword.s}"
            </p>
            <h5 className="">
              Sorry, we could not find any results for what you searched.
            </h5>
            <ul className="font-weight-light">
              <li>Make sure all words are spelled correctly.</li>
              <li>Try different keywords.</li>
              <li>Try more general keywords.</li>
              <li>Try fewer keywords.</li>
            </ul>
          </div>
        </Layout>
      </React.Fragment>
    )
  } else if (searchResults.length === 0 && loading === true) {
    return (
      <React.Fragment>
        <SEO title={`Search result`} />
        <div className="container my-5">
          <h1 className="display-4">Loading Results</h1>
          <p className="text-muted">
            Found {searchResults.length} results for "{keyword.s}"
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export default SearchResultsPage
