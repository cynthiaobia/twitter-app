
const React = require('react');
const DefaultLayout = require('./Layout/Default');

function Show({tweet}) {
  return (
    <DefaultLayout title='Tweets'>

      <div>
        <div>{tweet.title}</div>
        <div>{tweet.author}</div>
        <div>{tweet.body}</div>
        {/* <div>{new Date(tweet.createdAt).toLocalDateString()}</div> */}
      </div>
      
    </DefaultLayout>
  )
}

module.exports = Show;