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
          + "</h6>"
          + "<p>"
          + post.description
          + "</p>"
            //to create a button for deleting
          + "<button id='delete-post' name='delete-button' class='btn btn-default btn-xs'>Delete</button>"
          + "</div>"
        ) //this appends the posts from .each to our div in index.html called latest-posts
      })
    }
  })
  $('#create-post').on('click', function(){
    var postParams = {
      post: { description: $('#post-description').val() }
    }

    $.ajax({
      type:     'POST',
      url:      'http://turing-birdie.herokuapp.com/api/v1/posts.json',
      data:     postParams,
      success:  function(newPost) {
        $('#latest-posts').append(
          "<div class='post' data-id='"
          + newPost.id
          + "'><h6>Published on "
          + newPost.created_at
          + "</h6>"
          + "<p>"
          + newPost.description
          + "</p>"
          + "<button id='delete-post' name='delete-button' class='btn btn-default btn-xs'>Delete</button>"
          + "</div>"
          )
      }
    })
  })
  $('#fetch-posts').on('click', function(){
    $.ajax({
      type: 'GET', //GET is the type of request we are sending
      url: 'http://turing-birdie.herokuapp.com/api/v1/posts.json', //This is the url we are sending it to
      //success means if this is successful do something
      success: function(posts) {
        //$.each(posts, function needs two arguments, 1 - index, 2, thing you want to iterate
        $.each(posts, function(index, post) {
          $('#latest-posts').append(
            "<div class='post' data-id='"
            + post.id
            + "'><h6>Published on "
            + post.created_at
            + "</h6>"
            + "<p>"
            + post.description
            + "</p>"
            + "<button id='delete-post' name='delete-button' class='btn btn-default btn-xs'>Delete</button>"
            + "</div>"
          ) //this appends the posts from .each to our div in index.html called latest-posts
        })
      }
    })
  })
})
