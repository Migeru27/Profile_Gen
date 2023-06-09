function generateHTML(data) {
  return `
<!DOCTYPE html>
<html>
<head>
<title>Page</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>
<body class="bg-dark">
  <style>
      .ul{
          list-style-type:none;
          right: 0;
          position: relative;
      }
      li{
          float: left;
          margin: 20px;
      }
      .cardbody{
          width: 200px;
          border-radius: 10px;
          box-shadow: 5px 10px 8px #333;
      }
  </style>
<div class="jumbotron text-white" style="background: #cc0033" >
  <h1 class="text-center" >Company Team Members</h1>
  </div>
  <div class='container'>
  <ul class="ul">
  ${makeCards(data)}
  </ul>
  </div>
</body>
</html>
`;
};
function makeCards(data) {
  return data
    .map(x => {
      let position = x.getRole();
      switch (position) {
        case "Manager":
          return makeManagerCard(x);
          break;
        case "Engineer":
          return makeEngineerCard(x);
          break;
        case "Intern":
          return makeInternCard(x);
          break;
      }
    })
    .join("\n");
}
function makeManagerCard(x) {
  console.log(x);
  let mangerCard = `
  <li>
  <div class="col-md-3">
  <div class="card cardbody">
    <div class="card-header text-white" style="background: #374da3">
                 ${x.name}<br>
                 <div class="fa fa-edit">${x.getRole()}</div>
                </div>
    <div class="card-body">
      <form role="form">			
        <div class="form-group">
            <label for="reserve-unique-id" id="reserve-unique-id">ID: ${
              x.id
            }</label>
        </div>
        <div class="form-group">
          <label for="reserve-email" id="reserve-email">Email: ${
            x.email
          }</label>
        </div>
        <div class="form-group">
            <label for="reserve-phone" id="reserve-office-number">Office Number: ${
              x.officeNumber
            }</label>					
        </div>				
        </form>
    </div>
  </div>
</div>
</li>
`;
  return mangerCard;
}
function makeEngineerCard(x) {
  let engineerCard = `
      <li>
      <div class="col-md-3">
                  <div class="card cardbody">
                  <div class="card-header text-white" style="background: #f99e2c">
                                 ${x.name}<br>
                                <div><i class="fa fa-book"></i> ${x.getRole()}</div><i class="">
                                </div>
                    <div class="card-body">
                      <form role="form">			
                        <div class="form-group">
                            <label for="reserve-unique-id" id="reserve-unique-id">ID:${
                              x.id
                            } </label>
                        </div>
                        <div class="form-group">
                          <label for="reserve-email" id="reserve-email">Email: ${
                            x.email
                          }</label>
                        </div>
                        <div class="form-group">
                            <label for="reserve-phone" id="github">Github: ${
                              x.github
                            }</label>					
                        </div>				
                        </form>
                    </div>
                  </div>
                </div>
                </li>
  `;
  return engineerCard;
}
function makeInternCard(x) {
  let internCard = `
  <li>
  <div class="col-md-3">
      <div class="card cardbody">
      <div class="card-header text-white" style="background: #eb3d3f">
               ${x.name}<br>
              <div><i class="fa fa-coffee"></i> ${x.getRole()}</div>
              </div>
        <div class="card-body">
        <form role="form">			
          <div class="form-group">
            <label for="reserve-unique-id" id="reserve-unique-id">ID:${
              x.id
            } </label>
          </div>
          <div class="form-group">
          <label for="reserve-email" id="reserve-email">Email: ${
            x.email
          }</label>
          </div>
          <div class="form-group">
            <label for="reserve-phone" id="school">School: ${x.school}</label>					
          </div>				
          </form>
        </div>
      </div>
            </div>
            </li>
  `;
  return internCard;
}

module.exports = generateHTML;