$(document).ready(function(){
  $.ajax({
    type: 'GET', //GET is the type of request we are sending
    url:  'http://turing-birdie.herokuapp.com/api/v1/posts.json', //This is the url we are sending it to
    //success means if this is successful do something
    success: function(posts){
      //$.each(posts, function needs two arguments, 1 - index, 2, thing you want to iterate
      $.each(posts, function(index, post){
        $('#latest-posts').append(
          "<div class='post' data-id='"
          + post.id
          + "'><h6>Published on "
          + post.created_at
          + "</h6"
          + "<p>"
          + post.description
          + "</p>"
          + "</div>"
        ) //this appends the posts from .each to our div in index.html called latest-posts
      })
    }
  })
  $('#create-post').on('click', function(){
    var postParams = $('#post-description').val()

    console.log(postParams)
  })
})
