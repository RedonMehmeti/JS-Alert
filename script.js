
// Swal.fire({
    
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success"
//   });

  document.getElementById('normal').addEventListener('click',function(){
    alert('I am a normal alert')
  })

  document.getElementById('sweet').addEventListener('click',function (){
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
    
  })
  Swal.fire({
    title: "Custom width, padding, color, background.",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("./cat.gif")
      left top
      no-repeat
    `
  });
  
