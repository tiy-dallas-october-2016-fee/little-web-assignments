(function() {

  console.log('hello!');

  var mountNode = document.querySelector('.react-root');

  var BlogPostHeader = window.Blog.BlogPostHeader;
  var PostBody = window.Blog.PostBody;
  var Related = window.Blog.Related;



  class BlogPost extends React.Component {

    render() {
      //pretend an api call happened

      var apiResult = {
        date: '19 December 2016 12pm America/New_York',
        title: 'TO SAVE REAL NEWS',
        imageUrl: 'http://www.zeldman.com/wp-content/themes/zeldman/images/default.svg'
      }


      return <div className="blog-post">

        <BlogPostHeader
          date={apiResult.date}
          title={apiResult.title} />

        <PostBody imageUrl={apiResult.imageUrl} />

        <Related />

      </div>
    }

  }



  ReactDOM.render(<BlogPost />, mountNode);


})();
