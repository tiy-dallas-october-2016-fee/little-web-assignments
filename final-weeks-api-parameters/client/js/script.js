var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      apiResult: {
        items: []
      }
    };
    this.page = 1;
  }

  componentDidMount() {
    console.log('component did mount');
    this.callApi();
  }

  callApi(query, sort, page) {

    if (query === undefined || query === '') {
      query = 'pants';
    }

    if (sort === undefined) {
      sort = '';
    }

    if (page === undefined) {
      page = 1
    }

    $.ajax({
      url: 'https://api.github.com/search/users?q=' + query
      + '&sort=' + sort
      + '&page=' + page
    })
    .done((data) => {
      console.log('data', data);
      this.setState({
        apiResult: data
      });
    });
  }

  search() {
    console.log('search', this.queryInput.value);

    this.callApi(this.queryInput.value, this.sortInput.value, this.page);
  }

  next() {
    this.page += 1;
    this.search();
  }



  render() {
    return <div>

      <div className="search-options">
        <input placeholder="query" ref={(input) => { this.queryInput = input; }} />
        <input placeholder="sort" ref={(input) => { this.sortInput = input; }} />
        <button onClick={() => { this.search(); }}>run search</button>
      </div>

      <button onClick={() => { this.next(); }}>next</button>

      <ul>
        {this.state.apiResult.items.map((item) => {
          return <li key={item.id}>{item.login}</li>
        })}
      </ul>
    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
