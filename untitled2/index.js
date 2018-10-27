$(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 10,
            order: "viewCount",
            publishedAfter: "2018-01-01T00:00:00Z"
        });

        request.execute(function(response) {
            var results = response.result;
            var mass  = [];
            console.log(results.items);
            for (var key in results.items) {
                console.log(key, results.items[key]);
                 mass.push(results.items[key]);
                 console.log(mass);
            }
            for (var i = 0; i < mass.length; i++) {
                $.ajax({
                    url : 'http://localhost:3000/',
                    type: 'POST',
                    data: {'VideoId' : mass[i].id.videoId}

                });
            }
            });
    });

});

function init() {
    gapi.client.setApiKey("AIzaSyBs5Gt3tUQdXy0ODCf6tkLk51BKkrSH6Qo");
    gapi.client.load("youtube", "v3", function() {
    });
}
