(function() {

  class BlogPostHeader extends React.Component {

    render() {
      console.log('props', this.props);

      return <header>
        <div className="post-date">{this.props.date}</div>
        <h1>{this.props.title}</h1>
      </header>
    }

  }

  window.Blog.BlogPostHeader = BlogPostHeader;

})();
