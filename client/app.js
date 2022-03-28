$("#chirpBtn").click(() => {
  $.ajax(('http://127.0.0.1:3000/api/chirps/', JSON.stringify({"user": $("#name").val(), "text":  $("#chirp").val()})))
})